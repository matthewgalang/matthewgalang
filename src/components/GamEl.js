import React, { Component } from 'react'

export default class GamEl extends Component{
    state = {
        gamerClass: ' glitch hide'
    }
    componentDidMount(){
        setTimeout(function(){
            this.setState({gamerClass: ' glitch'})
        }.bind(this),this.props.wait)
        setTimeout(function(){
            this.setState({gamerClass: ''})
        }.bind(this),this.props.wait +2000)
    }
    render(){
        return(
            <span className={"d-block gamerOpacity"+this.state.gamerClass} data-text="Gamer" id="gam">
                Gamer
            </span>
        )
    }
}