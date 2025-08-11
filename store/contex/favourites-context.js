import { createContext, useState } from "react";

export const FavouriteContext = createContext({
    ids: [],
    addFavourite: (id) => {},
    removeFavourite: (id) => {},

});

function FavouriteContextProvider ( {children}){
   const [favouriteMealIds, setFavouritgeMealIds] = useState([]);

   function addFavourite( id ){
        setFavouritgeMealIds((currentFavIds) => [...currentFavIds, id]); 
   }

   function removeFavourite(id){
    setFavouritgeMealIds((currentFavIds) => currentFavIds.filter(mealId !== id)
);
   }

   const value ={
        ids: favouriteMealIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite,

   }
return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>

}

export default FavouriteContextProvider;