import { useState } from "react";

const NewComment = ({ submitLabel, handleSubmit }) => {
  const [comment, setComment] = useState("");
  const isTextareaDisabled = comment.length === 0;

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(comment);
    setComment("");
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <button disabled={isTextareaDisabled}>{submitLabel}</button>
    </form>
  );
};

export default NewComment;
