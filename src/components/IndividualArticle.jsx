import { useEffect, useState } from "react";
import {
  fetchIndividualArticle,
  patchArticleUpVotes,
  patchArticleDownVotes,
  fetchArticleComments,
} from "../api-util";
import { useParams } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

const IndividualArticle = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [articleComments, setArticleComments] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [voteCount, setVoteCount] = useState(0);
  const [showComments, setShowComments] = useState(false);

  const { individual_article } = useParams();

  useEffect(() => {
    fetchIndividualArticle(individual_article).then((articleData) => {
      setSingleArticle(articleData);
      setIsLoading(false);
    });
    fetchArticleComments(individual_article).then((articleData) => {
      setArticleComments(articleData);
      setIsLoading(false);
    });
  }, [individual_article]);

  const { comments } = articleComments;

  const handleCommentDisplay = () => {
    console.log("clicked");
    setShowComments(!showComments);
    const mappedComments = comments.map((comment) => (
      <div className="opened-comment">
        <div className="opened-contain">
          <span className="opened-author">Author: </span>
          {comment.author}
          <span className="opened-votes">Votes: </span>
          {comment.votes}{" "}
        </div>
        <div>
          <span className="opened-comment">Comment: </span>
        </div>
        {comment.body}
      </div>
    ));
    console.log(mappedComments);
    setShowComments(mappedComments);
  };

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

  if (loading) return <PropagateLoader />;
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
          <button
            onClick={() => {
              handleCommentDisplay();
            }}
          >
            <span>Comment count: </span>
          </button>{" "}
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
            {" "}
            -
          </button>{" "}
        </p>
      </div>
      <div className="write-comment-header">
        <p>Write your comment here:</p>
      </div>
      {showComments}
    </div>
  );
};

export default IndividualArticle;
