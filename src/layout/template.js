import Header from "../module/header.js";
import { Outlet } from 'react-router-dom';

function Template() {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <footer>©All rights reserved</footer>
        </div>
    )
}

export default Template;