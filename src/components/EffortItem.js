import React, { Component } from 'react'
import Odometer from "react-odometerjs";
import './odometer-theme-minimal.css';

export default class EffortItem extends Component {
    render() {
        return(
            <span className="effortItem">
                { typeof window !== 'undefined' &&
                    <div className="effortCount">
                        <Odometer 
                            format="d" 
                            duration={10000} 
                            value={ this.props.value }
                        />
                    </div>
                }
                {this.props.text}
            </span>
        )
    }
}