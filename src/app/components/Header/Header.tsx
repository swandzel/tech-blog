import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import TempImg from "@/public/temp-main-image.jpg";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src={TempImg} objectFit="contain" alt="" />
    </header>
  );
}
