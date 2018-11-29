import React from 'react'
import logo from '../../assets/static/images/logo.png'
class MenuLeft extends React.Component{
    render(){
        return <div className="sidebar">
        <div className="sidebar-inner">
            <div className="sidebar-logo">
                <div className="peers ai-c fxw-nw">
                    <div className="peer peer-greed">
                        <a className="sidebar-link td-n" href="index.html">
                            <div className="peers ai-c fxw-nw">
                                <div className="peer">
                                    <div className="logo">
                                        <img src={logo} alt="" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="peer">
                        <div className="mobile-toggle sidebar-toggle">
                            <a href="" className="td-n">
                                <i className="ti-arrow-circle-left"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <ul className="sidebar-menu scrollable pos-r">
                <li className="nav-item mT-30 active">
                <a className="sidebar-link" href="index.html">
                    <span className="icon-holder">
                    <i className="c-blue-500 ti-home"></i>
                    </span>
                    <span className="title">Dashboard</span>
                </a>
                </li>
            </ul>
         </div>
    </div>
    }
}

export default MenuLeft