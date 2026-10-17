import React from 'react'
import BenifitImg from './benifit.jpeg'
const Benifit = () => {
  return (
      <>
          <div className='benifit'>
              <div className='benifit-content'>
                  <h3>What  Benifit Will <br />
                      You Get</h3>
                  
                  <p>Free Consulting With Expert Saving Money</p>
                  <p>Online Banking</p>
                  <p>Invesment Report Every Month</p>
                  <p>Saving Money For The Future</p>
                  <p>Online Transection</p>
              </div>

              <div className='benifit-image'>
                  <img src={BenifitImg} alt="" />
              </div>
          </div>
      </>
  )
}

export default Benifit
