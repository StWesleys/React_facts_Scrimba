import React from 'react'
import Logo from 'C:/Users/Júlia/Desktop/React/react_facts/React_facts_Scrimba/src/images/logo.svg'

export default function NavBar(){
    return(
        <div className="navbar">
            <figure className="logo">
                <img src={Logo} alt="logo"/>
            </figure>
                        
            <h2>React Course - Project 1</h2>
        </div>
    )  
}