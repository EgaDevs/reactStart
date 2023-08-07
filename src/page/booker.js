import ListBook from "../module/listBook";
import { useState } from 'react';

function Booker() {
    const [listBook, setListBook] = useState([
        {
            id: 1,
            name: 'Financier',
            author: 'Theodore Dreiser',
            year: 1912,
            status: 'given',
        },
        {
            id: 2,
            name: 'Titan',
            author: 'Theodore Dreiser',
            year: 1912,
            status: 'given',
        },
        {
            id: 3,
            name: 'Stoic',
            author: 'Theodore Dreiser',
            year: 1912,
            status: 'given',
        },
    ])

    return (
        <div>
            <h1>This page has been created for Booker</h1>
            <ListBook listBook={listBook} setListBook={setListBook}/>
        </div>
     );
}

export default Booker;