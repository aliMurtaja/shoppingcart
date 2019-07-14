import {UPDATE_SORT} from './actionType';

export const updateSort = sort =>{
    return {
        type : UPDATE_SORT,
        payload : sort
    }
}