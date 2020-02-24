import React from 'react';
import na from './modules/Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={na.nav}>
            <div className={na.Nav_list}>
                <a>Profile</a>
            </div>
            <div className={na.Nav_list}>
                <a> Messages</a>
            </div>
            <div className={na.Nav_list}>
                <a>News</a>
            </div>
            <div className={na.Nav_list}>
                <a>Music</a>
            </div>
            <div className={na.Nav_list}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navigation;