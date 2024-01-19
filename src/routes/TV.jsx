import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Item from '../components/Item';

export default function TV() {
  const [lists, setLists] = useState([])
  const [page, setPage] = useState(1);

  useEffect(()=>{
    fetchDate()
  }, [])

      const fetchDate = (pageNumber = 1) => {
        const url = `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=${pageNumber}`;
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
        console.log(json)
        setLists(prev => [...prev, ...json.results])
      })
      .catch(err => console.error('error:' + err));
      }
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage)
    fetchDate(nextPage)
  }

  return (
    <Layout>
      <div className="w-full flex flex-col items-center justify-center py-16">
          <div className="w-[1000px] flex justify-center flex-wrap gap-4 gap-y-8">
            {/* item */}
            {lists?.map((list)=>(
              <Item list = {list} />
            ))}  

            {/* Load More */}
            <div
            onClick={handleLoadMore} 
            className="w-[97%] py-3 bg-[#01B4E4] text-white font-semibold text-center
            hover:text-black cursor-pointer">Load More</div>
                      
          </div>          
        </div>
    </Layout>
  )
}
