import React, { Component } from 'react';
import './panel_aside.css';
import Zbqt from '../aside_top/toplist_zbqt.jsx';
import Zwqt from '../aside_top/toplist_zwqt.jsx';
import Trqt from '../aside_top/toplist_trqt.jsx';
import Nsqt from '../aside_top/toplist_nsqt.jsx';
import Nvsqt from '../aside_top/toplist_nvsqt.jsx';
import Boss from '../aside_top/toplist_boss.jsx';
class Aside extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="panel_aside">
                <Zbqt />
                <Zwqt />
                <Trqt />
                <Nsqt />
                <Nvsqt />
                <Boss />
            </div>

        );
    }
}
export default Aside;