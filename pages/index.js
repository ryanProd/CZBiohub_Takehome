import styles from '../styles/Home.module.css';
import FibonacciForm from '../components/forms/fibonacciForm';
import { useRouter } from 'next/router'

export default function Home() {

  return (
    <div className={styles.container}>
      <main>
        <FibonacciForm/>
      </main>
    </div>
  )
}
