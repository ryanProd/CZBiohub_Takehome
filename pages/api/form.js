export default function handler(req, res){
    const body = req.body;
    const n = body.fibInput;
    const fibNumbers = [];

    function computeFibNumbers(n) {
        let x = 0;
        let y = 1;
        let next;

        for (let i = 1; i <= n; i++) {
            fibNumbers.push(x);
            next = x + y;
            x = y;
            y = next;
        }
    }

    computeFibNumbers(n);
    res.status(200).json({data: `${fibNumbers}`});
}