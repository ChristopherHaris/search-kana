// import { openai } from "./openai";

import { cohere } from "./openai";

// export const vectorize2 = async (input: string): Promise<number[]> => {
//   const embeddingResponse = await openai.embeddings.create({
//     input,
//     model: "text-embedding-3-small",
//   });

//   const vector = embeddingResponse.data[0].embedding;

//   return vector;
// };

// change to use open source model

export const vectorize = async (inputs: string): Promise<number[]> => {
  const embeddingResponse = await cohere.embed({
    texts: [inputs],
    model: "embed-english-v3.0",
    inputType: "search_document",
  });

  if (Array.isArray(embeddingResponse.embeddings)) {
    const vector: number[] = embeddingResponse.embeddings.flat();
    return vector;
  } else {
    return [];
  }
};
