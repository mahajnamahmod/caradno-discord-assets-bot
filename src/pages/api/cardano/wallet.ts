import { NextApiResponse } from "next";
import { NextIronRequest, withSession } from "../../../util/session";
import { dbConnect } from "../../../util/mongodb";

const handler = async (req: NextIronRequest, res: NextApiResponse) => {
	const { db } = await dbConnect();
	console.log(req.body);
	res.redirect(`/`);
};

export default withSession(handler);
