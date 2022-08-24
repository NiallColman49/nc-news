import { useEffect, useState } from "react";
import {
  fetchIndividualArticle,
  patchArticleUpVotes,
  patchArticleDownVotes,
} from "../api-util";
import { useParams } from "react-router-dom";

const IndividualArticle = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [voteCount, setVoteCount] = useState(0);
  const [err, setErr] = useState(null);

  const { individual_article } = useParams();

  useEffect(() => {
    fetchIndividualArticle(individual_article).then((articleData) => {
      setSingleArticle(articleData);
      setIsLoading(false);
    });
  }, [individual_article]);

  const handleUpVote = () => {
    setVoteCount((currCount) => currCount + 1);
    patchArticleUpVotes(individual_article)
      .then((res) => {
        console.log("SUCCESS");
      })
      .catch((err) => {
        alert("NO NO NO");
      });
  };

  const handleDownVote = () => {
    setVoteCount((currCount) => currCount - 1);
    patchArticleDownVotes(individual_article)
      .then((res) => {
        console.log("SUCCESS");
      })
      .catch((err) => {
        alert("Please try again");
      });
  };

  if (loading) return <h1>Currently loading...</h1>;
  return (
    <div className="indi--article-data">
      <h1 className="indi--article-title">{singleArticle.article.title}</h1>
      <p className="indi--article-author">
        <span>Author: </span>
        {singleArticle.article.author}
      </p>
      <p className="indi--article-body">{singleArticle.article.body}</p>
      <div className="single-article-comment-container">
        <p className="indi--article-comment">
          <span>Comment count: </span>
          {singleArticle.article.comment_count}
        </p>
        <p className="indi--article-comment">
          <span>Topic: </span>
          {singleArticle.article.topic}
        </p>
        <p className="indi--article-comment vote-button">
          Votes: {singleArticle.article.votes + voteCount}{" "}
          <button
            className="vote-button"
            onClick={() => {
              handleUpVote();
            }}
          >
            +
          </button>{" "}
          <button
            className="vote-button"
            onClick={() => {
              handleDownVote();
            }}
          >
            -
          </button>{" "}
        </p>
      </div>
    </div>
  );
};

export default IndividualArticle;
