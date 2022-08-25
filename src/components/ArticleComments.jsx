import { useEffect, useState } from "react";
import { fetchArticleComments } from "../api-util";
import NewComment from "./NewComment";

const articleComments = () => {
  const [loading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState({});

  const { individual_article } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticleComments(individual_article).then((articleData) => {
      setArticleComments(articleData.comments);
      setIsLoading(false);
    });
  }, [individual_article, newComment]);

  const addComment = (body) => {
    postArticleComment(individual_article, body).then((res) =>
      setArticleComments((currArticleComments) => {
        return [...currArticleComments, res.newArticleComment];
      })
    );
  };

  if (loading) return <p>is loading...</p>;
  return (
    <div className="write-comment-header">
      <p>Write your comment here:</p>
      <div className="insert-label">
        <NewComment submitLabel="Insert" handleSubmit={addComment} />
      </div>
    </div>
  );
};

export default articleComments;
