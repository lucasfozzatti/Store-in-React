import React, { Fragment } from 'react';
import './footer.css';


class Footer extends React.Component{

   

    

    render(){
        return(
            <div className="container-footer">
                <div className="subcontainer">
                <h1 className="footer1">{this.props.title}</h1>
                <h1 className="footer2">{this.props.title}</h1>
        
                </div>
            </div>
        );
    }
}

export default Footer;