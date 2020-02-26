import React from 'react';
import na from './Navigation.module.css'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className={na.nav}>
            <div className={na.Nav_list}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={na.Nav_list}>
                <NavLink to='/dialogs'> Messages</NavLink>
            </div>
            <div className={na.Nav_list}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={na.Nav_list}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={na.Nav_list}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;