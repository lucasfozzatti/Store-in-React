import React from 'react';
import {render} from "react-dom"
import './App.css';
import Menu from './Menu';
import List from './List';
import Nav from './Nav';
import Footer from './footer';
import Description from './Description';
import Principal from './Principal';
import Products from './Products';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Secondary from './Secondary';




class App extends React.Component{

  
  

  render(){
    return (

      <div>
        <Router >
           <Switch>
            <Route path="/products"render={()=> {return <Secondary/>}}/>
            <Route path="/nav"render={()=> {return  <Principal />}} />
            </Switch>
        </Router>

        {/* <Menu title="Minimalist"/>
        <Nav title="Vintage" />
        <Description />
        <List className="list" items={this.state.copyBooks} />
        <Footer title="Minimalist" /> */}

        </div>
    )
  }
}

export default App;
