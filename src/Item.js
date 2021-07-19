import React from 'react';
import './Item.css';

class Item extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            image: '',
            text: '',
            price:'',   
            link:'', 
           
        }
  
    }
    componentDidMount(){
        this.setState({
           
            title: this.props.title,
            image: this.props.image,
            text: this.props.text,
            price: this.props.price,
            link: this.props.link,
            
        });
    }

    render(){
        return(
            
            <div className="item" >
               
                    <a href= {this.props.link} >
                    <div className="image"><img src={'img/' + this.state.image} width="100%" /></div>
                    <div className="title">{this.state.title}</div>
                    <div className="text">{this.state.text}</div>
                    <div className="price">{this.state.price}</div>
                    <div className="link"><a  href="https://www.facebook.com" target="_blank" rel="noopener" style={{color:'orange'}} > comprar producto </a></div> 
                    </a>
            </div>
            
        );
    }
}

export default Item;