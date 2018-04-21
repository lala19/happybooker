import React, { Component } from 'react';
import $ from 'jquery';
import Classfiy from './classfiy/classfiy.jsx';
import Aside from './aside/aside.jsx';
import Author from './author/author.jsx';
import Bookinfo from './bookinfo/bookinfo.jsx';
import Mainaside from '../index/panel_aside/panel_aside.jsx';
import List from './list/list.jsx';
import Footer from '../public/footer.jsx';
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bool: false
        }
    }
    componentDidMount() {
        if (window.location.href.indexOf("?bookid=") > -1) {
            var self = this;
            var str = window.location.href.split("?bookid=")[1];
            $.ajax({
                url: "http://localhost:9000/getdata/getbookinfo",
                type: "post",
                data: {
                    actionid: str
                },
                dataType: "JSON"
            }).then((res) => {
                var arr = JSON.parse(res[0].section_list);
                var arr1 = []
                for (var i = 0; i < 12; i++) {
                    arr1.push(arr[i])
                }
                console.log(arr1)
                self.props.changeBookStatus(res[0]);
                self.props.lookAll(arr1);
                self.setState({
                    bool: true
                })
            })
        }
    }
    render() {
        return (
            <div className="panel">
                <div className="loading" style={(() => {
                    return { display: this.state.bool ? 'none' : 'block', width: "100%" }
                })()}>
                    <img src="http://img.zcool.cn/community/0195f55972f18ca8012193a342310a.gif" style={{
                        width: "480px",
                        margin: "0px auto",
                        marginLeft: "480px"
                    }} />
                </div>
                <div className="main clearfix" style={(() => {
                    return { display: this.state.bool ? 'block' : 'none' }
                })()}>
                    <Classfiy />
                    <div className="panel_main" style={{ "marginTop": "30px" }}>
                        <div className="clearfix">
                            <Author />
                            <Bookinfo />
                        </div>
                        <List />
                    </div>

                    <div className="panel_aside" style={{ "marginTop": "30px" }}>
                        <Aside />
                        <Mainaside />
                    </div>
                </div>
                <Footer />
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
        changeBookStatus(res) {
            dispatch({
                type: "nice",
                bookstatus: true,
                bookinfo: res
            })
        },
        lookAll(res) {
            dispatch({
                type: "lookbook",
                article: res
            })
        }
    }
})(Book);