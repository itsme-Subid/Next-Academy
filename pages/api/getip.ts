import { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";

const corsOptions = {
  origin: ["http://localhost:5173", "https://devsubid.vercel.app"],
};

const getip = (req: NextApiRequest, res: NextApiResponse) => {
  if (corsOptions.origin.indexOf(req.headers.origin!) === -1) {
    res.status(403).json({ message: "Forbidden" });
    return;
  }
  if (req.method === "POST") {
    const clientIp = requestIp.getClientIp(req);
    res.status(200).json({ ip: clientIp });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default getip;
