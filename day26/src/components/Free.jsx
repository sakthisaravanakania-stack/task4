 import React from 'react'
import FreeImg from './free.jpeg'
import ProImg from './pro.jpeg'
import Business from './business.jpeg'

 const Free = () => {
   return (
       <div className='free'>
           <div className='free-content'>
               <img src={FreeImg} alt="" />
               <img src={ProImg} alt="" />
               <img src={Business} alt="" />
           </div>
     </div>
   )
   }

 export default Free