import { useEffect, useState } from "react";
import {
  fetchIndividualArticle,
  patchArticleUpVotes,
  patchArticleDownVotes,
  fetchArticleComments,
  postArticleComment,
} from "../api-util";
import { useParams } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import NewComment from "./NewComment";

const IndividualArticle = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [articleComments, setArticleComments] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [voteCount, setVoteCount] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState({});

  const { individual_article } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchIndividualArticle(individual_article).then((articleData) => {
      setSingleArticle(articleData.article);
      setIsLoading(false);
    });
    fetchArticleComments(individual_article).then((articleData) => {
      setArticleComments(articleData.comments);
      setIsLoading(false);
    });
  }, [individual_article, newComment]);

  const handleCommentDisplay = () => {
    setShowComments(!showComments);
    const mappedComments = articleComments.map((comment) => (
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

  const addComment = (body) => {
    postArticleComment(individual_article, body).then((res) =>
      setArticleComments((currArticleComments) => {
        alert("comment submitted");
        return [...currArticleComments, res.newArticleComment];
      })
    );
  };

  if (loading) return <p>is loading...</p>;
  return (
    <div className="indi--article-data">
      <h1 className="indi--article-title">{singleArticle.title}</h1>
      <p className="indi--article-author">
        <span>Author: </span>
        {singleArticle.author}
      </p>
      <p className="indi--article-body">{singleArticle.body}</p>
      <div className="single-article-comment-container">
        <p className="indi--article-comment">
          <button
            onClick={() => {
              handleCommentDisplay();
            }}
          >
            <span>Comment count: </span>
          </button>{" "}
          {singleArticle.comment_count}
        </p>
        <p className="indi--article-comment">
          <span>Topic: </span>
          {singleArticle.topic}
        </p>
        <p className="indi--article-comment vote-button">
          Votes: {singleArticle.votes + voteCount}{" "}
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
        <div className="insert-label">
          <NewComment submitLabel="Insert" handleSubmit={addComment} />
        </div>
      </div>
      {showComments}
    </div>
  );
};

export default IndividualArticle;
