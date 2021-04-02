import React, {useEffect, useState } from 'react';
import * as actions from './../actions/index';
import {connect} from 'react-redux';
import callApi from './../utils/apiCaller';

function ProductActionPage(props) {
    const [product,setProduct]=useState({
        id:'',
        name:'',
        price:'',
        status:false
    });
    let onChange=(e)=>{
        let target=e.target;
        let name=target.name;
        let value=target.type==='checkbox'?target.checked:target.value;
        if(name==='price'){
            value=parseInt(value);
        }
        setProduct({
            ...product,
            [name]:value
        });
    };
    useEffect(()=>{
        if(props.match){
            callApi(`products/${props.match.params.id}`,'GET',null)
            .then((res)=>{
                console.log(res);
                setProduct(res.data)
            })
            .catch((err)=>console.log(err))
        }   
    },[])
    let onSubmit=(e)=>{
        e.preventDefault();
        props.onUpdateProduct(product);
        props.history.push('/product-list');
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <form onSubmit={onSubmit}>
                        <legend>Thêm sản phẩm</legend>
                        <div className="form-group">
                            <label>Tên sản phẩm:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Input field"
                                name="name"
                                value={product.name}
                                onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <label>Giá:</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Input field" 
                                name="price"
                                value={product.price}
                                onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <div className="checkbox">
                                <label>
                                    <input 
                                        type="checkbox"
                                        value=""
                                        name="status"
                                        checked={product.status}
                                        onChange={onChange}/>
                                    Còn hàng
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Lưu lại</button>
                    </form> 
                </div>
            </div>
        </div>
        
    );
}

const mapStateToProps=(state)=>{
    return {

    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        onUpdateProduct:(product)=>{
            dispatch(actions.actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);