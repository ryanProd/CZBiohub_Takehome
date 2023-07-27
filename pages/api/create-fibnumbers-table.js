import { sql } from '@vercel/postgres';

/*
API Route used to create tables in database
Function was used by visiting route path 'http://localhost:3000/api/create-fibnumbers-table'
*/

export default async function handler(request, response) {
    try{
        const result = 
          await sql`CREATE TABLE FibNums ( n integer, fib_nums integer[] );`;
        return response.status(200).json({ result });
    } catch (error) {
        return response.status(500).json({ error });
    }
}