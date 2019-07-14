import {UPDATE_SORT} from './actionType'
const initialstate = {
    type : ''
}

export default function(state =initialstate, action){
    const newState = {...state}
    
    switch(action.type){
        case UPDATE_SORT: 
        return {
            ...newState,
            type : action.payload
        }

        default :
            return { ...newState};
    }
}