import React from 'react';
import CLogoutButton from './LogoutButton';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
    return (
        <div>
            <Navbar bg="dark">
                <Navbar.Brand>
                    <Nav.Link className="text-light" as={NavLink} to="/" exact>
                        My Chess
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-start">
                    <Nav.Link className="text-light" as={NavLink} to="/game">
                        GamePage
                    </Nav.Link>
                </Navbar.Collapse>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="text-light" as={NavLink} to="/login">
                        LoginPage
                    </Nav.Link>
                    <Nav.Link
                        className="text-light"
                        as={NavLink}
                        to="/register"
                    >
                        RegisterPage
                    </Nav.Link>
                    <CLogoutButton />
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
