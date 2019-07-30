import React from "react"
import NavigationItem from "./NavigationItem"

export default class Navigation extends React.Component {
    render(){
        return(
            <>
                <div className={this.props.className}>
                    { this.props.mobile &&
                    <NavigationItem text="Top" link ="/#___gatsby" icon="long-arrow-alt-up" /> }
                    <NavigationItem text="About" link="/#about-me" icon={['far','user-circle']} />
                    <NavigationItem text="Projects" link="/#top-projects" icon="code" />
                    <NavigationItem text="Experience" link="/#experience" icon={['far', "chart-bar"]} />
                    <NavigationItem text="Contact" link="/#contact" icon={['far', "comment"]} />
                    { !this.props.mobile &&
                    <NavigationItem text="DM me" link="https://twitter.com/messages/compose?recipient_id=823962265909010432" external={true} icon={['far', "envelope"]} /> }
                </div>
            </>
        )
    }
}