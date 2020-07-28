import * as Types from '../constants/ActionTypes';


var initState = {}

const itemEditing = (state = initState, action) => {
    switch (action.type) {
        case Types.ITEM_EDITING:
            state = action.product;
            return state;
        default:
            return state;
    }
}

export default itemEditing;