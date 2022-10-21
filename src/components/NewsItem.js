import React from 'react'

const NewsItem = (props) => {
  return (
<div class="xl:mx-44 mx-5 md:mx-10 lg:mx-36" >   
  <div className="flex flex-row space-x-5">  
      <div className="img lg:w-2/6 py-5 w-32 md:w-40 " ><img src={props.img} className="rounded-lg " alt="" /></div>
      <div className="info flex flex-col w-4/6 " >
        <h5 className='pt-4 lg:text-2xl text-sm md:text-lg font-bold font-serif cursor-pointer'>{props.title}</h5>
        <p className='lg:pt-4 lg:text-xl'>{props.description}</p>
      </div>
  </div>
</div>      
  )
}

export default NewsItem