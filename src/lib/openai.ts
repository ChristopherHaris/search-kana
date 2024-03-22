// import OpenAI from "openai";
require("dotenv").config();

// export const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

import { CohereClient } from "cohere-ai";

export const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});