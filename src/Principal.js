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




class Principal extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
          books:[
            {id:0, rating: 4, price:'', text:'black or white minimalist vase' ,title: 'product1', image: 'cyberpunk.jpg', link: "/https://amzn.to/3vNIe6R"},
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
        // this.updateRating = this.updateRating.bind(this);
      }
    
      initBooks(){
    
        this.setState((state,props) => ({
          copyBooks: [...state.books]
    
        }));
    
      }
      componentDidMount(){
        this.initBooks();
      }
      
    
  

  render(){
    return (

      <div>
        

        <Menu title="Minimalist"/>
        <Description />
        <List className="list" items={this.state.copyBooks}/>
        <Footer title="Minimalist" />

        </div>
    )
  }
}

export default Principal;
