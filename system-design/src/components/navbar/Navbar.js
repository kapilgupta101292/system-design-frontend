
import React, { Component } from 'react'
import { MenuItems } from './MenuItems'


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="NavbarItems">
                    <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                    <div className="menu-icon">

                    </div>
                    <ul>
                        {MenuItems.map((item, index) => {
                            return (
                                <li><a className={MenuItems.cName} href={item.url}>
                                    {item.title}
                                    </a></li>
                            )
                        })}
                        
                    </ul>
                </nav>
            </div>
        )
    }
}
