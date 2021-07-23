import React, { useState } from "react";
import "./Editor.css";

function Editor(props) {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleClick = () => {
    setIsMaximized(!isMaximized);
    if (!isMaximized) {
      props.passMaximized("Editor");
    } else {
      props.passMaximized("");
    }
  };

  return (
    <div
      className={`editor-container ${isMaximized ? "maximized" : "minimized"}`}
    >
      <div className="editor-header">
        <h3>Editor</h3>
        <button
          aria-label="maximize/minimize button"
          onClick={() => handleClick()}
        >
          {isMaximized ? (
            <i className="fas fa-compress-arrows-alt"></i>
          ) : (
            <i className="fas fa-expand-arrows-alt"></i>
          )}
        </button>
      </div>
      <textarea
        value={props.text}
        onChange={(e) => props.handleInputChange(e)}
        id="editor"
      ></textarea>
    </div>
  );
}

export default Editor;
