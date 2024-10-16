import React from "react";
import Image from "next/image";
import styles from "./authorwithdate.module.css";

export default function AuthorWithDate({
  author,
  date,
  image,
}: {
  author: string;
  date: string;
  image: string;
}) {
  return (
    <div className={styles.authordate}>
      <Image
        src={`/authors/${image}.png`}
        width={36}
        height={36}
        alt={author}
      />
      <span className={styles.author}>{author}</span>
      <span className={styles.date}>{date}</span>
    </div>
  );
}
