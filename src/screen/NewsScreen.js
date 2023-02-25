import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsItem from '../components/NewsItem'
import SearchBox from '../components/SearchBox'
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'




const apiKey = process.env.REACT_APP_API_KEY

const NewsScreen = () => {

  const [data, setData] = useState(null)

  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState("");
  const instance = axios.create({
    baseURL: `https://newsapi.org/v2`,
    headers: {
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  });

  useEffect(() => {
    instance.get(`/top-headlines?country=in&apiKey=${apiKey}`)
      .then((res) => {
        console.log(res.data)
        setIsLoading(false)
        return setData(res.data)
      }
      )
  }, [])

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }
  const searchNews = (event) => {
    instance.get(`/everything?q=${query}&apiKey=${apiKey}`)
      .then((res) => {
        console.log(res.data)
        setIsLoading(false)
        return setData(res.data)
      }
      );
  }


  return (
    <div className='max-w-screen'>

      <Navbar />
      <div className="min-h-screen bg-slate-800">
        <div className="items-center justify-center flex p-6">
          <SearchBox onInputChange={handleInputChange} onButtonClick={searchNews}/>


        </div>
        {
          data ? (data.articles.map((data, i) => {
            return (
              <NewsItem key={i} img={data.urlToImage} url={data.url} title={data.content} description={data.description} publishedAt={data.publishedAt} name={data.source.name} />
            )
          })) : (
            <div className="flex justify-center items-center">
              <Loading/>
            </div>
          )
        }
      </div>

    </div>

  )
}

export default NewsScreen