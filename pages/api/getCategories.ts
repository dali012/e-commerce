import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity-client";
import { groq } from "next-sanity";

type Data = {
  categories: Category[];
};

const query = groq`*[_type == "category"] {
_id,
  ...
}`;

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categories: Category[] = await sanityClient.fetch(query);
  res.status(200).json({ categories });
}
