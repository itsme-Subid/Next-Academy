import { readFile, readdir } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    error?: String;
    data?: String | String[];
  }>
) {
  try {
    readdir("./courseData", (err, files) => {
      if (!!err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(200).json({ data: files });
      }
    });
    // readFile("./courseData/hello.json", "utf8", (err, data) => {
    //   if (!!err) {
    //     res.status(500).json({ error: err.message });
    //   } else {
    //     res.status(200).json(JSON.parse(data));
    //   }
    // });
  } catch (err: unknown) {
    res.status(500).json({ error: (err as Error).message });
  }
}
