import React, { Component } from 'react';
import Firstcol from '../firstcol/firstcol.jsx';
import Zwtj from '../classfiy_zw/classfiy_zw.jsx';
import Trtj from '../classfiy_zw/classfiy_tr.jsx';
import Nstj from '../classfiy_zw/classfiy_ns.jsx';
import Nvstj from '../classfiy_zw/classfiy_nvs.jsx';
import Bosstj from '../classfiy_zw/classfiy_boss.jsx';
import Lately from '../lately_update/lately_update.jsx';
class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="panel_main">
            <Firstcol />
            <Zwtj />
            <Trtj />
            <Nstj />
            <Nvstj />
            <Bosstj />
            <Lately />
            </div>
        );
    }
}
export default Main;