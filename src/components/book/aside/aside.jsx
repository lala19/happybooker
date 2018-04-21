import React, { Component } from 'react';
import $ from 'jquery';
import './aside.css';
class Book extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="panel_aside">
                <div className="mod-box">
                    <div className="mod-tit1">
                        <h3><i></i>给作者打赏</h3>
                    </div>
                    <div className="mod-bd ly-mt30">
                        <div className="book-reward box-shadow">
                            <div className="smile"></div>
                            <button type="button" className="J_DaShang" data-type="shang">打赏~么么哒~~</button>
                            <button type="button" className="btn-primary J_DaShang" data-type="prop">不更新？寄刀片！</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Book;
