// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

type IData = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<IData>) => {
  res.status(200).json({ name: "John Doe" });
  // ...
};
