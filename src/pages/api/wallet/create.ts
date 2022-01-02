import { NextApiResponse } from "next";
import { NextIronRequest, withSession } from "../../../util/session";
import { genRandomHash } from "../../../util/crypt";
import { dbConnect } from "../../../util/mongodb";

const handler = async (req: NextIronRequest, res: NextApiResponse) => {
  const { db } = await dbConnect();
	const uniqueHash = genRandomHash(36);

	res.redirect(`/`);
};

export default withSession(handler);
