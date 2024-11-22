// src/app/page.js
import Quiz from '../../components/Quiz';
import styles from '../src/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Quiz App</h1>
      <Quiz />
    </div>
  );
}
