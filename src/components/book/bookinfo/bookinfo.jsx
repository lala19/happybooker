import React, { Component } from 'react';
import $ from 'jquery';
import './bookinfo.css';
import { connect } from 'react-redux'
class Zbqt extends Component {
    constructor(props) {
        super(props);
        this.state={
            infoindex:0
        }
    }
    componentDidMount() {
        console.log(this.props.state.bookinfo)
    }
    tabChange(num){
        this.setState({
            infoindex:num
        })
        var str=$(".book-cnt").children(".act-tab-content").eq(2).find("img").attr("data-original")
        $(".book-cnt").children(".act-tab-content").eq(2).find("img").attr("src",str);
        $(".book-cnt").children(".act-tab-content").eq(num).show().siblings().hide();
    }
    render() {
        return (
            <div className="book-detail">
                <div className="ly-fl book-info">
                    <div className="book-title">
                        <h1>{this.props.state.bookinfo.book_name}</h1>
                        <p><span>小说作者：</span><a href="javascript:void(0)">{this.props.state.bookinfo.anthor}</a></p>
                    </div>
                    <div className="book-bd act-tab">
                        <div>
                            <span className="time-update ly-fr">更新时间：2018-04-19 03:19:35</span>
                            <ul className="act-tab-titles clearfix">
                                <li className={this.state.infoindex==0?"selected":""}><a href="javascript:" onClick={this.tabChange.bind(this,0)}>作品简介</a></li>
                                <li className={this.state.infoindex==1?"selected":""}><a href="javascript:" onClick={this.tabChange.bind(this,1)}>作品信息</a></li>
                                <li className={this.state.infoindex==2?"selected":""}><a href="javascript:" onClick={this.tabChange.bind(this,2)}>作者信息</a></li>
                            </ul>
                        </div>
                        <div className="book-cnt" dangerouslySetInnerHTML={{__html: this.props.state.bookinfo.book_info}}>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}
export default connect((state) => {
    return {
        state
    }
}, (dispatch) => {
    return {
        
    }
})(Zbqt);
