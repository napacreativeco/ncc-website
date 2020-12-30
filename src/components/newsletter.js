import React from 'react'
import Mailchimp from 'react-mailchimp-form'

// Action URL: https://napacreativeco.us7.list-manage.com/subscribe/post?u=2c8cc088068b21be598d7481e&amp;id=45a996891e
export default function Newsletter() {

  const Container = {
    background: '#484848',
    color: '#fefefe',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (

    <div className="newsletter" style={Container}>

      <div className="cell">
        <h2 style={{ color: '#eaeaea', margin: '0px' }}>Newsletter</h2>
        <p style={{ color: '#fefefe', margin: '0px' }}>Sign up to get updates on our Services and other cool projects from us and friends</p>
      </div>

      <div className="cell">
        <Mailchimp
          action='https://napacreativeco.us7.list-manage.com/subscribe/post?u=2c8cc088068b21be598d7481e&amp;id=45a996891e'
          fields={[
            {
              name: 'EMAIL',
              placeholder: 'Email',
              type: 'email',
              required: true
            }
          ]}
        />
      </div>
    </div>

  )
}