export default function FibonacciForm() {
    const handleSubmit = async (event) => {

        event.preventDefault();

        const form = event.target;

        const data = {
            fibInput: form.fibInput.value
        };

        const response = await fetch('/api/form', {
            body: JSON.stringify(data),

            headers: {
                'Content-Type': 'application/json',
            },

            method: 'POST',
        });

        const result = await response.json();
        alert(`Check: ${result.data}`);

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