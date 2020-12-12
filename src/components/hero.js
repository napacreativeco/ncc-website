import React from "react"

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import HeroImage from "../images/hero-collection.jpg"
import Diamond from "../images/ncc-diamond.svg"


class Hero extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: 'false'
    };
  }

  componentDidMount() {
    const preLoader = document.querySelector(".preloader");
    const img = document.querySelector("img");

    setTimeout(function() {
      preLoader.style.display = "none"
    }, 1500)

    img.onload =() => {
     this.setState({ visible: 'true' })
    };
  }

  render() {
    return (
      <div className="hero">
        <div className="row">
          <div className="image">
            <Zoom delay={1000}>
              <img src={HeroImage} alt="Napa Creative Co" style={{ width: '100%' }} />
            </Zoom>
          </div>
          <div style={{ textAlign: 'center', padding: '0px 0px 40px 0px' }}>
            <Fade bottom delay={500}>
              <img src={Diamond} alt="Napa Creative Co" style={{ width: '100px'}} />
            </Fade>
          </div>
        </div>
        <div className="row intro" style={{ paddingTop: '80px', paddingBottom: '80px', borderBottom: '1px solid #eaeaea' }}>
          <Fade bottom duration={1000} delay={500}>
            <p className="hero-subtitle">welcome</p>
            <h1 className="hero-title">We are an independent digital agency focused On Web & Graphic Design solutions for Brands that strive to Stand Out.</h1>
          </Fade>
        </div>
      </div>
      )
  }
}

export default Hero
