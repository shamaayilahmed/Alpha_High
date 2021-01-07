import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

import Button from '@material-ui/core/Button';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHt = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContRef.current.style.height = `${linksHt}px`
    } else {
      linksContRef.current.style.height = `0px`
    }
  }, [showLinks])
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" className='logo' />
          <Button variant="contained" color="default" className='btn' href='#events'>
            #AlphaFair
      </Button>
          <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}><FaBars /></button>

        </div>

        <div className='links-container' ref={linksContRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return <li key={id}>
                <a href={url}>{text}</a>
              </li>
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((link) => {
            const { id, url, icon } = link;
            return <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          })}
        </ul>
      </div>
    </nav >
  )
}

export default Navbar
