

import React, { useEffect, useState } from 'react'
import Items from './Cards/Items'

const Fetch = ({handlerButton}) => {

    const [dataFetch, setDataFetch] = useState([])

     useEffect(data => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setDataFetch(data))
        
     }, [])
    return (
        <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                dataFetch.map(dataItem => <Items 
                    key={dataItem.id}
                    dataItem = {dataItem}
                    handlerButton = {handlerButton}
                />)
            }
        </div>
    )
}

export default Fetch