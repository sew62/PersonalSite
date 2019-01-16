import React from 'react';
import MyArticle from './../components/MyArticle';
import './home.css';

const txt = `Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."

1914 translation by H. Rackham`;

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
            textContent={txt}
            swap={true}
            />
        </div>
        <div className="max-width-container article-white">
          <MyArticle
            image="https://via.placeholder.com/300"
            textContent={txt}
            swap={false}
            />
        </div>
        <div className="max-width-container article-yellow">
          <MyArticle
            image="https://via.placeholder.com/300"
            textContent={txt}
            swap={false}
            />
        </div>
      </div>
    );
  }
}

export default Home;