import React,{useState,useEffect} from "react";
import {Route,Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import Photos from './pages/Photos';
import Cart from './pages/Cart';
import { NewContext } from './context/newContext';




function App() {
  const [pictures,setPictures] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then((res) => res.json())
        .then(data => {
            setPictures(data);
        })
        .catch(error => {
            console.log(error);
        });
    },[]);

  return (
    
    <NewContext.Provider value={pictures}>
      <NavBar/>
      <div className="container">
        <Switch>
          <Route path="/cart" component={Cart}/>
          <Route path="/" component={Photos}/>
        </Switch>
      </div>
    </NewContext.Provider>
 
  );
}

export default App;
