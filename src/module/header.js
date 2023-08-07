import { Link } from 'react-router-dom';
import style from "../style/header.module.css"

function Header() {
    return (
        <div>
            <div className={style.header}>
                <Link className={style.links} to="/">home</Link>
                <br/>
                <Link className={style.links} to="/booker">booker</Link>
                <br/>
                <Link className={style.links} to="/users">users</Link>
                <br/>
                <Link className={style.links} to="/lease">lease</Link>
                <br/>
                <Link className={style.links} to="/leased">leased</Link>
            </div>
        </div>
     );
}

export default Header;