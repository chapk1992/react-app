import React from 'react';
import post from './MyPosts.module.css'
import Post from './posts/Post';

const MyPosts = () => {
    return (
        <div className={post.MyPosts}>
            <div>
                My posts
            <div>
                New posts
            </div>
          <Post /> 
            </div>

        </div>

    )
}

export default MyPosts;