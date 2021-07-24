import React, { Fragment } from 'react';
import './Nav.css';



class Nav extends React.Component{
    constructor(props){
        super(props);
        

    }


    render(){
        return(
            <div className="main-nav">
				<input type="checkbox" id="btn-nav" class="checkbox"/>
				<header>
					<div class="header-container">
						<label for="btn-nav" class="btn-label">
						<div class="header-button"></div>
						</label>
					</div>
				</header>
				
				<nav class="menu">
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contacto</li>
				</ul>      
				<ul>
					<a href="" class="icon-facebook"/>
					<a href="" class="icon-twitter"/>
					<a href="" class="icon-youtube"/>
					<a href="" class="icon-instagram"/>
				</ul>      
				</nav>
			</div>
        );
    }
}   



export default Nav;