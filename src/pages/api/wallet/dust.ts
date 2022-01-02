import { NextApiResponse } from "next";
import { NextIronRequest, withSession } from "../../../util/session";
import { genRandomHash } from "../../../util/crypt";
import { dbConnect } from "../../../util/mongodb";

const handler = async (req: NextIronRequest, res: NextApiResponse) => {
	if (req.method !== 'POST') {
		throw res.status(404);
	}
	// const uniqueHash = genRandomHash(36);
	let randomDust;
	const { db } = await dbConnect();
	const user = await db.collection("users").findOne({ _id: req.body.user.id });
	if (!(<any>user).dust) {
		randomDust = Math.floor((Math.random() * 100000) + 1);
		db.collection("users").updateOne(
			{ _id: req.body.user.id },
			{
				$set: {
					dust: randomDust
				}
			});
	} else {
		randomDust = (<any>user).dust
	}
	res.status(200).json({ sendAmount: `2.${randomDust}` })
};

export default withSession(handler);
