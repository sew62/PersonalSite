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
            image="images/mediumicon.png"
            textContent={medium}
            swap={false}
            />
        </div>
        <div className="max-width-container article-yellow">
          <MyArticle
            image="https://via.placeholder.com/300"
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
const medium = "Whenever I run into a challenging topic with a sneaky solution, I turn to Medium to share my learnings with the world. I'm still relatively new to blogging, but being a part of the development community is extremely important to me, so I try to put out new articles on a regular basis. Check it out! <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://medium.com/@scott.williams.dev\" style=\"color:#273B7A\">https://medium.com/@scott.williams.dev</a>";