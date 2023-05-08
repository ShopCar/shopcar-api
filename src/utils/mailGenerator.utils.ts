import Mailgen from "mailgen";

const mailGenerator = (baseURL: string) => {
	return new Mailgen({
		theme: "default",
		product: {
			name: "ShopCar",
			link: baseURL,
			logo: "https://raw.githubusercontent.com/ShopCar/shopcar-api/d15467906344cdf37a81241bd18882b8df0cb26f/documentation/logo.png",
			logoHeight: "100px"
		}
	});
};

export default mailGenerator;
