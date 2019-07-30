import React, { Component } from "react"
import "./avatar.css"

export default class Avatar extends Component {
    componentDidMount() {
        let desIds = ["blue-pencil", "black-pencil", "yellow-pencil", "paper"];
        let devIds = ["laptop"];
        let gamIds = ["ps4", "water"];

        document.getElementById("des").addEventListener("mouseover", showDes);
        document.getElementById("des").addEventListener("mouseout", hideDes);
        document.getElementById("dev").addEventListener("mouseover", showDev);
        document.getElementById("dev").addEventListener("mouseout", hideDev);
        document.getElementById("gam").addEventListener("mouseover", showGam);
        document.getElementById("gam").addEventListener("mouseout", hideGam);
        document.onmousemove = function(event){
            var middlex = (document.querySelector(".scene").getBoundingClientRect().left + document.querySelector(".scene").getBoundingClientRect().right)/2;
            var middley = (document.querySelector(".scene").getBoundingClientRect().top + document.querySelector(".scene").getBoundingClientRect().bottom)/2;
            var x = ((event.screenX - middlex) * 10 / window.innerWidth) + "px";
            var y = ((event.screenY - middley) * 10 / window.innerHeight) + "px"; 
            document.getElementById("eyes").style.transform = "translateX("+x+") translateY("+y+")";
            }
        function pushElse(toPush) {
            toPush.forEach(function (id) {
                document.getElementById(id).classList.add("push");
                document.getElementById("book").classList.add("push");
            });
        }

        function pullElse(toPull) {
            toPull.forEach(function (id) {
                document.getElementById(id).classList.remove("push");
                document.getElementById("book").classList.remove("push");
            });
        }

        function showDes() {
            desIds.forEach(function (id) {
                document.getElementById(id).classList.remove("hide");
                document.getElementById(id).classList.add("show");
            });
            pushElse(devIds);
            pushElse(gamIds);
        }

        function hideDes() {
            desIds.forEach(function (id) {
                document.getElementById(id).classList.remove("show");
                document.getElementById(id).classList.add("hide");
            });
            pullElse(devIds);
            pullElse(gamIds);
        }

        function showDev() {
            devIds.forEach(function (id) {
                document.getElementById(id).classList.remove("hide");
                document.getElementById(id).classList.add("show");
            });
            document.getElementById("eyes").classList.toggle("read");
            document.getElementById("eye1").classList.toggle("read");
            document.getElementById("eye2").classList.toggle("read");
            document.getElementById("eyes").style.transform = "none";
            pushElse(desIds);
            pushElse(gamIds);
        }

        function hideDev() {
            devIds.forEach(function (id) {
                document.getElementById(id).classList.remove("show");
                document.getElementById(id).classList.add("hide");
            });
            document.getElementById("eyes").classList.toggle("read");
            document.getElementById("eye1").classList.toggle("read");
            document.getElementById("eye2").classList.toggle("read");
            pullElse(desIds);
            pullElse(gamIds);
        }

        function showGam() {
            gamIds.forEach(function (id) {
                document.getElementById(id).classList.remove("hide");
                document.getElementById(id).classList.add("show");
            });
            pushElse(desIds);
            pushElse(devIds);
            hideCoffee();
        }

        function hideGam() {
            gamIds.forEach(function (id) {
                document.getElementById(id).classList.remove("show");
                document.getElementById(id).classList.add("hide");
            });
            pullElse(desIds);
            pullElse(devIds);
            hideCoffee();
        }

        function hideCoffee() {
            document.getElementById("coffee").classList.toggle("hide");
            document.getElementById("vapor1").classList.toggle("hide");
            document.getElementById("vapor2").classList.toggle("hide");
        }
    }
    componentWillUnmount(){
        document.onmousemove = null;
    }
    renderSvg(){
        return(
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="-14 -35 600 614" xmlSpace="preserve">
                <g className="body">
                <path className="st0" d="M192,265h197c18.8,0,34,15.2,34,34v72c0,18.8-15.2,34-34,34H192c-18.8,0-34-15.2-34-34v-72
                    C158,280.2,173.2,265,192,265z"/>
                </g>
                <g className="face">
                <path d="M234,47h112c21.5,0,39,17.5,39,39v74c0,21.5-17.5,39-39,39H234c-21.5,0-39-17.5-39-39V86C195,64.5,212.5,47,234,47z"/>
                <path className="st1" d="M267.5,84c13.9-8,31.1-8,45,0l41.6,24c13.9,8,22.5,22.9,22.5,39v48c0,16.1-8.6,30.9-22.5,39l-41.6,24
                    c-13.9,8-31.1,8-45,0l-41.6-24c-13.9-8-22.5-22.9-22.5-39v-48c0-16.1,8.6-30.9,22.5-39L267.5,84z"/>
                <path className="st1" d="M290,47L290,47c48,0,87,39,87,87v13c0,48-39,87-87,87l0,0c-48,0-87-39-87-87v-13C203,86,242,47,290,47z"/>
                <path className="st2" d="M290,174l-18.2,31.5h36.4L290,174z"/>
                <path d="M270,220.3c0-2.3,2.5-3.7,4.6-2.7c11.3,6,19.3,6.2,30.9,0c2-1.1,4.6,0.3,4.6,2.6l0,0c0,1.1-0.6,2.1-1.6,2.6
                    c-14.7,7-23.3,6.6-36.7,0C270.6,222.4,270,221.4,270,220.3L270,220.3z"/>
                <circle className="st1" cx="203" cy="190" r="15"/>
                <circle className="st1" cx="377" cy="190" r="15"/>
                <path d="M224,127h47c2.8,0,5,2.2,5,5l0,0c0,2.8-2.2,5-5,5h-47c-2.8,0-5-2.2-5-5l0,0C219,129.2,221.2,127,224,127z"/>
                <path d="M310,127h47c2.8,0,5,2.2,5,5l0,0c0,2.8-2.2,5-5,5h-47c-2.8,0-5-2.2-5-5l0,0C305,129.2,307.2,127,310,127z"/>
                <path d="M239,30h101c14.9,0,27,12.1,27,27l0,0c0,14.9-12.1,27-27,27H239c-14.9,0-27-12.1-27-27l0,0C212,42.1,224.1,30,239,30z"/>
                <path d="M261,11.3l2.3,43.2l-38.6-19.7L261,11.3z"/>
                <path d="M270,22.3l2.3,43.2l-38.6-19.7L270,22.3z"/>
                </g>
                <g className="eyes" id="eyes">
                <circle className="eye1" id="eye1" cx="247" cy="175" r="10"/>
                <circle className="eye2" id="eye2" cx="333" cy="175" r="10"/>
                </g>
                <g className="table">
                <rect y="371" className="st3" width="580" height="220"/>
                </g>
                <g className="book" id="book">
                <path className="st4" d="M440.5,430.9l76.8,16.3c8.1,1.7,13.3,9.7,11.6,17.8l-17.6,82.8c-1.7,8.1-9.7,13.3-17.8,11.6l-76.8-16.3
                    c-8.1-1.7-13.3-9.7-11.6-17.8l17.6-82.8C424.4,434.4,432.4,429.2,440.5,430.9z"/>
                <path className="st5" d="M448,432.2l66.4,14.1c8.1,1.7,13.3,9.7,11.6,17.8l-16.3,76.8c-1.7,8.1-9.7,13.3-17.8,11.6l-66.4-14.1
                    c-8.1-1.7-13.3-9.7-11.6-17.8l16.3-76.8C431.9,435.7,439.9,430.5,448,432.2z"/>
                <path className="st6" d="M441.8,424.1l70.4,15c8.1,1.7,13.3,9.7,11.6,17.8l-15.6,73.4c-1.7,8.1-9.7,13.3-17.8,11.6l-70.4-15
                    c-8.1-1.7-13.3-9.7-11.6-17.8l15.6-73.4C425.7,427.6,433.7,422.4,441.8,424.1z"/>
                <rect x="437.9" y="480.6" transform="matrix(0.2079 -0.9781 0.9781 0.2079 -89.0147 866.3282)" className="st7" width="105" height="15"/>
                    </g>

                <g className="coffee" id="coffee">
                <path className="st8" d="M470,335h26c6.1,0,11,4.9,11,11v43c0,6.1-4.9,11-11,11h-26c-6.1,0-11-4.9-11-11v-43
                    C459,339.9,463.9,335,470,335z"/>
                <path className="st9" d="M504,351h10c3.3,0,6,2.7,6,6v18c0,3.3-2.7,6-6,6h-10c-3.3,0-6-2.7-6-6v-18C498,353.7,500.7,351,504,351z"/>
                <path className="st10" d="M471,339h24c3.3,0,6,2.7,6,6l0,0c0,3.3-2.7,6-6,6h-24c-3.3,0-6-2.7-6-6l0,0C465,341.7,467.7,339,471,339z"/>
                <g id="vapor">
                    <circle className="vapor1" id="vapor1" cx="490" cy="290" r="6"/>
                    <circle className="vapor2" id="vapor2" cx="475" cy="285" r="4"/>
                </g>
                </g>



                <g className="yellow-pencil" id="yellow-pencil">
                <path className="st16" d="M108.3,383.1l1.4,0.4c1.6,0.4,2.6,2.1,2.1,3.7l-19.1,71.2c-0.4,1.6-2.1,2.6-3.7,2.1l-1.4-0.4
                    c-1.6-0.4-2.6-2.1-2.1-3.7l19.1-71.2C105,383.6,106.7,382.6,108.3,383.1z"/>
                <path className="st15" d="M86.7,466.2l5.3-7.2l-6.2-1.7L86.7,466.2z"/>
                <path d="M86.7,466.2l1.8-2.4l-2.1-0.6L86.7,466.2z"/>
                </g>
                <g className="black-pencil" id="black-pencil">
                <path d="M95.9,378l0.8,0.3c1.6,0.5,2.4,2.2,1.9,3.8l-24.2,70.3c-0.5,1.6-2.2,2.4-3.8,1.9l-0.8-0.3c-1.6-0.5-2.4-2.2-1.9-3.8
                    L92,379.8C92.6,378.3,94.3,377.4,95.9,378z"/>
                <path className="st15" d="M68.3,459.5l5.3-6.4l-5.6-1.9L68.3,459.5z"/>
                <path d="M68.3,459.5l1.8-2.1l-1.9-0.6L68.3,459.5z"/>
                </g>
                <g className="blue-pencil" id="blue-pencil">
                <path className="st14" d="M154.2,388.5l1.3-1.3c1.2-1.2,3.1-1.2,4.2-0.1l51.4,49.7c1.2,1.2,1.2,3.1,0.1,4.2l-1.3,1.3
                    c-1.2,1.2-3.1,1.2-4.2,0.1l-51.4-49.7C153.1,391.6,153,389.7,154.2,388.5z"/>
                <path className="st15" d="M215.3,446.2l-4-8.6l-4.7,4.9L215.3,446.2z"/>
                <path d="M215.3,446.2l-1.3-2.9l-1.6,1.6L215.3,446.2z"/>
                </g>
                <g className="paper" id="paper">
                <path className="st11" d="M247.8,391.3c1.6-4.4,5.7-7.3,10.4-7.3h86.7c5.2,0,9.8,3.7,10.8,8.8l16.7,83c1.4,6.8-3.8,13.2-10.8,13.2h-133
                    c-7.6,0-12.9-7.5-10.4-14.7L247.8,391.3z"/>
                </g>
        
                <g className="laptop" id="laptop">
                <path className="st12" d="M293.5,512.5l46.4,14.6c7.9,2.5,12.3,10.9,9.8,18.8l-21.2,67.3c-2.5,7.9-10.9,12.3-18.8,9.8l-46.4-14.6
                    c-7.9-2.5-12.3-10.9-9.8-18.8l21.2-67.3C277.2,514.4,285.6,510,293.5,512.5z"/>
                <path className="st13" d="M102,472h214c8.3,0,15,6.7,15,15v120c0,8.3-6.7,15-15,15H102c-8.3,0-15-6.7-15-15V487
                    C87,478.7,93.7,472,102,472z"/>
                </g>
        
                <g className="ps4" id="ps4">
                <path className="st17" d="M299.3,283.2L299.3,283.2c7.4-3.4,16.1-0.2,19.6,7.1l8.3,17.7c3.4,7.4,0.2,16.1-7.1,19.6h0
                    c-7.4,3.4-16.1,0.2-19.6-7.1l-8.3-17.7C288.8,295.4,292,286.7,299.3,283.2z"/>
                <path className="st17" d="M240,283.2L240,283.2c7.4,3.4,10.6,12.2,7.1,19.6l-8.3,17.7c-3.4,7.4-12.2,10.6-19.6,7.1l0,0
                    c-7.4-3.4-10.6-12.2-7.1-19.6l8.3-17.7C223.9,283,232.7,279.8,240,283.2z"/>
                <path className="st17" d="M229.5,302.1c-8.9-6.1-4.6-20.1,6.2-20.1h71.4c10.8,0,15.1,13.9,6.3,20l-35.2,24.6c-3.7,2.6-8.7,2.6-12.5,0.1
                    L229.5,302.1z"/>
                <path className="st18" d="M255.4,307.6c-2.6-1.6-1.5-5.6,1.5-5.6h28.3c3,0,4.2,4,1.6,5.6l-14,8.5c-0.9,0.6-2.1,0.6-3.1,0L255.4,307.6z"
                    />
                </g>
                <g className="water" id="water">
                <path className="st19" d="M472,175h23c8.3,0,15,6.7,15,15v125c0,8.3-6.7,15-15,15h-23c-8.3,0-15-6.7-15-15V190
                    C457,181.7,463.7,175,472,175z"/>
                <rect x="457" y="211" className="st20" width="53" height="46"/>
                <path className="st19" d="M469.2,161.2c6.5-11.5,23.1-11.5,29.6,0l9,15.9c6.4,11.3-1.8,25.4-14.8,25.4h-18c-13,0-21.2-14-14.8-25.4
                    L469.2,161.2z"/>
                <path className="st21" d="M475,142h18c1.1,0,2,0.9,2,2v9c0,1.1-0.9,2-2,2h-18c-1.1,0-2-0.9-2-2v-9C473,142.9,473.9,142,475,142z"/>
                <circle className="st22" cx="484" cy="234" r="11"/></g>
            </svg>
        )
    }

    render(){
        return(
            <div className="scene">
                {this.renderSvg()}
            </div>
        )
    }
}