import React from 'react';
import UserList from '../component/UserList';
import ConfirmationModal from '../component/ConfirmationModal';

export default function MainPage() {
    return (
        <>
            <h1>Главная</h1>
            <div className="d-flex bd-highlight my-5 justify-content-center">
                <UserList className=" bd-highlight " />
            </div>
        </>
    );
}
