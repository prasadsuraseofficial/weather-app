// import { GET_WEATHER_DATA_ARRAY } from "../constants"
import { GET_WEATHER_DATA } from "../constants"


export const weatherReducer = (state=[], action) => {
    
    switch(action.type){
        case GET_WEATHER_DATA:    
            return action.data;

        // case GET_WEATHER_DATA_ARRAY:  
        //     return [{...state, ...action.data}];

        default:
            return state;
    }
}