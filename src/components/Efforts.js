import React, { Component } from 'react';
import EffortItem from './EffortItem';
import api from '../utils/api';
import isLocalHost from '../utils/isLocalHost';
import "./efforts.css"

export default class Efforts extends Component {
    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this)
    }
    state = {
        efforts: [
            {
                data: {
                    title:"stackoverflow.com",
                    count: 0
                }
            },
            {
                data: {
                    title:"codeLinesCount",
                    count: 0
                }
            }
        ],
        coffeeCupsCount: 0,
        loaded: false
    }

    effortsInWindow() {
        if ( window && (
            ( window.innerHeight + document.documentElement.scrollTop ) >= (document.getElementById("efforts").getBoundingClientRect().top + window.scrollY) )
        ) {
            this.loadEffortsState()
        }
    }

    handleScroll(){
        if (this.state.loaded) return;
        this.effortsInWindow()
    }
    
    componentDidMount() {
        window.addEventListener('scroll',  this.handleScroll)
    }

    componentDidUpdate() {
        if (this.state.loaded) {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }

    loadEffortsState(){
        this.setState({loaded:true})
        // Fetch all counts
        api.readAll().then((counts) => {
            if (counts.message === 'unauthorized') {
                if (isLocalHost()) {
                alert('FaunaDB key is not unauthorized. Make sure you set it in terminal session where you ran `npm start`. Visit http://bit.ly/set-fauna-key for more info')
                } else {
                alert('FaunaDB key is not unauthorized. Verify the key `FAUNADB_SERVER_SECRET` set in Netlify enviroment variables is correct')
                }
                return false
            }

            // this.setState(Object.fromEntries(counts.map((count) => [count.data.title,count.data.count])))
            this.setState({
                efforts: counts
            })
            console.log('state', this.state)
        })
        this.updateCups()
    }

    updateCups(){
        const today = new Date()
        const firstcup = new Date('2017-01-23T08:00:00')
        const totaldaydiff = Math.ceil(Math.abs(today.getTime() - firstcup.getTime())/(1000*60*60*24))
        var workdays = totaldaydiff - (Math.floor(totaldaydiff/7) * 2)
        const todayDay = today.getDay()
        const firstcupDay = firstcup.getDay()
        if (firstcupDay - todayDay > 1) {
            workdays = workdays - 2
        }
        if (firstcupDay === 0 && todayDay !== 6) {
            workdays = workdays - 1
        }
        if (firstcupDay === 6 && todayDay !== 0) {
            workdays = workdays - 1
        }
        this.setState({
            coffeeCupsCount: workdays
        })
    }
    renderEfforts() {
        const { efforts } = this.state
        return efforts.map((effort) => {
            const { data } = effort
            return (
                <EffortItem key={data.title} value={(data.title === ('codeLinesCount')) ? data.count.hits : (data.count ? data.count : 0)} text={this.textForEfforts(data.title)}/>
            )
        })
    }
    textForEfforts(title){
        if(title === 'stackoverflow.com'){
            return 'visits to stackoverflow this past year';
        } else if (title === 'codeLinesCount') {
            return 'lines of code churned across git repos';
        } else if (title === 'coffeeCupsCount') {
            return 'coffee cups at my current position';
        } else {
            return 'title not found';
        }
    }
    render() {
        return (
        <div id="efforts">
            <EffortItem key={'coffeeCupsCount'} value={this.state.coffeeCupsCount} text={this.textForEfforts('coffeeCupsCount')} />
            {this.renderEfforts()}
        </div>
        );
    }
}