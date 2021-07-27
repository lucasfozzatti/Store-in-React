import React from 'react';
import {render} from "react-dom"
import './App.css';
import Menu from './Menu';
import List from './List';
import Nav from './Nav';
import Footer from './footer';
import Description from './Description';
import Products from './Products';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { castDraft } from 'immer';




class Secondary extends React.Component{
  
  constructor(props){
    super(props);
    
    this.state = {
      params: '',
      Iluminacion:[
        {id:0, rating: 4, price:'', text:'black or white minimalist vase' ,title: 'product9', image: 'cyberpunk.jpg', link: "http://localhost:3000/nav"},
        {id:1, rating: 3, price:'$260,2',text:'black or white minimalist vase' , title: 'product2', image: 'tocadisco.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:2, rating: 5, price:'$15,00',text:'black or white minimalist vase' , title: 'product3', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:3, rating: 5, price:'$2745,00',text:'black or white minimalist vase' , title: 'product4', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:4, rating: 5, price:'$467,10',text:'black or white minimalist vase' , title: 'product5', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:6, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'product6', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:7, rating: 5, price:'$1600,00', text:'black or white minimalist vase' , title: 'product7', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:8, rating: 5, price:'$325,00', text:'black or white minimalist vase' , title: 'product8', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"}
      ],
      Masculina:[
        {id:0, rating: 4, price:'', text:'black or white minimalist vase' ,title: 'product8', image: 'cyberpunk.jpg', link: "http://localhost:3000/nav"},
        {id:1, rating: 3, price:'$260,2',text:'black or white minimalist vase' , title: 'product2', image: 'tocadisco.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:2, rating: 5, price:'$15,00',text:'black or white minimalist vase' , title: 'product3', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:3, rating: 5, price:'$2745,00',text:'black or white minimalist vase' , title: 'product4', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:4, rating: 5, price:'$467,10',text:'black or white minimalist vase' , title: 'product5', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:6, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'product6', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:7, rating: 5, price:'$1600,00', text:'black or white minimalist vase' , title: 'product7', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:8, rating: 5, price:'$325,00', text:'black or white minimalist vase' , title: 'product8', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"}
      ],
      copyBooks: []
 
    };
    // this.initBooks = this.initBooks.bind(this);
    // this.updateRating = this.updateRating.bind(this);
  }
  

  actualizarCampo = () => {
  
    const match = this.props.params;
    this.setState({copyBooks: this.state.[match] });
    
  }
  
  componentDidMount(){
      this.actualizarCampo()
    
  }
  
  render(){
    return (

      <div className= "secondary">
       
        <Menu/>
        <Nav title="Vintage" />
        <List className="list" items={this.state.copyBooks} />
        <Footer title="Minimalist" /> 

        </div>
    )
  }
}

export default Secondary;
