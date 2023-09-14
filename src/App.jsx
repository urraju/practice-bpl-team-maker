 
import { useState } from 'react'
import Card from './Components/Card/Card'
import Fetch from './Components/Fetch'
import Alert from './Components/Alert'
 
 

function App() {

  const [buttonItem , setButtonItem] = useState([])
  const [count, setCount] = useState(0)
  const [remaning, setRemaning] = useState(0)
  const budget = 30000;
  const handlerButton = (actor) => {
    let count = actor.salary;
    console.log(count);
    const isTrue = buttonItem.find(item => item.id === actor.id)
     
    if(isTrue){
        alert('You Have Already Selected')
    }else{

      buttonItem.forEach(item => {
        count += item.salary;
      })
      setCount(count)
      const remaningCost = budget - count;

      if(count > budget){
        alert('You Have Not Enough Money')
      }else{

        setRemaning(remaningCost)
        setButtonItem([...buttonItem, actor])
      }
       
    }
    
  }
   
  return (
    <>
       <div>

       <div className=' mt-20 flex flex-col w-9/12 mx-auto lg:flex-row md:flex-row md:gap-12 lg:gap-36   justify-between'>
        
        <Fetch handlerButton = {handlerButton} />
        <Card buttonItem ={buttonItem} count ={count} remaning ={remaning} />

       </div>

       </div>
    </>
  )
}

export default App
