

import React from 'react'

const Items = ({dataItem , handlerButton}) => {
     const {id, name, image, salary, age,role,twitter,fbUrl, country} = dataItem;
    
    
     return (
        
        <>

           <div className='border  bg-white/10 border-white/30 rounded-xl backdrop-blur-sm bg-pink/200  text-center px-0 py-5 text-white'>

              <div className=' space-y-4'>
              <img className='rounded-full z-30 mx-auto border w-1/3' src={image} alt="" />
             <p className='font-semibold text-xl'>{name}</p>
             <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             {/* salary roles  */}
             <div className='flex justify-around'>
               <p className='font-semibold'> Salary : {salary}</p>
               <p className='text-cyan-500 font-semibold text-sm'>{role}</p>
             </div>
             {/* end role salarary  */}
             <button onClick={() => handlerButton(dataItem)} className='border border-teal-600 font-light text-sm rounded-lg py-1  px-5'>Select</button>
              </div>

            </div> 
         
         
         </>
    )
}

export default Items