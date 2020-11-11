import React from 'react';
import {Link} from 'gatsby';
import style from './nav.module.css';
export default function NavBar() {
    return(
        <div className={style.navbar}>
            <Link to="/">Home</Link><br></br>
            <Link to="/contact">Contact</Link><br></br>
            <Link to="/about">About</Link>
        </div>
    )
}