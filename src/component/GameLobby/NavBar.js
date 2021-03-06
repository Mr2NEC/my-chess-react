import React from 'react';
import LogoutButton from './LogoutButton';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function NavBar(auth) {
    return (
        <div>
            <Navbar bg='dark'>
                <Navbar.Brand>
                    <Nav.Link className='text-light' as={NavLink} to='/' exact>
                        My Chess
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    {auth.token ? (
                        <LogoutButton text={auth.payload.sub.login} />
                    ) : (
                        <>
                            <Nav.Link
                                className='text-light'
                                as={NavLink}
                                to='/login'>
                                Log in
                            </Nav.Link>
                            <Nav.Link
                                className='text-light'
                                as={NavLink}
                                to='/register'>
                                Sign up
                            </Nav.Link>
                        </>
                    )}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
