import axios from "axios";
import { NextApiResponse } from "next";
import { NextIronRequest, withSession } from "../../../util/session";

const handler = async (req: NextIronRequest, res: NextApiResponse) => {
  
  res.redirect(`/`);
};

const fetcher = async (endpoint: string) => {
  try {
    const blockfrostKey = process.env.BLOCKFROST_KEY;
    if (blockfrostKey) {
      const { data } = await axios.get(
        `https://cardano-mainnet.blockfrost.io/api/v0/${endpoint}`,
        {
          headers: {
            project_id: blockfrostKey,
          },
        }
      );
      return data;
    }
  } catch (error) {
    throw error;
  }
  throw new Error(
    "Please define the BLOCKFROST_KEY environment variable inside .env"
  );
};

export default withSession(handler);
