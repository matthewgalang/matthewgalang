/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.css"
import Background from "./Background"
import Navigation from "./Navigation"

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <Background />
            <Header siteTitle={data.site.siteMetadata.title} />
			<main>
				<div className="container">
					{children}
				</div>
			</main>
            <footer className="container myFooter">
				<div className="row">
					<div className="col-md-5 col-sm-12">
						© {new Date().getFullYear()}, Built with
						{` `}
						<a className="text-dark" href="https://www.gatsbyjs.org">Gatsby</a>
						<a className="d-block text-dark" href="https://icons8.com/icon/10232/php">
							PHP icon by Icons8
						</a>
					</div>
				</div>
            </footer>
            <Navigation mobile={true} className="d-md-none d-flex justify-content-around navigationMobile py-2"/>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
