import React from "react";
import Image from "next/image";
import styles from "./authorwithdate.module.css";
import Author from "@/public/author.png";

export default function AuthorWithDate({
  author,
  date,
}: {
  author: string;
  date: string;
}) {
  return (
    <div className={styles.authordate}>
      <Image src={Author} width={36} height={36} alt={author} />
      <span className={styles.author}>{author}</span>
      <span className={styles.date}>{date}</span>
    </div>
  );
}
