const proxy = require('http-proxy-middleware') // for netlify functions

module.exports = {
	developMiddleware: app => { // -- START netlify functions middleware 
		app.use(
			proxy('/.netlify/functions/', {
				target: 'http://localhost:9000/',
				pathRewrite: {
					'^/\\.netlify/functions': ''
				}
			})
		)
	}, // -- END netlify functions middleware
	siteMetadata: {
		title: `Matthew Galang`,
		description: `Simple & responsive layout for all things related to the work and craft of Matthew Galang.`,
		author: `@MatthewAGalang`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
