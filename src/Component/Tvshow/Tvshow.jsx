import React, { useEffect } from 'react' ;
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Tvshow() {

  let [Alltv, setAlltv] = useState([])

  let getAllData = async ()=>{
    let {data} = await axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=c5e1d1bc33e817750cc4aeba6192e9f0") ;
    setAlltv(data.results);
    console.log(data.results)
  }

  useEffect(()=>{
    getAllData();
  } , [])

  return <>
        <div className='alltv'>
      <div className="row g-3">
          {Alltv.slice(0,10).map((tv , index)=>(
              <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                <Link className='nav-link' to={`/details/${tv.media_type}/${tv.id}`} >
                <img className='w-100 item_col' src={"https://image.tmdb.org/t/p/original/"+tv.poster_path} alt="" />
                  <div className="item position-relative">
                            <div className='d-flex justify-content-between align-items-center '> 
                              <h6 className='mt-2 text-center'> {tv.title} {tv.name} </h6>
                              <span> <i class="fa-solid fa-star"></i> {tv.vote_average.toFixed(1)} </span>
                            </div>
                  </div>
                </Link>
              </div>
          ))}
      </div>
    </div>
  </>
}
