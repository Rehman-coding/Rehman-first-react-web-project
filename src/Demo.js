import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = ({name}) => {

        return <div className="maindiv_style">
        
                        <h1>Hello {name}</h1>
                        <p>Rehman i just make my first React JS UI..</p>
         </div>
        
}

export default Demo;