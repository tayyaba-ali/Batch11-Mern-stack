import jwt from 'jsonwebtoken';
import 'dotenv/config';
import chalk from 'chalk';

const authenticate = (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(401).json({
			message: 'Unauthorized',
		});
	} else {
		try {
			const token = req.headers.authorization.trim().split(' ')[1];
			console.log('token type--->', typeof token);
			const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
			console.log(decoded)
			console.log(decoded._doc.username);
			// console.log(Object.keys(JSON.stringify(decoded)))
		} catch (error) {
			console.log(error);
		}
	}
	next();
};
export default authenticate;

// beare toke
// ["bearer","sfdldfhsjdsfh"]
