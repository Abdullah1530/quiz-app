import Quiz from '../components/Quiz';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Quiz App</h1>
      <Quiz />
    </div>
  );
}
