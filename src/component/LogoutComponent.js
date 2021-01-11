import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { actionLogout } from '../redux/actions';

function LogoutComponent({ onClick, children }) {
    return <Button onClick={() => onClick()}>{children}</Button>;
}

export const CLogoutComponent = connect(
    (state) => ({
        children:
            state.authReducer.payload && state.authReducer.payload.sub.login,
    }),
    { onClick: actionLogout }
)(LogoutComponent);
