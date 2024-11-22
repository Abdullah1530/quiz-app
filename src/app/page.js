// src/app/page.js
import Quiz from '../../components/Quiz';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Choose Correct Option</h1>
      <Quiz />
    </div>
  );
}
