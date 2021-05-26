import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from './Button'
import './Footer.css'

function Footer() {
    return (
       <>
     <div  className='footer-container'>     
    <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About us</h2>
                <Link to='/about' >About</Link>
                <Link to='/contact-us' >Contact us</Link>
                <Link to='/' >New</Link>
            </div>
            <div className='footer-link-items'>
                <h2>Links</h2>
                <Link to='/services' >Services</Link>
                <Link to='/products' >Products</Link>
                <Link to='/sign-up' >Sign-up</Link>
            </div>
        </div>
        </div>  
        <section className='footer-subscription'>
    <p className='footer-subscription-heading'>
        Join to receive adventures news
    </p>
    <div className='input-areas'>
        <form>
            <input type='email' name='email' placeholder='your email' className='footer-input' />
            <Button buttonstyle='btn--outline'>Subscribe</Button>
        </form>
    </div>
    <p className='footer-subscription-text'>
        You can unsubscribe at any time
    </p>
    </section>    
        </div>
        </>
    )
}

export default Footer
