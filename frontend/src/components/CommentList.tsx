import  { useEffect, useState } from "react";
import { commentsArray } from "../utils/yjsConfig";

function CommentList() {
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    const updateComments = () => setComments(commentsArray.toArray());
    commentsArray.observe(updateComments);
    updateComments();
    return () => commentsArray.unobserve(updateComments);
  }, []);

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text} - <strong>{comment.tags?.join(", ")}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
