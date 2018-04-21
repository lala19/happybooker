import React, { Component } from 'react';
import $ from 'jquery';
import './classfiy.css';
import { connect } from 'react-redux'
class Zbqt extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="breakcrumb" style={{"marginTop":"10px"}}>
                <a href="javascript:void(0)">首页</a>
                    &gt;
                <a href="javascript:void(0)">{(()=>{
                    if(JSON.stringify(this.props.state.bookinfo)!="{}"){
                        var str=this.props.state.bookinfo.book_type
                        var obj=JSON.parse(this.props.state.bookinfo.book_type)
                        return obj.type1
                    }
                    
                })()}</a> &gt; <a href="javascript:void(0)">{(()=>{
                    if(JSON.stringify(this.props.state.bookinfo)!="{}"){
                        var str=this.props.state.bookinfo.book_type
                        var obj=JSON.parse(this.props.state.bookinfo.book_type)
                        return obj.type2
                    }
                })()}</a> &gt;{(()=>{
                    return this.props.state.bookinfo.book_name;
                })()}
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
        
    }
})(Zbqt);
