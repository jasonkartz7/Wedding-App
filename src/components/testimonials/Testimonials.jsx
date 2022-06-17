import React from 'react'
import '../testimonials/testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
            <h5 className="client_name">Ernest Achiever</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate!
            </small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
            <h5 className="client_name">Ernest Achiever</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate!
            </small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
            <h5 className="client_name">Ernest Achiever</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate!
            </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials