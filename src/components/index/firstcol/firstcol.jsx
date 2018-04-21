import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import $ from 'jquery';
import '../../../css/swiper.min.css';
import Swiper from 'swiper';
import './firstcol.css';
class Firstcol extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banner: [],
            banner_right: []
        }
    }
    componentDidMount() {
        $.ajax({
            url: "http://localhost:9000/getdata/indexbanner",
            type: "post",
            data: {
                type: "banner"
            },
            dataType: "JSON"
        }).then((res) => {
            this.setState({
                banner: res
            });
        });
        $.ajax({
            url: "http://localhost:9000/getdata/indexbanner",
            type: "post",
            data: {
                type: "banner_right"
            },
            dataType: "JSON"
        }).then((res) => {
            this.setState({
                banner_right: res
            });
        });
        setTimeout(() => {
            var swpier1 = new Swiper('.swiper-container', {
                spaceBetween: 30,
                centeredSlides: true,
                direction: 'horizontal',
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-right',
                    prevEl: '.swiper-left',
                },
            });
        }, 500);
    }
    leaveMouse(index) {
        $(".colr_list").eq(index).find(".info").stop();
        $(".colr_list").eq(index).find(".info").fadeOut()
        $(".colr_list").eq(index).find(".mask").fadeOut()
    }
    enterMouse(index) {
        $(".colr_list").eq(index).find(".info").stop();
        $(".colr_list").eq(index).find(".info").fadeIn()
        $(".colr_list").eq(index).find(".mask").fadeIn()
    }
    render() {
        return (
            <div className="firstcol clearfix">
                <div className="col_left clearfix">
                    <div className="swiper-container leftauto">
                        <div className="swiper-wrapper item">
                            {(() => {
                                var htmlstr = this.state.banner.map(function (ele, index) {
                                    var link = ele.link.split("book/")[1];
                                    return (<div className="swiper-slide items" style={{
                                        backgroundImage: 'url(' + ele.imgsrc + ')'
                                    }} key={index}>
                                        <p className="autoplay_bottom">{(() => {
                                            return ele.title
                                        })()}</p>
                                        <Link to={`/book?bookid=${link}`} className="swiperlink"></Link>
                                    </div>)
                                })
                                return htmlstr;
                            })()}
                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-right"></div>
                        <div className="swiper-left"></div>
                    </div>
                </div>
                <div className="col_right clearfix">
                    <ul className="clearfix">
                        {(() => {
                            var htmlarr = this.state.banner_right.map(function (ele, index) {
                                var link = ele.link.split("book/")[1];
                                return (
                                    <li className="colr_item colr_list" key={index}>
                                        <Link to={`/book?bookid=${link}`} className="swiperlink" onMouseEnter={this.enterMouse.bind(this, index)} onMouseLeave={this.leaveMouse.bind(this, index)}>
                                            <img className="lazyload" src={ele.imgsrc} />
                                            <div className="mask"></div>
                                            <div className="info" dangerouslySetInnerHTML={{ __html: ele.html }}>
                                            </div>
                                            </Link> 
                                    </li>
                                )
                            }.bind(this))
                            return htmlarr
                        })()}
                    </ul>
                </div>
            </div>
        );
    }


}
export default Firstcol;
