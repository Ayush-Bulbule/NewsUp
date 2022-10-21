import React, { useEffect,useState } from 'react'
import axios from 'axios'
import NewsItem from '../components/NewsItem'
import SearchBox from '../components/SearchBox'


const NewsScreen = () => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9f20b8ebd7644893be19ad62e1232cb9")
        .then((res)=>{
                console.log(res.data)
                setIsLoading(false)
                return setData(res.data)
            }
            )
    }, [])
    
  return (
    <>
    <h1 className="mt-8 text-center text-4xl font-[roman] ">THE ECONOMIC TIMES | <span className='font-[roman] text-3xl font-semibold'>News</span> </h1>
    <SearchBox/>
    {
        isLoading?<h1>Loading.....</h1>:
        data.articles.map((news)=>{
            return <NewsItem title={news.title} description={news.description} img={news.urlToImage}/>
        })
    }
    <NewsItem/>


  </>
  )
}

export default NewsScreen