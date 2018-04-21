import React, { Component } from 'react';
import $ from 'jquery';
import { HashRouter, Route, Link } from "react-router-dom";
class Nav extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        $(document).on("scroll",function(){
            if($(document).scrollTop()>220){
                $(".nav").addClass("navfixed")
                $(".go-top").show();
            }
            if($(document).scrollTop()<220){
                $(".nav").removeClass("navfixed")
                $(".go-top").hide();
            }
        })
    }
    render() {
        return (
            <div className="nav">
                <div className="main menu-inner">
                    <ul className="menu ly-fl clearfix">
                        <li className="selected"><Link to="/index">首页</Link></li>
                        <li><a href="javascript:void(0)">排行</a></li>/brother
                        <li><Link to="/book">宅文</Link></li>
                        <li><a href="javascript:void(0)">同人</a></li>
                        <li><a href="javascript:void(0)">女生</a></li>
                        <li><a href="javascript:void(0)">漫画</a></li>
                        <li><a href="javascript:void(0)">游戏</a></li>
                        <li><a href="javascript:void(0)">书库</a></li>
                        <li><a href="javascript:void(0)">社区</a></li>
                    </ul>
                    <div className="ly-fr">
                        <form action="" name="myform" id="" target="_blank" className="search-form">
                            <input name="keyword"  type="text"  data-type="1" placeholder="搜索更多作品或作者" />
                            <button type="submit"></button>
                        </form>
                    </div>
                </div>
                <b className='bg'></b>
            </div>
        );
    }
}
export default Nav;


