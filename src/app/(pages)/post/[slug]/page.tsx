import React from "react";
import Tag from "@/app/components/Tag/Tag";
import Image from "next/image";
import AuthorWithDate from "@/app/components/AuthorWithDate/AuthorWithDate";
import Comments from "@/app/components/Comments/Comments";
import TempImg from "@/public/image.jpg";
import { getPost } from "@/api/api";
import styles from "./page.module.css";

export default function page({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  return (
    <>
      {post && (
        <div className={styles.post}>
          <div className={styles.header}>
            <Tag tag={post.tag} />
            <h1>{post.title}</h1>
            <AuthorWithDate
              author={post?.author}
              date={post.date}
              image={post.author_image}
            />
          </div>
          <Image
            src={TempImg}
            alt={post.title}
            objectFit="contain"
            height={460}
            className={styles.image}
          />
          <div className={styles.content}>
            <p>{post?.content}</p>
            <p>{post?.content}</p>
            <p>{post?.content}</p>
            <p>{post?.content}</p>
          </div>
          <Comments />
        </div>
      )}
    </>
  );
}
