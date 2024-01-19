import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useLocation } from 'react-router-dom'

export default function Search () {
  const [data, setData] = useState()
  const location = useLocation();
  // console.log(location.search)
  const search = new URLSearchParams(location.search);
  const keyword = search.get("keyword")
  // console.log(keyword) // input 창에 입력한 값만 출력되는 것을 확인할 수 있음
  useEffect(()=>{
    const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmMwM2Q1ZWMxMmUzZTBhZjFmMGE5ZDI4NGNjYWVkOCIsInN1YiI6IjY1OWRmNWMwMWQzNTYzMDBlZWU5NDIxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YrTanxjWZbWXMLQWgSPcDb3oM6vVgTsEVlkpACS-zqA'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        setData(json)
        console.log(json)
      })
      .catch(err => console.error('error:' + err));
  }, [])
  return (
    <Layout>
      <div className="w-full flex justify-center py-16">
        <div className="w-[1200px] h-64 bg-red-200">
          Search Page
        </div>
      </div>
    </Layout>
  )
}
