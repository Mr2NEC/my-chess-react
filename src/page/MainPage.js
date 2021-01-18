import React from 'react';
import ChatList from '../component/ChatList';
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

let userMessages = [
    {
        messageId: 1,
        id: 1,
        login: 'Mr2nec1231232132',
        message: 'Lorem ipsum dolor sit amet consectetur.',
        timestamp: 1610912831,
    },
    {
        messageId: 2,
        id: 2,
        login: 'Mr2nec2',
        message: 'Cras justo odio',
        timestamp: 1610912836,
    },
    {
        messageId: 3,
        id: 3,
        login: 'Mr2nec3',
        message: 'Lorem ipsum dolor sit amet.',
        timestamp: 1610912840,
    },
    {
        messageId: 4,
        id: 4,
        login: 'Mr2nec4',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, at.',
        timestamp: 1610912841,
    },
    {
        messageId: 5,
        id: 5,
        login: 'Mr2nec5',
        message: 'Lorem ipsum dolor sit amet.',
        timestamp: 1610912843,
    },
    {
        messageId: 6,
        id: 6,
        login: 'Mr2nec6',
        message: 'Lorem ipsum dolor sit amet consectetur.',
        timestamp: 1610912845,
    },
    {
        messageId: 7,
        id: 7,
        login: 'Mr2nec7',
        message:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit porro sapiente dolor aliquam veniam! Eaque cupiditate autem modi consectetur veritatis?',
        timestamp: 1610912850,
    },
    {
        messageId: 8,
        id: 8,
        login: 'Mr2nec8',
        message: 'Cras justo odio',
        timestamp: 1610912855,
    },
    {
        messageId: 9,
        id: 1,
        login: 'Mr2nec1231232132',
        message:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit porro sapiente dolor aliquam veniam! Eaque cupiditate autem modi consectetur veritatis?',
        timestamp: 1610912860,
    },
    {
        messageId: 10,
        id: 2,
        login: 'Mr2nec2',
        message:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, at.',
        timestamp: 1610913860,
    },
    {
        messageId: 11,
        id: 2,
        login: 'Mr2nec2',
        message:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit porro sapiente dolor aliquam veniam! Eaque cupiditate autem modi consectetur veritatis?',
        timestamp: 1611912860,
    },
    {
        messageId: 12,
        id: 2,
        login: 'Mr2nec2',
        message: 'Lorem ipsum dolor sit amet.',
        timestamp: 1620912860,
    },
];

export default function MainPage({
    users = usersOnline,
    messages = userMessages,
}) {
    return (
        <>
            <h1>Главная</h1>
            <div className="d-flex bd-highlight my-5 justify-content-center">
                <ChatList
                    className="flex-grow-1 bd-highlight"
                    messages={messages}
                />
                <UserList className=" bd-highlight " users={users} />
            </div>
        </>
    );
}
