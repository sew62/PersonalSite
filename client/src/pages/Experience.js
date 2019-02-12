import React from 'react';
import MyArticle from './../components/MyArticle';
// import './home.css';

const txt = `Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

1914 translation by H. Rackham`;

class Experience extends React.Component {
  render() {
    document.body.style.overflow = "visible";
    return (
      <div id="home-page">
        <div id="article-bgd">
          <article id="tagline">
            <h2>EXPERIENCE</h2>
            <p className="max-width-content">Here's a glimpse into some of my awesome experiences I have had since entering this exciting industry.</p>
          </article>
        </div>
        <div className="max-width-container article-blue">
          <MyArticle
            image="images/uakron.jpg"
            alt="Scott and Nicole"
            textContent={school}
            swap={true}
            />
        </div>
        <div className="max-width-container article-white">
          <MyArticle
            image="images/case-bootcamp.jpeg"
            textContent={bootcamp}
            swap={false}
            />
        </div>
        <div className="max-width-container article-yellow">
          <MyArticle
            image="images/case-bootcamp.jpeg"
            textContent={txt}
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
const bootcamp = 'Near the end of my tenure with Macy\'s, I decided that I wasn\'t satisfied with the amount of ' +
'new subjects I was learning. When I heard about the Coding Bootcamp at Case Western Reserve University, I jumped ' +
'with excitement because it meant the opportunity to - not only gain new industry experience and make connections - ' +
'but also to help other passionate individuals get their start in my field as well! I spend 6 months working 3 days ' +
'a week for several hours at a time being a TA (Teaching Assistant). I graded programs, assisted with lectures, debugged ' +
'many many projects, and most importantly mentored sprouting devs. This was an amazing experience and I took some ' +
'cool new skills from it ( this website is built in React :) )';