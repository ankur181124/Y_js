import React, { useEffect, useState } from "react";
import { sharedText } from "../utils/yjsConfig";

function TextEditor() {
  const [text, setText] = useState("");

  useEffect(() => {
    const updateText = () => setText(sharedText.toString());
    sharedText.observe(updateText);
    updateText();
    return () => sharedText.unobserve(updateText);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    sharedText.delete(0, sharedText.length);
    sharedText.insert(0, e.target.value);
  };

  return <textarea value={text} onChange={handleChange} />;
}

export default TextEditor;
