import React,{useContext} from 'react';
import { NewContext } from '../context/newContext';


export default function Photos() {
    const pictures = useContext(NewContext);
    console.log('Photos Component');

    
    return (
        <div >
            <h1> My Photos </h1>
            {pictures.map(picture =>
                <>
                    <img src= {picture.url} class="img-fluid" alt="Responsive image"></img>
                    <br/><br/><br/>
                    
                </>
            )}
        
        </div>
    )
}
