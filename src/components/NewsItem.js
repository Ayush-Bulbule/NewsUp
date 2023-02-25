import React from 'react'
import thumbnail from '../assets/news_thumbnail.jpg'

const NewsItem = (props) => {
  return (
    <div class="xl:mx-44 mt-2 px-2 mx-5 md:mx-10 lg:mx-36 text-gray-200 bg-slate-900" >
      <a href={props.url} className="flex flex-row items-start space-x-5" target="_blank">
        <img src={props.img ? props.img : thumbnail} className="img lg:w-2/6 py-5 w-32 md:w-40 object-cover rounded-lg max-h-52" alt="" />
        <div className="info flex flex-col w-4/6 py-3">
          <h5 className='lg:text-2xl text-sm md:text-lg font-bold font-serif cursor-pointer line-clamp-2'>{props.title}</h5>
          <p className='lg:text-sm text-xs text-gray-300 line-clamp-2'>{props.description}</p>
          {
          props.name ?
            <div className="flex text-gray-300 text-xs items-center justify-between">
              <p className="pr-3">Source: <span className="font-semibold">{props.name}</span></p>
              <p className=''>{props.publishedAt}</p>
            </div> 
            : null}
        </div>
      </a>
    </div>
  )
}

export default NewsItem