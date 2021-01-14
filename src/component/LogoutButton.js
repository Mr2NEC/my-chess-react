import React from 'react';
import { connect } from 'react-redux';
import actionLogout from '../redux/action/actionLogout';
import { Button } from 'react-bootstrap';

function LogoutButton({ onClick, children }) {
    return <Button onClick={() => onClick()}>{children}</Button>;
}

const CLogoutButton = connect(
    (state) => ({
        children:
            state.authReducer.payload && state.authReducer.payload.sub.login,
    }),
    { onClick: actionLogout }
)(LogoutButton);

export default CLogoutButton;
