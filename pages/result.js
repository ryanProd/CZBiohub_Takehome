import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

/*
Retrieves query data passed by FibonacciForm component and displays it.
Reference for router functionality: https://nextjs.org/docs/pages/api-reference/functions/use-router
*/

export default function Result() {
    const router = useRouter();
    const fibNumbers = router.query.data;
    return (
        <div className={styles.container}>
          {fibNumbers}
      </div>
    )
}