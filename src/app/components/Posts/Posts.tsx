import React from "react";
import Post from "./components/Post/Post";
import styles from "./posts.module.css";
import { getAllPosts } from "@/api/api";

export default function Posts() {
  const posts = getAllPosts();

  return (
    <div>
      <div className={styles.title}>Latest Post</div>
      <div className={styles.posts}>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
