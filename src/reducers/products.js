import * as types from './../constants/ActionTypes';
var initialState=[];
let findIndex=(id,products)=>{
    let index=-1;
    if(products.length>0){
        index=products.findIndex((product)=>product.id===id);
    }
    return index;
}

var myReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.ADD_PRODUCT:{
            state.push(action.body);
            return [...state];
        }
        case types.UPDATE_PRODUCT:{
            let index=findIndex(action.body.id,state);
            state[index]=action.body;
            return [...state];
        }
        case types.DELETE_PRODUCT:{
            let index=findIndex(action.id,state);
            state.splice(index,1);
            return [...state];
        }
        case types.FETCH_PRODUCTS:{
            state=action.products;
            return [...state];
        }
        default:{
            return [...state];
        }
    }
}
export default myReducer;

