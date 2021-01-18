import React from 'react';
import { useSelector } from 'react-redux';
import CLogoutButton from './LogoutButton';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar() {
    const auth = useSelector((state) => state.authReducer);
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
                    {auth.token !== undefined &&
                    auth.token === localStorage.token ? (
                        <CLogoutButton />
                    ) : (
                        <>
                            <Nav.Link
                                className="text-light"
                                as={NavLink}
                                to="/login"
                            >
                                Log in
                            </Nav.Link>
                            <Nav.Link
                                className="text-light"
                                as={NavLink}
                                to="/register"
                            >
                                Sign up
                            </Nav.Link>
                        </>
                    )}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
