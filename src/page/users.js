import ListUsers from "../module/listUsers";
import { useState } from 'react';
import style from '../style/modal.css';

function Users() {
    const [listUser, setListUser] = useState([
        {
            id: 1,
            user: 'Alex',
            
            name: 'Financier',
            books:[],
        },
        {
            id: 2,
            user: 'Steve',
            name: 'Titan',
            books:[],
        },
        {
            id: 3,
            user: 'John',
            name: 'Stoic',
            books:[],
        },
    ])

    return (
        <div>
            <h1>This page has been created for Users</h1>
            <ListUsers listUser={listUser}/>
        </div>
     );
}

export default Users;