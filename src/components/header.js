import React from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import '../assets/css/header.css';
import logo from '../assets/images/logo.svg';
export default function Header() {
    return (
        <Navbar className="NavClass" color="faded" light expand="md">
            <img src={logo} className="App-logo" alt="logo" />
            <NavbarBrand href="/">DEVinhouse</NavbarBrand>
            <Nav className="ml-auto" navbar>
                
            
                <NavItem className="d-flex align-items-center">
                    <NavLink className="font-weight-bold" href="/">
                        Home
                    </NavLink>
                </NavItem>
                <NavItem className="d-flex align-items-center">
                    <NavLink
                        className="font-weight-bold"
                        href="/users"
                    >
                        Users
                    </NavLink>
                    <NavLink
                        className="font-weight-bold"
                        href="/allproducts"
                    >
                        Add User
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

