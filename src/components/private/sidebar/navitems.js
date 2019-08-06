export const navitems = [
	{
		name: "inventory",
		linkTo: "/products",
		icon: "fa-archive",
		admin: false,
		dropdowns: true,
		links: [
			{
				name: "products",
				linkTo: "/products"
			},
			{
				name: "collections",
				linkTo: "/products/collections"
			},
			{
				name: "categories",
				linkTo: "/products/categories"
			},

			{
				name: "brands",
				linkTo: "/products/brands"
			}
		]
	},

	{
		name: "users",
		linkTo: "/users",
		icon: "fa-users",
		admin: false,
		dropdowns: false
	},
	{
		name: "customers",
		linkTo: "/customers",
		icon: "fa fa-address-card",
		admin: false,
		dropdowns: false
	},

	{
		name: "orders",
		linkTo: "/orders",
		icon: "fas fa-shopping-bag",
		admin: false,
		dropdowns: false
	},

	{
		name: "promotions",
		linkTo: "/promotions",
		icon: "fas fa-bullhorn",
		admin: false,
		dropdowns: false
	},

	{
		name: "settings",
		linkTo: "/settings",
		icon: "fa-cog",
		admin: false
	},
	{
		name: "contents",
		linkTo: "/contents/headerimgs",
		icon: "far fa-edit",
		admin: false,
		dropdowns: false
	},
	{
		name: "marketing",
		linkTo: "/marketing",
		icon: "far fa-ad",
		admin: false,
		dropdowns: false
	}
];
