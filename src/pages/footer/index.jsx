import React from 'react'
import './style.scss'

const Footer = ({ date }) => {
  return (
    <div className={'footer'}>
      <span className={'footer__text'}>hello {date}</span>
      <div></div>
    </div>
  )
}
export default Footer
