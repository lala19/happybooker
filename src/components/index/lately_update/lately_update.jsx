import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';
import './lately_update.css';
class Trtj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }
    componentDidMount() {
        $.ajax({
            url: "http://localhost:9000/getdata/latelyupdate",
            type: "post",
            dataType: "JSON"
        }).then((res) => {
            this.setState({
                list: res
            });
        })
    }
    render() {
        return (
            <div className="lately_update">
                <div className="mod-tit1">
                    <h3><i></i>最近更新小说</h3>
                    <a className="ly-fr" href="">查看更多 &gt;</a>
                </div>
                <div className="tab-body">
                    <table>
                        <thead>
                        <tr>
                            <th><span>序号</span></th>
                            <th><span>小说类别</span></th>
                            <th><span>小说书名/小说章节</span></th>
                            <th><span>字数</span></th>
                            <th><span>小说作者</span></th>
                            <th>更新时间</th>
                        </tr>
                        </thead>
                        <tbody>
                        {(()=>{
                            var htmlarr=this.state.list.map(function(ele,index){
                                var link=ele.link.split("book/")[1];
                                return (
                                    <tr key={index}>
                                        <td><p className="code center">{ele.top}</p></td>
                                        <td><p className="type center">{ele.classfiy}</p></td>
                                        <td><p className="name"><Link  to={`/book?bookid=${link}`}>{ele.bookname}</Link><span>{ele.section}</span><i>{ele.vip}</i></p></td>
                                        <td><p className="num center">{ele.wordnum}</p></td>
                                        <td><p className="author center"><a href="javascript:void(0)">{ele.anthor}</a></p></td>
                                        <td><p className="date center">{ele.time}</p></td>
                                    </tr>
                                )
                            })
                            return htmlarr;
                        })()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default Trtj;
