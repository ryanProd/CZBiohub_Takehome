import styles from '../styles/Home.module.css';
import FibonacciForm from '../components/forms/fibonacciForm';

/*
Basic homepage. The form is it's own component for reusability and extensibility.
*/

export default function Home() {

  return (
    <div className={styles.container}>
      <main>
        <FibonacciForm/>
      </main>
    </div>
  )
}
