import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity-client";
import { groq } from "next-sanity";

type Data = {
  products: Product[];
};

const query = groq`*[_type == "product"] {
_id,
  ...
} | order(_createdAt asc)`;

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const products: Product[] = await sanityClient.fetch(query);
  res.status(200).json({ products });
}
