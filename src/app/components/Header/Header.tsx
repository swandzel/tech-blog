import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { getNewestPost } from "@/api/api";

export default function Header() {
  const post = getNewestPost();

  return (
    <header className={styles.header}>
      <Image
        src={`/posts/${post.image}`}
        width={500}
        height={600}
        alt=""
        className={styles.image}
      />
    </header>
  );
}
