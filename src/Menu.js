import React, { Fragment } from 'react';
import './Menu.css';
import Search from './Search';


const element = {
    name: "lucas",
    apellido: "fozzatti",
}
class Menu extends React.Component{

    constructor(props){
        super(props);

    }
    

    render(){
        return(
            <div className="container">
                <div className="subcontainer">
                    <div className= "back-tittle">
                        <h1 className = "tittle">
                        Vintage
                        </h1>
                        
                    </div>
                    {/* <div className="div-logo">
                        <img ClassName= "logo"src="/img/logo.png">
                        </img>
                       
                    </div> */}

                  
                </div>
            </div>
        );
    }
}

export default Menu;