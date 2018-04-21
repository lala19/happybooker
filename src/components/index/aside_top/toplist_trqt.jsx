
import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';
import './toplist.css';
class Zbqt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }
    componentDidMount() {
        $.ajax({
            url: "http://localhost:9000/getdata/indextop",
            type: "post",
            data: {
                type: "同人强推"
            },
            dataType: "JSON"
        }).then((res) => {
            this.setState({
                list: res
            });
        })
    }
    loadReset(){
        window.location.reload()
    }
    render() {
        return (
            <div className="aside_top">
                <div className="recomm-list">
                    <div className="tit">同人强推</div>
                    <div className="sub-tit"><i>TOP 10</i> 我要的次元</div>
                    <ul>
                        {(() => {
                            var self=this;
                            var htmlarr=this.state.list.map(function (ele, index) {
                                var link = ele.link.split("book/")[1];
                                if (ele.top == 1) {
                                    return (
                                        <li className="top1" key={index}>
                                            <Link to={`/book?bookid=${link}`} onClick={self.loadReset.bind(this)}>
                                                <img className="img" src={ele.imgsrc} />
                                                <span className="num" dangerouslySetInnerHTML={{ __html: ele.num }}></span>
                                                <i className="icon-top icon-top1">{ele.top}</i><br />
                                                <p>{ele.title}</p>
                                                <p className="author">{ele.anthor}</p>
                                                </Link>
                                        </li>
                                    )
                                } else if (ele.top == 2) {
                                    return (
                                        <li className="top2" key={index}>
                                            <Link to={`/book?bookid=${link}`} onClick={self.loadReset.bind(this)}>
                                                <span className="num" dangerouslySetInnerHTML={{ __html: ele.num }}></span><i className="icon-top icon-top2">{ele.top}</i>{ele.title}</Link>
                                        </li>
                                    )
                                } else if (ele.top == 3) {
                                    return (
                                        <li className="top3" key={index}>
                                            <Link to={`/book?bookid=${link}`} onClick={self.loadReset.bind(this)}>
                                                <span className="num" dangerouslySetInnerHTML={{ __html: ele.num }}></span><i className="icon-top icon-top3">{ele.top}</i>{ele.title}</Link>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={index}>
                                            <Link to={`/book?bookid=${link}`} onClick={self.loadReset.bind(this)}>
                                                <span className="num" dangerouslySetInnerHTML={{ __html: ele.num }}></span><i className="icon-top">{ele.top}</i>{ele.title}
                                                </Link>
                                        </li>
                                    )
                                }
                            })
                            return htmlarr;
                        })()}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Zbqt;
