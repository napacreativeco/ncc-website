import React from "react"
import './Hero.css';

import Fade from 'react-reveal/Fade';


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
