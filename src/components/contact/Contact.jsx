import React from 'react'
import '../contact/contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>dummy@gmail.com</h5>
            <a href="mailto:dummy@gmail.com" target= "_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>testing</h5>
            <a href="https://m.me/jasonkartz" target= "_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+60123456789</h5>
            <a href="https://api.WhatsApp.com/send?phone=6587520417" target= "_blank">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="rmail" name='email' placeholder='Your Email' required />
          <textarea type="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact