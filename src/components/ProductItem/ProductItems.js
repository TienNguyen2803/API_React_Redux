import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItems extends Component {
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn hàng' : 'Hết hàng';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}> {statusName}</span>
                </td>
                <td>
                    <Link 
                        to = {`/product/${product.id}/edit`} className="btn btn-success mr-10">Chỉnh sửa</Link>
                    <button type="button" className="btn btn-danger" onClick={() => {this.props.onDelete(product.id)}}>Xoá</button>
                </td>
            </tr>
        );
    }
}

export default ProductItems;