import React from 'react'
import thumbnail from '../assets/news_thumbnail.jpg'

const NewsItem = (props) => {
  return (
    <a href={props.url} className="flex flex-row items-start py-3 space-x-5 xl:mx-44 mt-2 px-2 mx-5 md:mx-10 lg:mx-36 text-gray-200 bg-slate-900" >
      <img src={props.img ? props.img : thumbnail} className="img lg:w-2/6 w-32 md:w-40 object-cover rounded-lg max-h-48" alt="" />
      <div className="info flex  flex-col w-4/6">
        <h5 className='lg:text-2xl text-sm md:text-lg font-bold font-serif cursor-pointer line-clamp-2'>{props.title}</h5>
        <p className='lg:text-sm text-xs text-gray-300 line-clamp-2'>{props.description}</p>
        {
          props.name ?
            <div className="flex align-bottom text-gray-300 text-xs items-center justify-between">
              <p className="pr-3">Source: <span className="font-semibold">{props.name}</span></p>
              <p className=''>{props.publishedAt}</p>
            </div>
            : null}
      </div>
    </a>
  )
}

export default NewsItem