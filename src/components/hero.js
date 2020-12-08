import React from "react"

import Fade from 'react-reveal/Fade';
import HeroImage from "../images/hero-collection.jpg"
import Diamond from "../images/ncc-diamond.svg"

export default function Hero() {


    return (
    <div className="hero">
      <div className="row">
        <div className="image">
          <Fade bottom duration={900}>
            <img src={HeroImage} alt="Napa Creative Co" style={{ width: '100%' }} />
          </Fade>
        </div>
        <div style={{ textAlign: 'center', padding: '0px 0px 40px 0px' }}>
          <Fade bottom duration={900} delay={1000}>
            <img src={Diamond} alt="Napa Creative Co" style={{ width: '100px'}} />
          </Fade>
        </div>
      </div>
      <div className="row intro" style={{ paddingTop: '80px', paddingBottom: '80px', borderBottom: '1px solid #eaeaea' }}>
        <Fade bottom duration={900} delay={2000}>
          <p className="hero-subtitle">welcome</p>
          <h1 className="hero-title">We are an independent digital agency focused On Web & Graphic Design solutions for Brands that strive to Stand Out.</h1>
        </Fade>
      </div>
    </div>
    )


}
