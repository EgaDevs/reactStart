import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import Template from "../layout/template.js";
import Booker from '../page/booker.js';
import Users from '../page/users.js';
import Home from '../page/home.js';
import Leased from '../page/leased.js';
import Lease from '../page/lease.js';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Template/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/booker" element={<Booker/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/leased" element={<Leased/>}/>
                <Route path="/lease" element={<Lease/>}/>
            </Route>
        </>
    )
)

export default router;