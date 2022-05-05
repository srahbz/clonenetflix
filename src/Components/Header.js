import React from 'react'
import './Header.css'

export default ({black})=>{
    return(
        <header className={black ? 'black': ''}>
            <div className='Header--logo'>
                <a href='/'>
                    <img src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo.png' alt='logo!'></img>
                </a>
            </div>
            <div className='Header--user'>
            <a href='/'>
                <img src='https://mundopng.files.wordpress.com/2017/03/naruto-rasenganc2b2.png?w=511&h=499' alt='usuario'/>
            </a>
            </div>
        </header>
    )
}