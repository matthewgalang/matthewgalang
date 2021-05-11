import React, { Component } from 'react'
import {init} from 'ityped'

class IType extends Component {
    componentDidMount() {
        const myElement = document.querySelector('#myElement')
        init(myElement, {
            showCursor:true,
            typeSpeed: 50,
            backSpeed: 80,
            backDelay: 1800,
            strings:['Engineer', 'Contributor', 'Creator', 'Planner',]
        })
    }

    render() {
        return <span id="myElement"></span>
    }
}

function HomepageHero({ title, summary, date, image, responsibilities, features, technologies }) {
    const dateObj = new Date(date);

    return (
        <div className="w-full bg-red-50">
            <div className="container mx-auto flex py-12 items-center space-x-10">
                <div className="w-1/3 flex flex-col flex-none space-y-6">

                    <h1 className="text-5xl font-bold">Designer, Developer, <br/><IType/></h1>
                    <p className="text-lg font-light">For online marketing and e-commerce websites, applications, and more</p>
                    <div className="flex space-x-6 items-center">
                        <div className="py-3 px-8 bg-blue-500 text-white rounded-full uppercase font-semibold">See projects</div>
                    </div>
                </div>
                <div>
                    {image && <img className="rounded-xl" alt={image.description} src={`https:${image.fields.file?.url}`} />}
                </div>
            </div>
        </div>
    )
}
export default HomepageHero