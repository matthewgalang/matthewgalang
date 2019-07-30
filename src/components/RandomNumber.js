import React, { Component } from 'react';
import './odometer-theme-minimal.css';
import Odometer from "react-odometerjs";

export default class RandomNumber extends Component {
    state ={
        randomNumber : this.props.initial
    }
    componentDidMount() {
        const intervalId = setInterval(() => this.getRandomInt(this.props.min,this.props.max), 1500)
        this.setState({ intervalId })
    }
    getRandomInt(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        this.setState({randomNumber: Math.floor(Math.random() * (max - min)) + min})
    }
    render() {
        return(
            <Odometer 
            format="d" 
            duration={20000} 
            value={ this.state.randomNumber }/>
        )
    }
}