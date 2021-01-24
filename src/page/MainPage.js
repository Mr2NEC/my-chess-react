import React from 'react';
import UserList from '../component/UserList';

let usersOnline = [
    { id: 1, login: 'Mr2nec1231232132' },
    { id: 2, login: 'Mr2nec2' },
    { id: 3, login: 'Mr2nec3' },
    { id: 4, login: 'Mr2nec4' },
    { id: 5, login: 'Mr2nec5' },
    { id: 6, login: 'Mr2nec6' },
    { id: 7, login: 'Mr2nec7' },
    { id: 8, login: 'Mr2nec8' },
];

export default function MainPage({
    users = usersOnline,
}) {
    return (
        <>
            <h1>Главная</h1>
            <div className="d-flex bd-highlight my-5 justify-content-center">
                <UserList className=" bd-highlight " users={users} />
            </div>
        </>
    );
}
