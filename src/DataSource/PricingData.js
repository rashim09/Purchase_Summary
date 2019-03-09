import chairImage from '../assets/images/CH_Image.jpeg';
import tableImage from '../assets/images/tableImage.jpeg';

const pricingData = {
	pricing: {
		subtotal: 102.96,
		savings: 3.85,
		tax: 8.92,
		total: 108.03,
		zip: 94085
	},
	itemDetails: [
		{
			item_name: "Essentials by OFM ESS-3085 Racing Style Gaming Chair , Red",
			quantity: 1,
			item_price: 70.99,
			discounted_price: 69.07,
			imagesrc: chairImage
		},
		{
			item_name: "Ameriwood Home Garrett Metal office Desk with 2 side Shelves, Multiple Colors , Blue",
			quantity: 1,
			item_price: 37.04,
			discounted_price: 32.15,
			imagesrc: tableImage
		}
	]
};

export const getPricingData = (delay = .1000) => {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(pricingData)
			return pricingData;
		}, delay);
	})
}

export default getPricingData;