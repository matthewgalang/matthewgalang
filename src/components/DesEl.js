import React, { Component } from 'react'

export default class DesEl extends Component{
    state = {
        designerClass: 'photoShop'
    }
    componentDidMount(){
        setTimeout(function(){
            this.setState({designerClass: 'baseState'})
        }.bind(this),this.props.wait)
    }
    render(){
        return(
            <span className={"d-block "+ this.state.designerClass} id="des">
                Designer
            </span>
        )
    }
}