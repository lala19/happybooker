import React, { Component } from 'react';
class Search extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header className="header">
                <div className="ly-wrap main">
                    <ul className="login-info ly-fl">
                        <li><a className="qq" href="javascript:;" ></a></li>
                        <li><a href="javascript:;">登录</a></li>
                        <li className="line">|</li>
                        <li><a className="javascript:;">注册</a></li>
                    </ul>
                    <div className="nav-top-right ly-fr">
                        <ul className="special ly-fl clearfix">
                            <li className="recharge"><a href="javascript:;"><i></i>充值中心</a></li>
                            <li className="line">|</li>
                            <li className="author"><a href="javascript:;"><i></i>作者后台</a></li>
                            <li className="line">|</li>
                        </ul>
                        <a className="app-download ly-fl" href="javascript:;" target="_blank"><img src="http://www.hbooker.com/resources/images/app-download.png" alt="" /></a>
                        <div className="qr-code ly-fl">
                            <a className="code" href="javascript:;"><div style={{ height: '0px',display:'none'}}><p>扫码下载客户端</p></div></a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default Search;
