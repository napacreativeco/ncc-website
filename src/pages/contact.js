import React from "react"
import { Link } from "gatsby"
import MyForm from '../components/contactForm'
import '../components/contact.css'

import Layout from "../components/layout"
import SEO from "../components/seo"



function ContactUs() {

  return (
    <Layout>


    <SEO title="Contact us" />

    <div className="contact-container">
      <div style={{  width: '85%', maxWidth: '600px', margin: '0px auto 40px auto'}}>
        <h2>Contact us <span>Get a quote for your project</span></h2>
      </div>
      <div className="contact-form">
        <MyForm />
      </div>
    </div>

    <div className="back-to-home"><Link to="/">Back to home</Link></div>
  </Layout>

  )

}

export default ContactUs
