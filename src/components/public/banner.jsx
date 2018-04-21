import React, { Component } from 'react';
import Nav from './nav.jsx';
class Search extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header className="banner">
                <div className="ly-wrap header-inner">
                    <div className="main">
                        <div className="logo overflowhide">
                            <h1><a href="https://www.hbooker.com/index"><img src="https://www.hbooker.com/resources/images/logo.png" alt="logo" /></a></h1>
                            <div className="txt">互动文学领导者，让阅读和创作不再寂寞。</div>
                        </div>
                    </div>
                </div>
                <Nav></Nav>
            </header>
        );
    }
}
export default Search;
