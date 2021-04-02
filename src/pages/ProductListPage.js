import ProductList from './../components/ProductList/ProductList';
import ProductItem from './../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';
import * as actions from './../actions/index';

class ProductListPage extends React.Component{
    componentDidMount(){
        this.props.fetchProducts();
    }

    showProducts = (products) => {
        let output = null;
        if (products.length > 0) {
            output = products.map((product, index) => {
                return (<ProductItem key={index} index={index} product={product} onDelete={this.onDelete}/>)
            })
        }
        return output;
    }

    onDelete=(id)=>{    
        this.props.onDeleteProduct(id);
    }


    render(){  
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Link to='/product/add' type="button" className="btn btn-info">Thêm sản phẩm</Link>
                        <ProductList>
                            {this.showProducts(this.props.products)}
                        </ProductList>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        fetchProducts:(products)=>{
            dispatch(actions.actFetchProductsRequest(products))
        },
        onDeleteProduct:(id)=>{
            dispatch(actions.actDeleteProductRequest(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);