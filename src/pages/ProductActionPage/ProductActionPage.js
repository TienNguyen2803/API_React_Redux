import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actGetProductEditingRequest , actUpdateProductRequest} from '../../actions/index';
class ProductActionPage extends Component {
    
    state = {
        id: null,
        txtName: '',
        txtPrice: '',
        chkbPrice: false
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })

    }
    onSubmit = (e) => {
        var { history, match , onUpdateProduct} = this.props;
        var { txtName, txtPrice, chkbPrice } = this.state;
        var product = {
            id: match.params.id,
            name: txtName,
            price: txtPrice,
            status: chkbPrice
        }
        console.log(product);
        e.preventDefault();
        if (product.id) {
            onUpdateProduct(product);
        } else {
            this.props.onAddProduct(product);
        }
        history.goBack();
    }

    componentDidMount() {
        var { match, onGetProductEditing, itemEditing } = this.props;
        var id = match.params.id;
        console.log({match, itemEditing , id});
        if (match) {
            if (id) {
                onGetProductEditing(id);
                
            }
        }
    }
    componentDidUpdate(prevProps){
        const {id, name ,price , status} = this.props.itemEditing || {};
        if(prevProps.itemEditing !== this.props.itemEditing){
 
            this.setState({
                ...this.state,
                id: id,
                txtName: name,
                txtPrice: price,
                chkbPrice: status
            })
        }
    }

  

    render() {
        var { txtName, txtPrice, chkbPrice } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label >Tên sản phẩm</label>
                        <input
                            type="text"
                            className="form-control"
                            name='txtName'
                            value={txtName || ''}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Giá</label>
                        <input
                            type="number"
                            className="form-control"
                            name='txtPrice'
                            value={txtPrice || ''}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label >Trạng thái</label>
                    </div>

                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name='chkbPrice'
                                value={chkbPrice || false}
                                checked={chkbPrice || false}
                                onChange={this.onChange} />
                                Còn hàng
                            </label>
                    </div>
                    <Link
                        to="/product-list"
                        className="btn btn-danger mr-10">Quay lại</Link>

                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                </form>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product))
        },
        onGetProductEditing: (id) => {
            dispatch(actGetProductEditingRequest(id))
        }, 
        onUpdateProduct : (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);