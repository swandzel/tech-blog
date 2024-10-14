import React from "react";
import Post from "../Post/Post";
import styles from "./posts.module.css";

const posts = [
  {
    id: 1,
    author: "Joe Doe",
    date: "20/1/2024",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    image: "/image.jpg",
    tag: "front-end",
    slug: "title",
  },
  {
    id: 2,
    author: "Joe Doe",
    date: "20/1/2024",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    image: "/image.jpg",
    tag: "front-end",
    slug: "title",
  },
  {
    id: 3,
    author: "Joe Doe",
    date: "20/1/2024",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    image: "/image.jpg",
    tag: "front-end",
    slug: "title",
  },
  {
    id: 4,
    author: "Joe Doe",
    date: "20/1/2024",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    image: "/image.jpg",
    tag: "tests",
    slug: "title",
  },
  {
    id: 5,
    author: "Joe Doe",
    date: "20/1/2024",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    image: "/image.jpg",
    tag: "back-end",
    slug: "title_slug",
  },
];

export default function Posts() {
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
