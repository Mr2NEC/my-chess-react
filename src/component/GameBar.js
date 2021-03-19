import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from 'react-bootstrap';

export default function GameBar ( props ) {
    const {turn, color} = props
    return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>   
                    My Chess
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-center">
                    <Navbar.Text className="px-1"><b>Turn {turn}</b></Navbar.Text>
                    <Navbar.Text className="px-1"><b>Your color {color}</b></Navbar.Text>
                <Navbar.Text></Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
    );
}
