import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import './classfiy_zw.css';
import $ from 'jquery';
import '../../../css/swiper.min.css';
import Swiper from 'swiper';
class Zwtj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            zwtj:[]
        }
    }
    componentDidMount() {
        $.ajax({
            url: "http://localhost:9000/getdata/indexblist",
            type: "post",
            data: {
                type: "宅文推荐"
            },
            dataType: "JSON"
        }).then((res) => {
            this.setState({
                list: res
            });
        })
        $.ajax({
            url: "http://localhost:9000/getdata/getbanner",
            type: "post",
            data: {
                type: "宅文推荐"
            },
            dataType: "JSON"
        }).then((res) => {
            this.setState({
                zwtj: res
            });
        })
        setTimeout(() => {
           var swiper1= new Swiper('.toptop', {
                spaceBetween: 30,
                centeredSlides: true,
                direction:"vertical",
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination1',
                    clickable: true,
                }
            });
        }, 500);
    }
    render() {
        return (
            <div className='classfiy'>
                <div className="mod-tit">
                    <h3>宅文推荐</h3>
                    <i className="line"></i>
                    <span>200位宅文大神鼎力打造</span>
                    <a href="https://www.hbooker.com/index/header_cate_list/zhaiwen">查看全部 &gt;</a>
                </div>
                <div className="mod-body clearfix">
                    <ul>
                        {(()=>{
                           var htmlarr= this.state.list.map(function(ele,index){
                            var link = ele.link.split("book/")[1];
                                return (<li key={index}>
                                    <Link to={`/book?bookid=${link}`} className="img">
                                        <img className="lazyload" src={ele.imgsrc}  />
                                        <div className="mask"></div>
                                        <div className="info">
                                            <div className="t"><img src={(()=>{
                                                if(ele.headpic){
                                                    return ele.headpic;
                                                }else{
                                                    return 'https://www.hbooker.com/resources/images/avatar-default-m.png'
                                                }
                                            })()} />{ele.title}</div>
                                            <div className="n">{ele.info}</div>
                                            <div className="num">{ele.starnum}<i></i></div>
                                        </div>
                                        </Link>
                                    <div className="title"><Link to={`/book?bookid=${link}`} dangerouslySetInnerHTML={{__html: ele.bookname}}></Link></div>
                                    <div className="info" dangerouslySetInnerHTML={{__html: ele.html}}></div>
                                </li>)
                            })
                            return htmlarr;
                        })()}
                    </ul>
                </div>
                <div className="autobanner">
                <div className="toptop leftauto">
                        <div className="swiper-wrapper item">
                            {(() => {
                               var htmlarr= this.state.zwtj.map(function(ele,index){
                                var link = ele.imgsrc.split("book/")[1];
                                    return (<div className="swiper-slide items" style={{
                                        backgroundImage: 'url(' + ele.link + ')'
                                    }} key={index}>
                                    <Link to={`/book?bookid=${link}`} style={{width:'100%',height:'100%'}}></Link>
                                    </div>)
                                })
                                return htmlarr
                            })()}
                        </div>
                        <div className="swiper-pagination1 dot"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Zwtj;
