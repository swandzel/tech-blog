import React from "react";
import styles from "./tag.module.css";

export default function Tag({ tag }: { tag: string }) {
  return <div className={styles.tag}>{tag}</div>;
}
