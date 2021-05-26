import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css'


function HeroSection() {
    return (
        <div className='hero-container'>
            <img src='home.jpg' alt='home' />
            <h1>Maverick buids</h1>
            <div className='hero-btns'>
                <Button className='btns' buttonstyle='btn--outline' buttonSize='btn--large'>
                    Lets go
                </Button>
                <Button className='btns' buttonstyle='btn--primary' buttonSize='btn--large'>
                    OOh
                </Button>
            </div>
            
        </div>
    )
}

export default HeroSection
