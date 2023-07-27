import { useRouter } from 'next/router'

export default function FibonacciForm() {
    const router = useRouter()
    
    const handleSubmit = async (event) => {

        event.preventDefault();

        const form = event.target;
        const val = form.fibInput.value;

        if (!val) {
            alert('Please enter value');
            return false;
        }

        if (isNaN(Number(val))){
            alert('Please enter a number');
            return false;
        }

        if (!Number.isInteger(Number(val))){
            alert('Please enter an integer');
            return false;
        }

        if (Number(val) < 0){
            alert('Please enter a positive number');
            return false;
        }

        const data = {
            fibInput: val
        };

        const response = await fetch('/api/form', {
            body: JSON.stringify(data),

            headers: {
                'Content-Type': 'application/json',
            },

            method: 'POST',
        });

        const result = await response.json();
        if (result != null){
            router.push({
                pathname: '/result',
                query: { data: result.data }
            });
        };
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="fibNumber">Enter a number n to generate the first n Fibonacci numbers: </label>
                <input type="text" id="fibInput" name="fibInput" required />
                <button type="submit">Submit</button>
            </form>
        </div>
      )
}