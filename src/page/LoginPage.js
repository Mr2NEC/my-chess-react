import React from 'react';
import { NavLink } from 'react-router-dom';
import {  Nav } from 'react-bootstrap';
import { CLogin } from '../component/AuthForm';

export default function LoginPage() {
    return <>
    <h1>LoginPage</h1>
    <div className='d-flex flex-column'>
    <CLogin />
        <div className='d-flex justify-content-center align-items-stretch p-2'>
            <span className='align-self-center'>Have no account yet?</span>
            <Nav.Link className="text-info p-1"  as={NavLink} to="/register">
                Sign up
            </Nav.Link>
        </div>
    </div>
    </>
}