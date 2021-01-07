import React from 'react'
import image from './vasily-koloda-8CqDvPuo_kI-unsplash.jpg'
import sli1 from './albany-capture-1sejdUIU3sw-unsplash.jpg'
import sli2 from './neonbrand-zFSo6bnZJTw-unsplash.jpg'
import sli3 from './ousa-chea-gKUC4TMhOiY-unsplash.jpg'

import MuiImageSlider from 'mui-image-slider';

import { Button, ButtonGroup } from '@material-ui/core';

import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

import logo from './ahlogo.png'
const Home = () => {
  const images = [
    sli1,
    sli2,
    sli3
  ];

  return (
    <div className='home' id='home'>
      <div className="main-img">
        <img src={image} alt="" />
        <div className="overlay">
          <h1>The Alpha High</h1>
          <p>We are a public school that welcomes any student interested in exploring the fields of science, technology, engineering and math.</p>
        </div>
      </div>

      <div className="slider">
        <h2>Featured</h2>
        <div className="features">
          <p>2020 College Success Award</p>
          <p>Photos: $25 Facility dedication</p>
          <p>Science Fair 2020 Results</p>
        </div>

        <div className="slide">
          <MuiImageSlider images={images}
            classes />
        </div>
      </div>

      <div className="events" id="events">
        <div className="date">
          <h2>Events</h2>
          <ButtonGroup variant='contained'>
            <Button color="default"> <i>12 JAN</i>  2020 Science Fair Awards </Button>
            <Button color="primary"><i>18 JAN</i>  Virtual Learning Week </Button>
            <Button color="secondary"><i>30 JAN</i>  Report Card Reveal </Button>
          </ButtonGroup>
        </div>
        <div className="news">
          <h2>NEWS</h2>
          <h4>Chamber Chat: Semester 3
          </h4>
          <p>December 30, 2020</p>
          <h4>Meet: EmmaAI from India </h4>
          <p>December 3, 2020</p>
          <h4>Dismissal Report</h4>
          <p>December 18, 2020</p>
        </div>
      </div>

      <div className="openhouse" id='pta'>
        <h1>Virtual Open House for Prospective Students
</h1>
        <h2>Registration & Virtual Visit</h2>
        <p>
          Families interested in attending a virtual open house for prospective students must register to gain access. Complete the registration form to gain access for your family to learn more about our community. The virtual open house for prospective students will allow prospective families and students an opportunity to explore education as a Chambered Nautilus at New Orleans Charter Science & Mathematics High School.
        </p>
        <Button color="secondary" variant='contained' href='#'>REGISTER</Button>
      </div>


      <div className="covid" id="covid">
        <h1>See important changes and details for this school year in the COVID-19 Reopening Plan.</h1>
        <Button color="primary" variant='contained' href='#'>COVID-19 PLAN</Button>
      </div>


      <footer id="contact">
        <div className="alpha">
          <img src={logo} alt="" />
        </div>
        <div className="social">
          <FaTwitter href='#' />
          <FaFacebook href='#' />
          <FaLinkedin href='#' />
        </div>
        <div className="contact">
          <h3>CONTACT US</h3>
          <address>
            341 Nashville Street, LA 90012
<br />
            Phone: (402) 123-9823
            Fax: (382) 283-4037
          </address>
          <hr />
          <div className="mine">
            <h4>Website by <a href="https://shamaayilahmed.netlify.app/">ShamaayilAhmed</a></h4>
            <h5>Alpha High School |
              &copy; 2020</h5>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
