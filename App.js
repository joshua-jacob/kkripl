import Header from './myComponents/Header';
import Players from './myComponents/Players';
import About from './myComponents/About';
import ViewPlayer from './myComponents/ViewPlayer';
 

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          
        <Header/>
        
        </Route>
        <Route  path="/players">
        <Players/>
        </Route>
        <Route path="/about">
         <About/>
        </Route>
        <Route path='/viewPlayer'>
        <ViewPlayer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
