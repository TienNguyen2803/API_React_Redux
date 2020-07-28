import * as Types from '../constants/ActionTypes';
import {findIndex} from 'lodash';

const initState = [];

var productReducer = (state = initState, action) => {

    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            state = state.filter(product => product.id !== action.id)
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            const index = findIndex( state ,(e) => {
                return e.id === action.product.id
            })
            console.log(index);
            state[index ] = {
                ...state[index],
                name : action.product.name,
                price : action.product.price,
                status : action.product.status
            }
            console.log([...state]);
            return [...state]
        default:
            return [...state];
    }
}

export default productReducer;