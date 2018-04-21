import React, { Component } from 'react';
import './footer.css';
class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='footer_wrap clearfix'>
                <div className="friend-link">
                    <div className="ly-wrap">
                        <h3 className="friend-link-title">友情链接</h3>
                        <ul className="friend-link-list">
                            <li>
                                <a href="http://www.lenovomm.com" target="_blank">联想乐商店</a>
                            </li>
                        </ul>
                        <ul className="friend-link-list">
                            <li>
                                <a href="http://www.dreamersall.com" target="_blank">梦想家中文网</a>
                            </li>
                        </ul>
                        <ul className="friend-link-list">
                            <li>
                                <a href="http://www.diyidan.com/" target="_blank" rel="nofollow">第一弹</a>
                            </li>
                        </ul>
                        <ul className="friend-link-list">
                            <li>
                                <a href="https://www.iqing.com" target="_blank">轻文轻小说</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    <div className="main clearfix">
                        <ul className="ly-fl about-us">
                            <li>
                                <dl>
                                    <dt><a href="https://www.hbooker.com/index">首页</a></dt>
                                    <dd><a target="_blank" href="https://www.hbooker.com/index/sitemap">网站地图</a></dd>
                                    <dd><a target="_blank" href="https://www.hbooker.com/index/about-us">关于欢乐书客</a></dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>联系与合作</dt>
                                    <dd><a target="_blank" href="https://www.hbooker.com/index/contact-us">联系我们</a></dd>
                                    <dd><a target="_blank" href="https://www.hbooker.com/index/join-us">加入我们</a></dd>
                                    <dd><a target="_blank" href="https://www.hbooker.com/index/questions">帮助中心</a></dd>
                                </dl>
                            </li>
                            <li>
                                <dl>
                                    <dt>移动客户端</dt>
                                    <dd><a target="_blank" href="https://www.hbooker.com/index/app/iphone">欢乐书客 iPhone 版</a></dd>
                                    <dd><a target="_blank" href="https://www.hbooker.com/index/app/android">欢乐书客 Android 版</a></dd>
                                    <dd><a target="_blank" href="https://www.hbooker.com/index/app/ipad">欢乐书客 iPad 版</a></dd>
                                </dl>
                            </li>

                        </ul>
                        <div className="ly-fr follow-us">
                            <div className="hd">关注我们</div>
                            <div className="bd" id="J_QrCodeWx">
                                小说资源互助群：139851656<br />
                                欢乐书客问题反馈群：692914196<br />
                                欢乐书客官方微信：<i><div></div></i>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        Copyright © 2015 Hangzhou Fantasy Technology NetworkCo.,Ltd.
                    </div>
                    <div className="record">
                        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010802004477">
                            <img src="https://www.hbooker.com/resources/images/record.png"  />
                            浙公网安备 33010802004477号浙ICP备14025736号-2
                        </a>
                        <p>请所有作者发布作品时务必遵守国家互联网信息管理办法规定，我们拒绝任何内容违法的小说，一经发现，即作删除！</p>
                        <p>本站所收录作品、社区话题、书库评论及本站所做之广告均属个人行为，与本站立场无关</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;
