# Search Kana
A search engine with semantic search, using Upstash(vector database) and Cohere AI

## Stack
- [NextJS](https://nextjs.org/) - A flexible React framework that gives you building blocks to create fast, full-stack web applications
- [CohereAI](https://cohere.com/) - Used for the embedding model
- [Neon](https://neon.tech/) - The fully managed serverless Postgres
- [Upstash](https://upstash.com/) - Vector database
## How to Install & Run

Follow these steps to install and run the application:

1. **Clone Repository:**
   ```bash
   git clone https://github.com/ChristopherHaris/sakana-porto.git
   cd sakana-porto
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Set Up Environment Variables:**

   Create a .env file in the root directory and configure the necessary environment variables. You can use .env.example as a template.

   Example:
   ```env
   DATABASE_URL=YOUR_DATABASE_URL
   UPSTASH_VECTOR_REST_URL=REST_URL
   UPSTASH_VECTOR_REST_TOKEN=REST_TOKEN
   COHERE_API_KEY=YOUR_COHERE_API_KEY
   ```
4. **Run the Application:**
   ```bash
   npm run dev
   ```

The application will be accessible at [localhost](http://localhost:3000/).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
