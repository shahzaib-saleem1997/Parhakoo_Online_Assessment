import React,{useContext} from 'react';
import { NewContext } from '../context/newContext';
import PhotosComponent from './../components/PhotosComponent';


export default function Photos() {
    const {pictures,toggleFavorite,addImageToCart, removeFromCart,cartItems} = useContext(NewContext);

    return (
        <div className="container">
            <h1> My Photos </h1>
            {pictures.map(picture =>(
                    <PhotosComponent 
                        picture={picture}  
                        toggleFavorite={toggleFavorite} 
                        addImageToCart={addImageToCart}  
                        removeFromCart={removeFromCart}
                        key={picture.id} 
                        cartItems={cartItems}
                    />
            ))}
            
        </div>
    )
}
