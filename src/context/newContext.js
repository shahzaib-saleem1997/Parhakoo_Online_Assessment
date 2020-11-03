import React,{useState,useEffect} from 'react';


const NewContext = React.createContext();

function ContextProvider({children}) {
    const [pictures,setPictures] = useState([]);
    const [cartItems, setCartItems] = useState([]);

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

   function toggleFavorite(id){
        console.log("Toggle Favorite called");
        const updatedArr = pictures.map(picture => {
        if(picture.id === id) {
            
            return {...picture, isFavorite: !picture.isFavorite}
        }
        
        return picture
    })

    setPictures(updatedArr)
   }

   function addImageToCart(imageObj){
    setCartItems(prevItems => [...prevItems, imageObj]);
    console.log(cartItems);
   }

   function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }
  

    

    return (
      <NewContext.Provider value={{pictures,toggleFavorite, addImageToCart,cartItems,removeFromCart }}>
        {children}
      </NewContext.Provider>
    );
  }

export{
    NewContext,
    ContextProvider
} 


