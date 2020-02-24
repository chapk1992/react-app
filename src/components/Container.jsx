import React from 'react';
import con from './modules/Container.module.css'

const Container = () => {
    return (
        <div className={con.container}>
            <img className={con.Img_Profile} src='https://upload.wikimedia.org/wikipedia/en/thumb/6/63/IMG_%28business%29.svg/1200px-IMG_%28business%29.svg.png' />
            <div>
                ava + description
            </div>
            <div>
                   My posts
            </div>
            <div>
                   New posts  
            </div>
            <div>
                  post 1
            </div>
            <div>
                  post 2
            </div>
        </div>

    )
}

export default Container;