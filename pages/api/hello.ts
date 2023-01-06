import { readFile } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  readFile("pages/api/hello.ts", "utf8", (err, data) => {
    if (!!err) {
      res.status(500).json({ name: err.message });
    }
    res.status(200).json({ name: data });
  });
}
