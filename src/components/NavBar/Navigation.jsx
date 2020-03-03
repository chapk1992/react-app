import React from 'react';
import na from './Navigation.module.css'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className={na.nav}>
            <div className={na.Nav_list}>
                <NavLink to='/profile' activeClassName={na.active}>Profile</NavLink>
            </div>
            <div className={na.Nav_list}>
                <NavLink to='/dialogs' activeClassName={na.active}> Messages</NavLink>
            </div>
            <div className={na.Nav_list}>
                <NavLink to='/news' activeClassName={na.active}>News</NavLink>
            </div>
            <div className={na.Nav_list}>
                <NavLink to='/music' activeClassName={na.active}>Music</NavLink>
            </div>
            <div className={na.Nav_list}>
                <NavLink to='/settings' activeClassName={na.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;