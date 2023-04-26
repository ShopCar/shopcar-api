type IEmailTemplate = {
	intro: string;
	btnText: string;
	btnLink: string;
	baseURL: string;
	name: string;
	email: string;
	outro: string;
	subject: string;
	instructions: string;
};

type ISendEmailRequest = {
	to: string;
	text: string;
	htmlText?: string;
	subject: string;
};

type IResetPasswordService = {
	email: string;
	host: string;
	protocol: string;
};

type IUserResetPasswordService = {
	password: string;
	token: string;
};

export {
	IEmailTemplate,
	ISendEmailRequest,
	IResetPasswordService,
	IUserResetPasswordService
};
