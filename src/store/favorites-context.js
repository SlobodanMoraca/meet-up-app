import { createContext, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemsIsFavorite: (meetupId) => {}

});

export function FavoritesContextProvider (props){

    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((previusUserFavorites) => {
            return previusUserFavorites.concat(favoriteMeetup);
        });
    } 

    function removeFavoriteHandler(meetupId){
        setUserFavorites (previusUserFavorites => {
            return previusUserFavorites.filter(meetup => meetupId !== meetupId);
        })
    }
   
    function itemIsFavoriteHandler(){
        return userFavorites.some(meetup => meetup.id === meetup.id);

    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemsIsFavorite: itemIsFavoriteHandler,
    };

    return (
    <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
    );
}

export default FavoritesContext;