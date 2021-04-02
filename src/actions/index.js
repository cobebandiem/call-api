import callApi from '../utils/apiCaller';
import * as types from './../constants/ActionTypes';

export const actFetchProductsRequest=()=>{
    return (dispatch)=>{
        return callApi('products','GET',null).then(res=>{
            dispatch(actFetchProducts(res.data));
        })
    }
}

export const actFetchProducts=(products)=>{
    return {
        type:types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductRequest=(id)=>{
    return (dispatch)=>{
        return callApi(`products/${id}`,'DELETE',null).then(res=>{
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actDeleteProduct=(id)=>{
    return {
        type:types.DELETE_PRODUCT,
        id
    }
}

export const actUpdateProductRequest=(body)=>{
    return dispatch=>{
        if(body.id){
            return callApi(`products/${body.id}`,'PUT',body).then(res=>{
                console.log(res.data);
                dispatch(actUpdateProduct(res.data));
            })
        }else{
            return callApi(`products`,'POST',body).then(res=>{
                console.log(res.data);
                dispatch(actAddProduct(res.data));
            })
        }
        
    }
}
export const actAddProduct=(body)=>{
    return{
        type:types.ADD_PRODUCT,
        body
    }
}
export const actUpdateProduct=(body)=>{
    return{
        type:types.UPDATE_PRODUCT,
        body
    }
}

