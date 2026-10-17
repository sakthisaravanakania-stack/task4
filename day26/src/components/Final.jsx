import React from 'react'
import FinalImg from './last.jpeg'

const Final = () => {
  return (
      <div className='final'>
          <div className='final-first'>
              <h2>People are Saying <br />
                  About DoWhith</h2>
              
              <p>Everything you need to accept to payment and grow <br />
                  your money of manage anywhere on planet</p>
              
              <h3>I am very helped by this E-wallet application, my <br />
                  days are very sasy to use this application and its very <br />
                  helpful in my ite, even I can pay a short time</h3>
              
              <h5>_ Aria  Zinanrio</h5>
              </div>

              <div className='bottom'>
                  <h1>Biccas</h1>
              <p>Get started noew try our product</p>
              
              <input type="text" placeholder='Enter your email here' />

              <h3>@ 2022 Biccas inc. Copyright and rights reserved</h3>
              </div>
         
          <div className='right'>
              <img src={FinalImg} alt="" />
          </div>

          <div className='support-main'>
              <h2>Support</h2>
              <p>Help centre</p>
              <p>Account information</p>
              <p>About</p>
              <p>Contact us</p>
          </div>

          <div className='Help-main'>
              <h2>Help and Solution</h2>
              <p>Talk to support</p>
              <p>Support docs</p>
              <p>System status</p>
              <p>Cavid responde</p>
          </div>


          <div className='Product'>
              <h2>Product</h2>
              <p>Update</p>
              <p>Security</p>
              <p>Beta test</p>
              <p>Pricing product</p>
          </div>
    </div>
  )
}

export default Final