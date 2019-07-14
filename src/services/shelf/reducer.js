import {FETCH_PRODUCTS} from './actionTypes';

const initialState = {
    products : []
}

export default function(state = initialState, action){

    const newState = {...state}

    switch(action.type){
        case FETCH_PRODUCTS :
            return {
                ...newState,
                products : action.payload
            }
        default : 
            return state    
    }

}