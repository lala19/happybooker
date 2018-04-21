import React, { Component } from 'react';
import $ from 'jquery';
import Main from './panel_main/panel_main.jsx';
import Aside from './panel_aside/panel_aside.jsx';
import Footer from '../public/footer.jsx';
class Index extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        $(".go-top").on("click", function () {
            $("html,body").animate({ "scrollTop": 0 })
        })
    }
    render() {
        return (
            <div className="index">
                <div className="main clearfix">
                    <Main />
                    <div className="panel_aside">
                        <div className="big-event">
                            <div><a href="javascript:void(0)" target="_blank"><img src="http://www.hbooker.com/resources/imagesactivity/zhengwen_forth.jpg" /></a></div>
                            <div><a href="javascript:void(0)" target="_blank"><img src="https://avatar.kuangxiangit.com/novel/img_notice/20180109032303547.jpg" /></a></div>
                        </div>
                        <div className="recomm-tit">
                            <h4>精选荣誉榜单</h4>
                        </div>
                        <Aside />
                    </div>
                    
                </div>
                <Footer />
                <a href="javascript:void(0)" className="fixedright"></a>
                <div className="go-top">
                    <a href="javascript:;">返回顶部</a>
                </div>
            </div>
        );
    }
}
export default Index;
