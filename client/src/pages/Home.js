import React from 'react';
import MyArticle from './../components/MyArticle';
import './home.css';

class Home extends React.Component {
  render() {
    document.body.style.overflow = "visible";
    return (
      <div id="home-page">
        <div id="article-bgd">
          <article id="tagline">
            <h2>SOFTWARE ENGINEER</h2>
            <p className="max-width-content">(n) A professional in tech who strives not only to get the job done, but who strives to design and implement the best solution for the problem at hand.</p>
          </article>
        </div>
        <div className="max-width-container article-blue">
          <MyArticle
            image="images/scottandnicole.jpg"
            alt="Scott and Nicole"
            textContent={intro}
            swap={true}
            />
        </div>
        <div className="max-width-container article-white">
          <MyArticle
            image="images/mediumicon.png"
            textContent={medium}
            swap={false}
            />
        </div>
        <div className="max-width-container article-yellow">
          <MyArticle
            image="images/code-bgd.jpeg"
            textContent={experience}
            swap={true}
            />
        </div>
      </div>
    );
  }
}

export default Home;

const intro = 'Hello! I\'m Scott Williams, a passionate software engineer from Akron, Ohio. Welcome to my website. It was designed and created from scratch by myself - using React! I\'m a versatile developer who loves fooling around with the latest technologies. I have professional experience with React, Angular, and Backbone, but I decided to make this site in React because I was helping teach React to coding bootcamp students at the time of its inception. Thanks for checking it out, please don\'t hesitate to reach out using any of my provided avenues of contact!';
const medium = 'Whenever I run into a challenging topic with a sneaky solution, I turn to Medium to share my learnings with the world. I\'m still relatively new to blogging, but being a part of the development community is extremely important to me, so I try to put out new articles on a regular basis. Check it out! <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@scott.williams.dev" style="color:#273B7A">https://medium.com/@scott.williams.dev</a>';
const experience = 'Head over to my experiences tab to get a look at the places I\'ve been and the things I\'ve worked on!';