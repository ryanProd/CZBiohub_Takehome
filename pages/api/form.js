import { sql } from '@vercel/postgres';

/*
API Route that handles Fibonacci number computation and database access.
Queries the database for the user input n first, if Fibonacci numbers are cached then return cached result,
if not then compute Fibonacci numbers, cache them, then return result.
*/

export default async function handler(req, res){
    const body = req.body;
    const n = body.fibInput;
    let cachedNums = null;

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

    //value '2,147,483,647', which happens if n > 47, is out of range for type integer for our database, so compute without touching database.
    if (n >= 48){
        computeFibNumbers(n);
        res.status(200).json({data: `${fibNumbers}`});

    }

    //Query database for user input if n < 47
    else{
        try {
            cachedNums = await sql`SELECT fib_nums FROM fibnums WHERE n = ${n}`
        } catch (error) {
            return res.status(500).json({ error });
        }

        //If cached, return cached result after some formatting.
        if (cachedNums.rows.length != 0){
            const jsonCachedNums = JSON.stringify(cachedNums.rows[0]).slice(13, -2);
            res.status(200).json({data: `${jsonCachedNums}`});
            cachedNums = null;
        }
        //Else not cached, compute the numbers, store them in database, and return result.
        else {
            computeFibNumbers(n);
            try {
                await sql`INSERT INTO fibnums (n, fib_nums) VALUES (${n}, ${fibNumbers});`;
            } catch (error) {
                console.log(error);
                return response.status(500).json({ error });
            }
            res.status(200).json({data: `${fibNumbers}`});
        }
    }
}