import { Schema, model } from "mongoose";
import { genSalt, hash, compare } from "bcrypt";
const WORK_FACTOR = 10;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true
    }
});


UserSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }

    genSalt(WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        _hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.validatePassword = function (candidatePassword) {
    return new Promise((resolve, reject) => {
        compare(candidatePassword, this.password, function (err, isMatch) {
            if (err) return reject(err);
            resolve(isMatch);
        });
    });
};

const User = model('User', UserSchema);

export default User;