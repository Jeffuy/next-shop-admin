const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
	auth: {
		login: `${API}/api/${VERSION}/auth/login`,
		profile: `${API}/api/${VERSION}/auth/profile`,
	},
	products: {
		getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
		allProducts: `${API}/api/${VERSION}/products`,
		getProduct: id => `${API}/api/${VERSION}/products/${id}`,
		addProducts: `${API}/api/${VERSION}/products`,
		updateProduct: id => `${API}/api/${VERSION}/products/${id}`,
		deleteProduct: id => `${API}/api/${VERSION}/products/${id}`,
	},
	users: {
		getUsers: `${API}/api/${VERSION}/users`,
		postUsers: `${API}/api/${VERSION}/users`,
		postUsersIsAvailable: `${API}/api/${VERSION}/users/is-available`,
	},
	categories: {
		getCategories: `${API}/api/${VERSION}/categories`,
		postCategories: `${API}/api/${VERSION}/categories`,
		getCategory: id => `${API}/api/${VERSION}/categories/${id}/products`,
		putCategories: id => `${API}/api/${VERSION}/categories/${id}`,
	},
	files: {
		postFiles: `${API}/api/${VERSION}/upload`,
		getFiles: filename => `${API}/api/${VERSION}/files/${filename}`,
	},
};

export default endPoints;
