
import React from 'react'
import { FaFacebook ,FaCheck } from 'react-icons/fa';

const Card = ({buttonItem, remaning, count}) => {
    
    return (
        <div className='text-white w-4/12'>
            <h1 className='mb-3 bg-gray-400 py-1 px-3 rounded text-violet-800 font-bold'>Total Actor : {buttonItem.length}</h1>
            
            
            {
                buttonItem.map((actor,count) => (
                     
                        
                     <div key={actor.id} className='flex py-1 backdrop-blur-md justify-between border gap-4 mb-4  items-center rounded-lg   px-3'>
                        <img className='w-12 border border-cyan-500 rounded-full' src={actor.image} alt="" />
                        <p className='text-sm font-semibold' key={actor.id}>{actor.name}</p> 
                         
                         <p>{<FaCheck/>}</p>
                         
                          
                     </div>
                    
                     
              ) )
              
             }
            
             <h1  className='mb-3  backdrop-blur-sm bg-white/25 py-1 px-3 rounded text-cyan-400 font-semibold'>Remaning : {remaning} </h1>
            <h1 className='mb-3  backdrop-blur-sm bg-white/25 py-1 px-3 rounded text-cyan-400 font-semibold'>Total Cost : {count} </h1>
        </div>
    )
}

export default Card