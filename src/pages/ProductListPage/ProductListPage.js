import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItems from '../../components/ProductItem/ProductItems';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {actFetchProductsRequest , actFecthDeleteRequest } from '../../actions/index';
 
class ProductListPage extends Component {

   
    componentDidMount(){
        this.props.fetchAllProduct();
    }
    render() {
        var {products} = this.props;
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to = "/product/add" type="button" className="btn btn-info mb-10">Thêm sản phẩm</Link>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <ProductList>
                        {this.showProductItems(products)}
                    </ProductList>

                </div>

            </div>
        );
    }
    showProductItems = (products) => {
        //var {onGetProductEditing} = this.props;
        var result = null;
        result = products.map((product, index) => {
            return <ProductItems
                key={index}
                index={index}
                product={product}
                onDelete ={this.onDelete}
                //onGetProductEditing = {onGetProductEditing}
            />
        })

        return result;
    }
    onDelete = (id) => {
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Bạn có chắc chắn xoá hay không ?")){
            console.log(id);
           this.props.onDelete(id);
        }
    }
    
}

const mapStateToProps = (state ) => {
    return {
        products : state.products
    }
}
const mapDispatchToProps = (dispatch , props) => {
    return{
        fetchAllProduct : () => {
            dispatch(actFetchProductsRequest())
        },
        onDelete : (id) => {
            dispatch(actFecthDeleteRequest(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);