import { Link } from "gatsby"
import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NavigationItem extends React.Component {
    render(){
        return(
            <>
                {this.props.external ? (
                        <a className="navIcon px-2" href={this.props.link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={this.props.icon}/>
                            <span>{this.props.text}</span>
                        </a>
                    ) : (
                        <Link className="navIcon px-2" to={this.props.link}>
                            <FontAwesomeIcon icon={this.props.icon}/>
                            <span>{this.props.text}</span>
                        </Link>
                    )
                }
            </>
        )
    }
}