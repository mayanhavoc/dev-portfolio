import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import Dropdown from 'react-bootstrap/Dropdown';
import NavLink from 'react-bootstrap/NavLink';
import './Navbar.css';


class Navbar extends Component {
    render() {
        return (
            <div className="mx-4">
                <img src="./images/logo.png" width="50px" alt="logo" />
                <Dropdown className="Nav mx-2" as={NavItem}>
                    <Dropdown.Toggle as={NavLink}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Home</Dropdown.Item>
                        <Dropdown.Item>About</Dropdown.Item>
                        <Dropdown.Item>Work</Dropdown.Item>
                        <Dropdown.Item>Contact</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

export default Navbar


  





