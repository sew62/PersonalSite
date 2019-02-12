import React from 'react';
import MyArticle from './../components/MyArticle';
// import './home.css';

class Experience extends React.Component {
  render() {
    document.body.style.overflow = "visible";
    return (
      <div id="home-page">
        <div id="article-bgd">
          <article id="tagline">
            <h2>EXPERIENCE</h2>
            <p className="max-width-content">Here's a glimpse into some of my awesome experiences I have had since entering this exciting industry. For a more "bullet-pointed" list, grab a copy of my resume!</p>
          </article>
        </div>
        <div className="max-width-container article-blue">
          <MyArticle
            image="images/uakron.jpg"
            alt="The University of Akron"
            textContent={school}
            swap={true}
            />
        </div>
        <div className="max-width-container article-white">
          <MyArticle
            alt="Macy's Thanksgiving Day Parade"
            image="images/macys.jpg"
            textContent={macys}
            swap={false}
            />
        </div>
        <div className="max-width-container article-yellow">
          <MyArticle
            alt="Case Western Bootcamp Graduation"
            image="images/case-bootcamp.jpeg"
            textContent={bootcamp}
            swap={true}
            />
        </div>
        <div className="max-width-container article-blue">
          <MyArticle
            image="images/kalibrate.jpg"
            alt="Kalibrate"
            textContent={kalibrate}
            swap={false}
            />
        </div>
        <div className="max-width-container article-white">
          <MyArticle
            alt="TEALS"
            image="images/tealsk12.jpg"
            textContent={teals}
            swap={true}
            />
        </div>
      </div>
    );
  }
}

export default Experience;

const school = 'My major in college was an easy choice, but I had no idea what I had really gotten myself into... ' +
'I chose Computer Science for one simple reason: I was the resident "tech expert" in my family household growing up. ' +
'"You\'re good with computers, you should major in technology!!" - My Mom, probably... This turned out to be the perfect ' +
'marriage of my math skills, my attention to detail, and my passion for getting to know how things worked. I left The ' +
'University of Akron in May of 2016 with a B.S. in Computer Science - Management Track ready to learn how things worked "in the real world".';

const macys = 'I can\'t say enough good things about the company or the people at Macy\'s. I went in there as a wide-eyed ' +
'rookie and came out a seasoned vet. I had a hand in many of the key pieces of the POS rebuild beginning with writing some of ' +
'the first lines of code all the way to supporting that new code in production (sometimes in the stores!). My team won a ' +
'hackathon from my "Facial Recognition Login" project idea, I mentored the onboarding college grads for their entry project, ' +
'and I got exposure to many technologies - Java, Swift, Node.js, BackboneJS, Handlebars, Jasmine, C#, just to name a few. ' +
'Taking part in a retail giant\'s quest to bring technology to the forefront was every bit as exciting as it sounds.';

const bootcamp = 'Near the end of my tenure with Macy\'s, I decided that I wasn\'t satisfied with the amount of ' +
'new subjects I was learning. When I heard about the Coding Bootcamp at Case Western Reserve University, I jumped ' +
'with excitement because it meant the opportunity to - not only gain new industry experience and make connections - ' +
'but also to help other passionate individuals get their start in my field as well! I spend 6 months working 3 days ' +
'a week for several hours at a time being a TA (Teaching Assistant). I graded programs, assisted with lectures, debugged ' +
'many many projects, and most importantly mentored sprouting devs. This was an amazing experience and I took some ' +
'cool new skills from it ( this website is built in React :) ).';

const kalibrate = 'My time with Kalibrate has been nothing short of career-altering. I have met some of the brightest ' +
'minds in modern software development and have been working hand-in-hand with them to change the culture of our company. ' +
'The biggest architecture changes revolved around building microservices to suit the business needs instead of the current ' +
'monolith architecture. We use the Strangler Pattern on the monolith to break the logical business units out into APIs. ' +
'Our goals are to build 12 Factor Apps that scale horizontally, live in the cloud, and are multi-tennant. ' +
'This is no doubt a large undertaking and still has a long way to go but we have paved a way for the company to follow. ' +
'I have worked with Angular, C# (.NET Core), Protractor, Docker, Kubernetes, amongst others.';

const teals = 'While attending a big data meetup, I connected with a man who runs the Cleveland branch of TEALS (' +
'Technology Education and Literacy in Schools). I had never heard of the program, but I interviewed with him and ' +
'I was accepted as a volunteer computer science teacher! It has been a very fun and rewarding job ( even though it ' +
'doesn\'t pay well ;) ) and I spend 2-3 mornings per week teaching high schoolers the fundamentals of computer science. ' +
'I have had multiple of the 12 students in the inner-city classroom ask me questions about my career and about ' +
'what it would be like to take a computer science program in college. That is the whole reason I took the job!!';