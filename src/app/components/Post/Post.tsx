import React from "react";
import styles from "./post.module.css";
import Link from "next/link";
import Image from "next/image";
import Tag from "../Tag/Tag";
import Author from "@/public/author.png";
import TempImg from "@/public/image.jpg";

export default function Post({ post }: { post: any }) {
  return (
    <Link className={styles.post} href={`post/${post.slug}`}>
      <Image
        src={TempImg}
        alt={post.title}
        width={360}
        height={240}
        className={styles.image}
      />
      <Tag tag={post.tag} />
      <div className={styles.title}>{post.title}</div>
      <div className={styles.authordate}>
        <Image src={Author} width={36} height={36} alt={post.author} />
        <span className={styles.author}>{post.author}</span>
        <span className={styles.date}>{post.date}</span>
      </div>
    </Link>
  );
}
