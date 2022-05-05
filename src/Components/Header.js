import React from 'react'
import './Header.css'

export default ()=>{
    return(
        <header>
            <div className='Header-- logo'>
                <a href='/'>
                    <img src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo.png' alt='logo!'></img>
                </a>
            </div>
            <div className='Header--user'>
            <a href='/'>
                <img src='https://www.pngplay.com/wp-content/uploads/12/Naruto-PNG-Photo-Image.png' alt='usuario'/>
            </a>
            </div>
        </header>
    )
}