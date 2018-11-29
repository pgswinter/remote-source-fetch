import React from 'react'
import logo from '../../assets/static/images/logo.png'

class Header extends React.Component{
    render(){
        return <div className="header navbar">
            <div className="header-container">
                <ul className="nav-left">
                    <li>
                        <a id='sidebar-toggle' className="sidebar-toggle" href="javascript:void(0);">
                        <i className="ti-menu"></i>
                        </a>
                    </li>
                    <li className="search-box">
                        <a className="search-toggle no-pdd-right" href="javascript:void(0);">
                        <i className="search-icon ti-search pdd-right-10"></i>
                        <i className="search-icon-close ti-close pdd-right-10"></i>
                        </a>
                    </li>
                    <li className="search-input">
                        <input className="form-control" type="text" placeholder="Search..." />
                    </li>
                </ul>
                <ul className="nav-right">
                    <li className="notifications dropdown">
                        <span className="counter bgc-red">3</span>
                        <a href="" className="dropdown-toggle no-after" data-toggle="dropdown">
                        <i className="ti-bell"></i>
                        </a>
                    </li>
                    <li className="notifications dropdown">
                        <span className="counter bgc-blue">3</span>
                        <a href="" className="dropdown-toggle no-after" data-toggle="dropdown">
                        <i className="ti-email"></i>
                        </a>
                    </li>
                    <li className="dropdown">
                        <a href="" className="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-toggle="dropdown">
                        <div className="peer mR-10">
                            <img className="w-2r bdrs-50p" src={logo} alt="" />
                        </div>
                        <div className="peer">
                            <span className="fsz-sm c-grey-900">Anh (Robert) T. NGUYEN</span>
                        </div>
                        </a>
                        <ul className="dropdown-menu fsz-sm">
                        <li>
                            <a href="" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                            <i className="ti-settings mR-10"></i>
                            <span>Setting</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                            <i className="ti-user mR-10"></i>
                            <span>Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="email.html" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                            <i className="ti-email mR-10"></i>
                            <span>Messages</span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li>
                            <a href="" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                            <i className="ti-power-off mR-10"></i>
                            <span>Logout</span>
                            </a>
                        </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    }
}

export default Header