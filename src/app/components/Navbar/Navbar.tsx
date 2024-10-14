import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Search from "@/public/search.png";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.logo} href="/">
        <Image src={Logo} alt="Tech Blog by Seb" width={36} height={36} />
        Tech Blog by Seb
      </Link>
      <ul className={styles.links}>
        <li>Home</li>
        <li>About us</li>
        <li>All posts</li>
        <li>Contact</li>
      </ul>
      <div className={styles.search}>
        Search
        <Image src={Search} width={16} height={16} alt="Search" />
      </div>
    </nav>
  );
}
