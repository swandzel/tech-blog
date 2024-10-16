import React from "react";
import styles from "./post.module.css";
import Link from "next/link";
import Image from "next/image";
import Tag from "../../../Tag/Tag";
import AuthorWithDate from "../../../AuthorWithDate/AuthorWithDate";

export default function Post({ post }: { post: any }) {
  return (
    <Link className={styles.post} href={`post/${post.slug}`}>
      <Image
        src={`/posts/${post.image}`}
        alt={post.title}
        width={360}
        height={240}
        className={styles.image}
      />
      <Tag tag={post.tag} />
      <div className={styles.title}>{post.title}</div>
      <AuthorWithDate
        author={post.author}
        date={post.date}
        image={post.author_image}
      />
    </Link>
  );
}
