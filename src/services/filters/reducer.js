import {UPDATE_FILTER} from './actionTypes';

const initialState = {
    items : []
}

export default function(state = initialState, action){

    const newState = {...state}

    switch(action.type){
        case UPDATE_FILTER :
            return {
                ...newState,
                items : action.payload
            }
        default : 
            return state    
    }

}