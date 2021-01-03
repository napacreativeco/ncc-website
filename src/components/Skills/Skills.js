import React from 'react'
import './Skills.css';
import Design from '../../images/design.svg';
import Code from '../../images/code.svg';
import Identity from '../../images/identity.svg';

// Action URL: https://napacreativeco.us7.list-manage.com/subscribe/post?u=2c8cc088068b21be598d7481e&amp;id=45a996891e
export default function Skills() {

  return (

    <div className="skills">

      <div className="cell" style={{ borderRight: '2px dashed #eaeaea' }}>
        <img src={Design} alt="Web Design" style={{ width: '55px' }} />
        <h2>Web Design</h2>
        <p>We design beautiful websites that feel great to use</p>
      </div>

      <div className="cell" style={{ borderRight: '2px dashed #eaeaea' }}>
        <img src={Code} alt="Web Development" style={{ width: '55px' }} />
        <h2>Web Development</h2>
        <p>We can code websites, web apps and eCommerce experiences that work well on all devices</p>
      </div>

      <div className="cell">
        <img src={Identity} alt="Branding and Graphic Design" style={{ width: '55px' }} />
        <h2>Brand & Graphics</h2>
        <p>We can help create a meaningful identity for your brand with rich content and awesome aesthetics</p>
      </div>

    </div>

  )
}