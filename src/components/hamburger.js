import React from 'react'

export default function Hamburger({ openClassParent }) {

  return (

    <div className="bun">
      <div id="one" className={'fixings ' + openClassParent}></div>
      <div id="two" className={'fixings ' + openClassParent}></div>
      <div id="three" className={'fixings ' + openClassParent}></div>
    </div>

  )
}