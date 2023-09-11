import React from 'react'

const NewsRoom = () => {
  return (
    <div className='m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 w-full h-[450px] bg-green-300 w-screen'>

<div className='flex flex-col w-full h-full py-5'>
<h2 className=' md:text-2xl font-bold'>Fine Interior Rooms</h2>
<p className='text-base py-6'>Here are all the available border color logical property utilities and their physical property equivalents in both LTR and RTL modes.</p>
</div>

        <div className='grid grid-cols-2 grid-rows-6 h-[80vh] px-2'>
        <img className='row-span-3 object-cover w-full h-full p-1'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-djvwAmt438WjtUnPusmHgoyowQQbU8NNB1bSrgI&s' 
        alt=''/>
        <img className='row-span-6 object-cover w-full h-full p-1'
        src='https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill' 
        alt=''/>
        <img className='row-span-3 object-cover w-full h-full p-1'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzVY_NYrPEyhtTALgaDOOTFM-vrFjINZ6zSjRRv6q&s' 
        alt=''/>
        </div>


        
      
    </div>
  )
}

export default NewsRoom