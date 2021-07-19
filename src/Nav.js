import React, { Fragment } from 'react';
import './Nav.css';



class Nav extends React.Component{
    constructor(props){
        super(props);
        

    }


    render(){
        return(
            <div className="main-nav">
 
                <ul class="nav">
				<li className = "principal-li"><a href="">Inicio</a></li>
				<li className="principal-li"><a href="">Servicios</a>
					<ul>
						<li><a href="">Submenu1</a></li>
						<li><a href="">Submenu2</a></li>
						<li><a href="">Submenu3</a></li>
						<li><a href="">Submenu4</a>
							<ul>
								<li><a href="">Submenu1</a></li>
								<li><a href="">Submenu2</a></li>
								<li><a href="">Submenu3</a></li>
								<li><a href="">Submenu4</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li className="principal-li"><a href="">Acerca De</a>
					<ul>
						<li><a href="">Submenu1</a></li>
						<li><a href="">Submenu2</a></li>
						<li><a href="">Submenu3</a></li>
						<li><a href="">Submenu4</a></li>
					</ul>
				</li>
				<li className="principal-li"><a href="">Contacto</a></li>
			</ul>
               
            </div>
        );
    }
}   



export default Nav;