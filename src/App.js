import React from 'react';
import './App.css';
import Menu from './Menu';
import Principal from './Principal';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Secondary from './Secondary';




class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        title: '',
    }

}
  
  render(){
    return (

      <div>
        <Router >
           <Switch>

            <Route path="/" exact component={Principal}/> 
            <Route path="/:subpage" exact render={({ match }) => {return <Secondary  params={match.params.subpage}/>}}/>
            <Route path="/nav" exact component={Menu} />
            </Switch>
        </Router>


        </div>
    )
  }
}

export default App;
