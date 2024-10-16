import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { getNewestPost } from "@/api/api";
import Tag from "../Tag/Tag";
import AuthorWithDate from "../AuthorWithDate/AuthorWithDate";
import Link from "next/link";

export default function Header() {
  const post = getNewestPost();

  return (
    <Link href={`post/${post.slug}`}>
      <header className={styles.header}>
        <Image
          src={`/posts/${post.image}`}
          width={500}
          height={450}
          alt=""
          className={styles.image}
        />
        <div className={styles.text}>
          <Tag tag={post.tag} />
          <div className={styles.title}>{post.title}</div>
          <AuthorWithDate
            author={post.author}
            date={post.date}
            image={post.author_image}
          />
        </div>
      </header>
    </Link>
  );
}
