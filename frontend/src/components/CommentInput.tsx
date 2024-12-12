import React, { useState } from "react";

function CommentInput({ onAddComment }: { onAddComment: (text: string, tags: string[]) => void }) {
  const [text, setText] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddComment(text, tags);
      setText("");
      setTags([]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment"
      />
      <input
        type="text"
        value={tags.join(", ")}
        onChange={(e) => setTags(e.target.value.split(",").map((t) => t.trim()))}
        placeholder="Add tags (comma-separated)"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default CommentInput;
