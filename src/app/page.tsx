import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Posts />
    </div>
  );
}
