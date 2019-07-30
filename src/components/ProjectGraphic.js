import React, { Component } from 'react';
import "./projectGraphic.css"

export default class ProjectGraphic extends Component {
    renderTop(){
        if (this.props.multi){
            return(
                <svg className="projectHead" xmlns="http://www.w3.org/2000/svg" width="602" height="43" viewBox="0 0 602 43">
                <path className="multi-cls-1" d="M0,10A10,10,0,0,1,10,0H592a10,10,0,0,1,10,10V28H0Z"/>
                <circle className="multi-cls-2" cx="15.5" cy="15.5" r="7.5"/>
                <circle className="multi-cls-3" cx="40.5" cy="15.5" r="7.5"/>
                <circle className="multi-cls-4" cx="65.5" cy="15.5" r="7.5"/>
                <rect className="multi-cls-5" y="28" width="602" height="15"/>
                <path className="multi-cls-5" d="M87.91,21.06A15,15,0,0,1,102.78,8h68.44a15,15,0,0,1,14.87,13.06L187,28H87Z"/>
                <path className="multi-cls-6" d="M187.91,21.06A15,15,0,0,1,202.78,8h68.44a15,15,0,0,1,14.87,13.06L287,28H187Z"/>
                <path className="multi-cls-6" d="M287.91,21.06A15,15,0,0,1,302.78,8h68.44a15,15,0,0,1,14.87,13.06L387,28H287Z"/>
                <path className="multi-cls-6" d="M387.91,21.06A15,15,0,0,1,402.78,8h68.44a15,15,0,0,1,14.87,13.06L487,28H387Z"/>
                <path className="multi-cls-6" d="M487.91,21.06A15,15,0,0,1,502.78,8h68.44a15,15,0,0,1,14.87,13.06L587,28H487Z"/>
                </svg>    
            )
        } else {
            return(
                <svg className="projectHead" xmlns="http://www.w3.org/2000/svg" width="602" height="43" viewBox="0 0 602 43">
                <path className="cls-1" d="M0,10A10,10,0,0,1,10,0H592a10,10,0,0,1,10,10V28H0Z"/>
                <circle className="cls-2" cx="15.5" cy="15.5" r="7.5"/>
                <circle className="cls-3" cx="40.5" cy="15.5" r="7.5"/>
                <circle className="cls-4" cx="65.5" cy="15.5" r="7.5"/>
                <rect className="cls-5" y="28" width="602" height="15"/>
                <path className="cls-5" d="M87.91,21.06A15,15,0,0,1,102.78,8h68.44a15,15,0,0,1,14.87,13.06L187,28H87Z"/>
                </svg>
            )
        }
    }

    render(){
        return(
            <div className={this.props.multi ? 'mb-0 project-graphic-wrapper' : 'project-graphic-wrapper'} >
                <img src={this.props.src} alt="Project Graphic"/>
                {this.renderTop()}
            </div>
        )
    }
}