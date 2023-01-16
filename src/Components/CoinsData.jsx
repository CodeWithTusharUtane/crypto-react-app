import React from 'react'
import CoinsItems from './CoinsItems';

const CoinsData = (props) => {
  return (
    <>
    
    <div className='w-screen h-full bg-black/80'>
            
    <h1 class="text-4xl py-4 border-2 font-bold text-center text-amber-300 drop-shadow-lg xl:m-auto">Get Crypto Details</h1>
    <div className='text-white text-xl px-2 capitalize pt-4 pb-4 xl:text-center'>
        click here to get full Details about the Currency 👇
    </div>

      {
        props.coins.map(coins=>{
            
            return(
                <>
                    <CoinsItems coins={coins} />
                </>
            )
        })
    }


</div>
    </>
    
  )
}

export default CoinsData
