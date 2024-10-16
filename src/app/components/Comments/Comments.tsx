import React from "react";
import { getAllComments } from "@/api/api";
import styles from "./comments.module.css";
import Comment from "./components/Comment/Comment";

export default async function Comments() {
  const comments = await getAllComments();

  return (
    <div className={styles.comments}>
      <div>Comments</div>
      <ul>
        {comments.map((comment: any) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </ul>
    </div>
  );
}
