import styles from '../styles/Home.module.css';
import FibonacciForm from '../components/forms/fibonacciForm';

export default function Home() {

  return (
    <div className={styles.container}>
      <main>
        <FibonacciForm/>
      </main>
    </div>
  )
}
