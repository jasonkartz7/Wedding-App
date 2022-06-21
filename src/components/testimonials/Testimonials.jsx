import React from 'react'
import '../testimonials/testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <article key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} />
              </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">
                  {review}
                </small>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials