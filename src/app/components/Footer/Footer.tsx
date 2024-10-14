import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link className={styles.logo} href="/">
        <Image src={Logo} alt="Tech Blog by Seb" width={36} height={36} />
        Tech Blog by Seb
      </Link>
      <div className={styles.author}>
        Developed by swandzel in Next.js | 2024
      </div>
      <ul className={styles.links}>
        <li>Home</li>
        <li>About us</li>
        <li>All posts</li>
        <li>Contact</li>
      </ul>
    </footer>
  );
}
