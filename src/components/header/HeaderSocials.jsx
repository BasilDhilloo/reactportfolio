import React from 'react'
import './header.css'
import { BsLinkedin, BsGithub, BsDribbble } from "react-icons/bs"


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/" target="_blank">< BsLinkedin /></a>
            <a href="https://www.github.com/" target="_blank"> <BsGithub /></a>
            <a href="https://www.dribble.com/" target="_blank"> <BsDribbble /></a>
        </div>
    )
}

export default HeaderSocials