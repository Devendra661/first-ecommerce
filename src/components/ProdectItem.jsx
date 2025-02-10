
import React, { useEffect, useState } from 'react'

export default function ProdectItem({pData}) {
    console.log(pData);
    
 
    return (
        <div  className='text-center shadow-lg pt-7'>
        <img  src={pData.thumbnail} className='w-100 h-[200px]'/>
            <h4 className='text-[20px] font-[500] mt-2'>{pData.
title}</h4>
            <p className='mx-1 text-[17px]'>${pData.price}</p> 
            
        </div>
    )
}
