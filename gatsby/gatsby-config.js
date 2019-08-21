let siteMetadata = {
	title: `Aldren Bobiles`,
	capitalizeTitleOnHome: true,
	logo: `/images/logo.png`,
	icon: `/images/icon.png`,
	titleImage: `/images/wall.jpg`,
	introTag: `BASIC | HUMAN`,
	description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
	author: `@iamaldren`,
	blogItemsPerPage: 10,
	portfolioItemsPerPage: 10,
	darkmode: true,
	navLinks: [{
			name: "HOME",
			url: "/"
		},
		{
			name: "ABOUT",
			url: "/about"
		},
		{
			name: "BLOG",
			url: "/blog"
		},
		{
			name: "PORTFOLIO",
			url: "/portfolio"
		},
		{
			name: "CONTACT",
			url: "/contact"
		}
	],
	footerLinks: [{
		name: "PRIVACY POLICY",
		url: "/privacy-policy"
	}],
	social: [{
			name: "Facebook",
			icon: "/images/Facebook.svg",
			url: "#"
		},
		{
			name: "Twitter",
			icon: "/images/Twitter.svg",
			url: "https://twitter.com/iamaldrew"
		},
		{
			name: "Instagram",
			icon: "/images/Instagram.svg",
			url: "#"
		},
		{
			name: "Youtube",
			icon: "/images/Youtube.svg",
			url: "#"
		},
		{
			name: "LinkedIn",
			icon: "/images/LinkedIn.svg",
			url: "#"
		},
		{
			name: "GitHub",
			icon: "/images/GitHub.svg",
			url: "#"
		}
	],
	contact: {
		api_url: "./test.json",
		/* Leave this completely empty (no space either) if you don't want a contact form. */
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Proin ac consequat arcu.`,
		mail: "aldrenbobiles@gmail.com",
		phone: "000-000-0000",
		address: "Singapore"
	}
}

module.exports = {
	siteMetadata: siteMetadata,
	plugins: [
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
      			plugins: [
					"gatsby-remark-copy-linked-files",
        			{
          				resolve: `gatsby-remark-images`,
          				options: {
            				maxWidth: 1280
          				}
        			}
      			]
    		}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `contents`,
				path: `${__dirname}/contents/`
			}
		},
		{
			resolve: `gatsby-plugin-less`,
			options: {
				strictMath: true,
			},
		},
	],
}
