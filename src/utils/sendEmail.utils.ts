import "dotenv/config";
import { AppError } from "../errors/errors";
import { createTransport } from "nodemailer";
import { ISendEmailRequest } from "../interfaces/mailHandler";

const sendEmailService = async ({
	to,
	subject,
	text
}: ISendEmailRequest): Promise<string> => {
	const tranporter = createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS
		}
	});

	const statusMessage = await tranporter
		.sendMail({
			from: "shopcar.project@gmail.com",
			to,
			subject,
			html: text
		})
		.then(() => {
			return "Email sent successfully";
		})
		.catch(err => {
			console.log(err);
			throw new AppError("Error sending email, try again later", 500);
		});

	return statusMessage;
};

export default sendEmailService;
