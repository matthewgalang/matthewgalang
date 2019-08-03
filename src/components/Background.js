import React, { Component } from 'react';

export default class Background extends Component {
    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.timer = null;
    }

    state = {
        bgColors: [
            {
                section: 'top-home',
                color: 'blue',
            },
            {
                section: 'about-me',
                color: 'blue',
            },
            {
                section: 'top-projects',
                color: 'red',
            },
            {
                section:'experience',
                color: 'yellow',
            },
            {
                section:'contact',
                color: 'yellow',
            }
        ],
        currentColor : 'blue'
    }
    
    componentDidMount(){
        window.addEventListener('scroll',  this.handleScroll)
    }

    handleScroll(){
        const { bgColors } = this.state

        bgColors.forEach((bg)=>{
            if (this.sectionInWindow(bg) && 
            (this.state.currentColor !== bg.color)) {
                this.changeColor(bg.color)
            }
        })
    }



    changeColor(newColor){
        // change right hand text color
        const classes = this.state.bgColors.map(section=>section.color)
        const textRight = document.querySelectorAll(".col-md-7")
        const buttons = document.querySelectorAll(".btn")
        classes.forEach((colorclass)=>{if (colorclass !== newColor) {
            textRight.forEach((el)=>{el.classList.remove(colorclass)})
            buttons.forEach((el)=>{el.classList.remove(colorclass)})
        }})
        textRight.forEach((el)=>{el.classList.add(newColor)})
        buttons.forEach((el)=>{el.classList.add(newColor)})

        // change state
        this.setState({currentColor: newColor})
        
    }
    
    
    sectionInWindow(bg) {
        if ( window && (
            ( window.innerHeight + document.documentElement.scrollTop ) >= (document.getElementById(bg.section).getBoundingClientRect().top + window.scrollY+(window.innerHeight/2)) ) && (
                ( window.innerHeight + document.documentElement.scrollTop ) <= (document.getElementById(bg.section).getBoundingClientRect().bottom + window.scrollY+(window.innerHeight/2))	)
        ) {
            // this.setState({currentSection:bg.section})
            return true
        }
    }

    render(){
        return(
            <div className="background">
                <div className={"background-color "+this.state.currentColor}></div>
            </div>
        )
    }
}