import React from "react";
import styles from "./post.module.css";
import Link from "next/link";
import Image from "next/image";
import Tag from "../Tag/Tag";

export default function Post({ post }: { post: any }) {
  return (
    <Link className={styles.post} href={`post/${post.slug}`}>
      <Image
        src={post.image}
        alt={post.title}
        width={360}
        height={240}
        className={styles.image}
      />
      <Tag tag={post.tag} />
      <div className={styles.title}>{post.title}</div>
      <div className={styles.authordate}>
        <span className={post.author}>{post.author}</span>
        <span className={post.date}>{post.date}</span>
      </div>
    </Link>
  );
}
