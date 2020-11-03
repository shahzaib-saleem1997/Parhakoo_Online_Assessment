import React from "react";
import {Route,Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Photos from './pages/Photos';
import Cart from './pages/Cart';
import { ContextProvider } from './context/newContext';

function App() {

  return (
      <>
        <NavBar/>
        <div className="container">
          <Switch>
            <ContextProvider>
              <Route path="/cart" component={Cart}/>
              <Route path="/" component={Photos}/>
            </ContextProvider>
          </Switch>
        </div>
      </>
   
 
  );
}

export default App;
