// import React from 'react';

import React,{Component} from 'react';
import "./style.css";
import Avatarlist from './Avatarlist';
import "tachyons";



const Avatar = (props) => {
    const avaratlistarray = [
        {
            id:1,
            name:"Rehman",
            work:"Front-end developer",
        },
        {
            id:2,
            name:"Honey",
            work:"Back-end Developer",
        },
        {
            id:3,
            name:"Bilal",
            work:"Graphic Designer",
        },
        {
            id:4,
            name:"Ali",
            work:"Mobile App Developer",
        }
    ]
                           const arraycard =  avaratlistarray.map( (avatarcard, i) => {
                                 return <Avatarlist id={avaratlistarray[i].name}
                                                    name={avaratlistarray[i].name}
                                                    work={avaratlistarray[i].work}/>
                           } )

    return (    <div className="mainpage">
                <h1 className=" tc">Welcome To Rehman First React Web Project</h1>
                <div className="container1">
                           {arraycard}
                   <br/>
                   {/* <button className="btn1">Click Here</button> */}
                </div> </div>
            )

}

export default Avatar;