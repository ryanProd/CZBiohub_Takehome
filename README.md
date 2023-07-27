# CZBiohub_Takehome
Written using [Next.js](https://nextjs.org) framework and [Vercel Postgre Relational Database](https://vercel.com/docs/storage/vercel-postgres). <br>
<br>
The app has two pages. The first one has the form component. The form component, FibonacciForm has input validation, sends the form data to the form API route, and then redirects to the result page with the returned data. <br>
The /api/form.js API route handles Fibonacci number computation and database access. It queries the database for the user input n first, if Fibonacci numbers are cached then return cached result, if not then compute Fibonacci numbers, cache them, then return result. The database's table's datatype has been set to integer, so it cannot accept any value larger than '2,147,483,647', which is when user input n is larger than 47. If that is the case then the numbers are computed but not stored in the database. This was an oversight by me, I could have set the dataype to BIGINT, which is much larger. <br>
The second page is the result page and simply displays the Fibonacci numbers passed to it by the home page/form component. <br>

## Design Decisions
When designing a web application of this kind, I first think about use case, basically what will this web app do. This will probably involve talking to many people, and take multiple iterations.<br>
Next, I break down the overall task into smaller tasks that will usually correspond logically to different parts of a system, and represent a flow of data. <br>
Here is where I will start preliminarily choosing what technologies to use. In this case, we need a front end for building the user-interfaces and components, and then controller layer/ API routing to handle the form request/data, and a relational database for caching. <br>
I chose Next.js because it provides additional tooling and configuration that makes building a web application a bit more streamlined, compared to building a React app from scratch. The potential downside of a single stack framework like Next.js is lack of flexbility, say for example the way they do routing might not make sense for certain use cases. However, Next.js does do some pretty cool things under the hood that can make a web app more robust, say for example the ability to choose rendering methods on a page by page basis. When looking at Front End components, I am thinking about the components that we will need, which functionalities can be reused and modularized, and the page hierarchy. Also, what kind of rendering, what type of infrastructure, etc makes sense for this use case.<br>
The Vercel Postgre Database is relational, and has fairly simple integrations which is nice. In terms of choosing a database for a system, I would first model the data explicitly, row and column wise. Then make an estimation of data size and identifying potential access patterns. This will inform what database service to use and give a rough a cost analysis as well. I think it is also useful to keep in mind the scale of data that the app might grow to in the future, as building for scale from the start might be easier than having to migrate when the app is live and the backend needs to be upgraded. <br>
After preliminarily choosing the technologies, I would usually bring this information in front of colleagues to receive feedback. If it generally looks good, then I would begin a proof of concept, and build out the basic skeletons and test integrations between parts of the design to confirm that the system is feasible. After proof of concept I would then meet again with colleagues to finalize the design before really diggin in. Unanticipated restictions and issues might be found during development, it is important to re-evaluate the design carefully when this happens.<br>


## Local Installation
Not sure if local installation will work for others without access to my github as [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) is linked to my github. <br>
If you don’t have Node.js installed, install it from [here](https://nodejs.org/en/). You’ll need Node.js version 10.13 or later. <br>
Install [Next.js and React](https://nextjs.org/docs/getting-started/installation). <br>
Install [Vercel Postgres and Vercel CLI](https://vercel.com/docs/storage/vercel-postgres/quickstart). <br>

## Local Spin up
run "npm run dev" and visit "http://localhost:3000"

## Online Links
The app is hosted [here](https://cz-biohub-takehome.vercel.app) <br>
The repository can be viewed [here](https://github.com/ryanProd/CZBiohub_Takehome)

