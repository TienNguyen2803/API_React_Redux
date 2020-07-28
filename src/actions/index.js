import * as Types from '../constants/ActionTypes';
import CallApi from '../utils/ApiService';

export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCTS,
        products
    }
}
export const actFetchProductsRequest =  () => {
    return (dispatch) => {
        return  CallApi("products" ,"GET",null)
        .then(res => {
            dispatch(actFetchProducts(res.data));
        });
       
    }
}
export const actDeleteProduct = (id) => {
    return {
        type : Types.DELETE_PRODUCT,
        id
    }
}

export const actFecthDeleteRequest = (id) => {
    return (dispatch) => {
        return CallApi(`products/${id}`,"DELETE",null).then(res => {
            dispatch(actDeleteProduct(id))
        })
    }
}

export const actAddProduct = (product) => {
    return {
        type : Types.ADD_PRODUCT,
        product
    }
}

export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return CallApi("products" ,"POST",product)
        .then(res => {
            dispatch(actAddProduct(res.data));
        });
    }
}

export const actGetProductEditing = (product) => {
    return {
        type : Types.ITEM_EDITING,
        product
    }
}

export const actGetProductEditingRequest = (id) => {
    return (dispatch) => {
        return CallApi(`products/${id}`,"GET",null).then(res => {
            dispatch(actGetProductEditing(res.data))
        })
    }
}

export const actUpdateProduct = (product) => {
    return {
        type : Types.UPDATE_PRODUCT,
        product
    }

}
export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return CallApi(`products/${product.id}`,"PUT",product).then(res => {
            dispatch(actUpdateProduct(res.data))
        })
    }
 }