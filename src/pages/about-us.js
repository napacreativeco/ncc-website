import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About Us" />

    <div className="about-container">
      <div className="cell left">
        <img src="" alt="Napa Creative Co." />
      </div>
      <div className="cell right">
        <div><h1>About Us</h1></div>
        <div><p className="intro">"We are an Independent Design Agency focused On Web &amp; Graphic Design Solutions for Brands and Companies that strive to Stand Out"</p></div>
        
        <div><p>But, what does that mean? We create fast and functional websites, captivating sales collateral and marketing materials that will leave a lasting impression on your viewers. </p></div>

        <div><p><strong>Graphic Design</strong> We utilize the latest tools to create pixel perfect Designs, Logos, Layouts and Promotional materials that look great on all formats</p></div>

        <div><p><strong>Web Development</strong> Our projects are focused on maximum compatibility. The code we write is secure, tested and performs on all modern browsers. No experimental frameworks or complicated build tools. </p></div>

        <div><p><strong>Advertising</strong> There are many ways to get the word out there, but you can’t expect results over night. Marketing is a practice that requires research and repetition. We can help you form a strategy that will truly spread the word about your business.</p></div>
      </div>
    </div>

    <div className="back-to-home"><Link to="/">Back to home</Link></div>
  </Layout>
)

export default SecondPage