import React, { Component } from 'react';

import '../css/SidebarVertical.css';
import { Menudata } from '../components/Menudata';




class Menu extends Component {

    render() {
        
        return (
            
                <div className="Sidebar">
                    <ul className="SidebarList">
                        {Menudata.map((val,key)=>{
                            return(
                            <li 
                            key={key} 
                            className="row" 
                            id={window.location.pathname === val.link ? "active" : " "}
                            onClick={()=>{
                                window.location.pathname = val.link;
                                
                                }}
                                >
                                <div id="icon">{val.icon}</div>
                                    <div id="title">
                                        {val.title}
                                    </div>
                            </li>
                            );
                        })}
                            
                     </ul>
                </div>
                
                
            
            
        );
    }
}

export default Menu;