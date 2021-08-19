
import React, { Component } from 'react'
import { Button } from './Button';
import { MenuItems } from './MenuItems'
import './Navbar.css';

export default class Navbar extends Component {

    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <div>
                <nav className="NavbarItems">
                    <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li><a className={MenuItems.cName} href={item.url}>
                                    {item.title}
                                    </a></li>
                            )
                        })}
                        
                    </ul>
                    <Button>Sign Up</Button> 
                </nav>
            </div>
        )
    }
}
