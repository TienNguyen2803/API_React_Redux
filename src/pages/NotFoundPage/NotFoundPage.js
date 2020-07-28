import React, { Component } from 'react';

class NotFoundPage extends Component {
    render() {
        return (
            <div>
                
                <div className="alert alert-warning">
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>404</strong> Không tìm thấy trang
                </div>
                
            </div>
        );
    }
}

export default NotFoundPage;