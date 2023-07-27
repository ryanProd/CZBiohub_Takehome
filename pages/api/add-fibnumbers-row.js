import { sql } from '@vercel/postgres';
 
/*
API Route used to insert rows into database table for testing
Function was used by visiting route path 'http://localhost:3000/api/add-fibnumbers-row'
*/

export default async function handler(request, response) {
  try {
    const n = 3;
    const nums = [0, 1, 1];
    await sql`INSERT INTO fibnums (n, fib_nums) VALUES (${n}, ${nums});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  //Display all rows
  const table = await sql`SELECT * FROM FibNums;`;
  return response.status(200).json({ table });
}