import React,{Component} from 'react';
import {HashRouter as Router,Switch,Route} from 'react-router-dom';
import { createBrowserHistory as history} from 'history';
import Scientificcalculator from './science/Scientificcalculator';

class App extends Component {
  render(){
  return (
    <Router history={history }>
    <div>
    <Switch>
<Route path="/" exact component={Scientificcalculator}/>
</Switch>
</div>
</Router>
  );
  }
}

export default App;
