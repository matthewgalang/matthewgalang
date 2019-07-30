import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import Navigation from "./Navigation"
import NavigationItem from "./NavigationItem"

export default class Header extends React.Component {
	constructor() {
		super();
		this.handleScroll = this.handleScroll.bind(this);
	}
	state = {
		isSolid:false
	}
	componentDidMount(){
		window.addEventListener('scroll',  this.handleScroll)
	}
	handleScroll(){
		const heightToSolid = document.querySelector("#top-home").getBoundingClientRect().top
		this.setState({isSolid: (window.scrollY >= heightToSolid)})
	}
	
	render(){
		return(
			<header className={"myNavbar " + (this.state.isSolid ? 'solid' : '') }>
				<div className="container">
					<div className="row">
						<div className="col-9 col-sm-5">
							<h1>
								<Link to="/#___gatsby">
									{this.props.siteTitle}
								</Link>
							</h1>
						</div>
						<Navigation className="d-none pl-md-5 d-md-flex justify-content-around col-md-7 align-items-center"/>
						<div className="d-md-none d-flex justify-content-around ml-auto">
							<NavigationItem text="DM me" link="https://twitter.com/messages/compose?recipient_id=823962265909010432" external={true} icon={['far', "envelope"]}/>
						</div>
					</div>
				</div>
			</header>
		)
	}
}


Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}
