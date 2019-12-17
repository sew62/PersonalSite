Scott's Personal Website

To contribute:

`npm run start` runs local stack

building for prod:
`heroku login` optional
`heroku git:remote -a scott-williams-dev` set remote to my heroku app
`cd client && npm run build` prod build for client
`git add . && git commit -m "Production build"`
`git push heroku master -f` to heroku
`git reset --hard HEAD~1`
`git push` to github