import { useRouter } from 'next/router'

export default function Result() {
    const router = useRouter();
    const fibNumbers = router.query.data;
    return (
        <div id="container">
            <ul>{fibNumbers}</ul>
        </div>
    )
}