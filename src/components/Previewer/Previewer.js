import React, { useState } from "react";
import "./Previewer.css";
import DOMPurify from "dompurify";
import marked from "marked";

function Previewer(props) {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleClick = () => {
    setIsMaximized(!isMaximized);
    if (!isMaximized) {
      props.passMaximized("Previewer");
    } else {
      props.passMaximized("");
    }
  };

  return (
    <div
      className={`previewer-container ${
        isMaximized ? "maximized" : "minimized"
      }`}
    >
      <div className="previewer-header">
        <h3>Previewer</h3>
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
      <div className="preview-container">
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              marked(props.markdown, { breaks: true })
            ),
          }}
        ></div>
      </div>
    </div>
  );
}

export default Previewer;
