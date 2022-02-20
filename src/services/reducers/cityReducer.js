import { ADD_FAVORITE_CITY, ADD_NEW_CITY, UPDATE_ACTIVE_CITY } from "../constants"

const initialState = {
    cities: [],
    activeCity: "Select City",
    favoriteCities: []
}

export const cityReducer = (state=initialState, action) => {
    switch(action.type){

        case ADD_NEW_CITY:
            if(!state.cities.includes(action.data)){
                return({
                    ...state,
                    cities: [...state.cities, action.data],
                    activeCity: state.activeCity,
                });
            }else{
                return state;
            }
        
        case UPDATE_ACTIVE_CITY:
            return({
                ...state,
                cities: [...state.cities],
                // favoriteCities: [...state.favoriteCities, action.data],
                activeCity: action.data
            })
        
        case ADD_FAVORITE_CITY:
            if(state.favoriteCities.includes(action.data)){
                
                alert("City Is Already In Favorites List!");
                
                return state;
            
            } else if(action.data == "Select City"){
            
                alert("Please Select City First!");
                
                return state;
                
            } else {
                alert("Added to Favorites!");
            
                return({
                    ...state,
                    favoriteCities: [...state.favoriteCities, action.data]
                })
            }

        default:
            return state;
    }
}
