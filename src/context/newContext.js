import React from 'react';


const NewContext = React.createContext();

// function ContextProvider() {
//     const [pictures,setPictures] = useState([]);

//     useEffect(() => {
//         fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
//         .then(response => {
//             setPictures(response.json());
//         })
//         .catch(error => {
//             console.log(error);
//         });
//     });

//     return (
//       <NewContext.Provider value={pictures}>
//         <App/>
//       </NewContext.Provider>
//     );
//   }

export{
    NewContext
} 


