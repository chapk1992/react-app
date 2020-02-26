import React from 'react';
import con from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <img className={con.Img_Profile} src='https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png' />
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>

    )
}

export default Profile;