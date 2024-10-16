"use client";
import React, { useState } from "react";
import styles from "./comment.module.css";

export default function Comment({ comment }: { comment: any }) {
  const [hideComment, setHideComment] = useState(false);

  const toggletHideComment = () => {
    setHideComment((prev) => !prev);
  };

  return (
    <div className={styles.comment}>
      {!hideComment ? (
        <li>
          <div>
            <b>{comment.email}</b>
          </div>
          <div>{comment.body}</div>
        </li>
      ) : (
        <div>Komentarz ukryty</div>
      )}

      <button onClick={toggletHideComment}>
        {hideComment ? "Pokaż komentarz" : "Ukryj komentarz"}
      </button>
    </div>
  );
}
