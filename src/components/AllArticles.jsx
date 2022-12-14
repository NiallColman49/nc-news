import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchAllArticles } from "../api-util";
import Topics from "./Topics";
// import PropagateLoader from "react-spinners/PropagateLoader";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <p>is loading</p>;
  return (
    <>
      <Topics />
      <ul>
        {articles.map((article) => {
          console.log(articles);
          return (
            <main className="article-wrapper">
              <div className="article-container">
                <li className="article-item" key={article.article_id}>
                  <Link to={`/articles/${article.article_id}`}>
                    <div className="article-title">{article.title}</div>
                  </Link>
                  <div className="article-body">{article.body}</div>
                  <div className="article-details">
                    <div className="article-name">
                      <p>
                        <span className="article-bold">Author: </span>
                        {article.author}
                      </p>
                    </div>
                    <div className="article-topic">
                      <p>
                        <span className="article-bold">Topic: </span>
                        {article.topic}
                      </p>
                    </div>
                    <div className="article-votes">
                      <p>
                        <span className="article-bold">Votes: </span>
                        {article.votes}
                      </p>
                    </div>
                  </div>
                </li>
              </div>
            </main>
          );
        })}
      </ul>
    </>
  );
};

export default Articles;
