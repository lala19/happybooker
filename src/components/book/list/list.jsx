import React, { Component } from 'react';
import $ from 'jquery';
import "./list.css";
import { connect } from 'react-redux';
class Zbqt extends Component {
    constructor(props) {
        super(props);
        this.state={
            lookbool:true,
            list:[]
        }
    }
    lookall(){
        var arr= JSON.parse(this.props.state.bookinfo.section_list)
        var arr1=[];
        for(var i=0; i<arr.length; i++){
            arr1.push(arr[i])
        }
        console.log(arr1)
        this.setState({
            lookbool:false
        })
        console.log(this.state.lookall)
        this.props.lookAlllist(arr1);
    }
    render() {
        return (
            <div className="mod-box ly-mt30">
                <div className="mod-tit1">
                    <h3><i></i>章节列表</h3>
                    <a className="ly-fr order-by" href="http://www.hbooker.com/book/100057888?arr_reverse=1">倒序</a>
                </div>
                <div className="mod-bd">
                    <div className="book-chapter-list ly-mt30">
                        <ul className="clearfix less">
                            {(() => {
                                if (JSON.stringify(this.props.state.article)&&JSON.stringify(this.props.state.article)!="[]") {
                                    var htmlarr = this.props.state.article.map(function (ele, index) {
                                        return (
                                            <li key={index}><a href={ele.chapter_link}><i className="line"></i>{ele.chapter}</a></li>
                                        )
                                    })
                                    return htmlarr;
                                }
                            })()}
                        </ul>
                        <div className="read-all lookall" style={{
                            display:this.state.lookbool?"block":"none"
                        }}><a id="J_ReadAll" href="javascript:;" onClick={this.lookall.bind(this)} style={{
                            
                        }}>+ 查看全部章节</a></div>
                        <ul className="clearfix" style={{
                            display:this.state.lookbool?"block":"none"
                        }}>
                            {(() => {
                                if (JSON.stringify(this.props.state.bookinfo) != "{}") {
                                    var arr = JSON.parse(this.props.state.bookinfo.section_list);
                                    var arr1 = []
                                    for (var i = arr.length-1; i > arr.length-5; i--) {
                                        arr1.push(arr[i]);
                                    }
                                    var htmlarr = arr1.map(function (ele, index) {
                                        return (
                                            <li key={index}><a href={ele.chapter_link}><i className="line"></i>{ele.chapter}</a></li>
                                        )
                                    })
                                    return htmlarr;
                                }
                            })()}
                        </ul>
                    </div>
                </div>
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
        lookAlllist(res){
            dispatch({
                type: "lookbook",
                article: res
            })
        }
    }
})(Zbqt);

