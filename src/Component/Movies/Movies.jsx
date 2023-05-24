import React, { useEffect } from 'react' ;
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Movies() {

  let [AllMovies, setAllMovies] = useState([])

  let getAllData = async ()=>{
    let {data} = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=c5e1d1bc33e817750cc4aeba6192e9f0") ;
    setAllMovies(data.results);
    console.log(data.results)
  }

  useEffect(()=>{
    getAllData();
  } , [])


  return <>
      <div className='allMovies'>
      <div className="row g-3">
            {AllMovies.slice(0,10).map((movies , index)=>(
                      <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                      <Link className='nav-link' to={`/details/${movies.media_type}/${movies.id}`} >
                      <img className='w-100 item_col' src={"https://image.tmdb.org/t/p/original/"+movies.poster_path} alt="" />
                        <div className="item position-relative">
                            <div className='d-flex justify-content-between align-items-center '> 
                              <h6 className='mt-2 text-start'> {movies.title} {movies.name} </h6>
                              <span> <i class="fa-solid fa-star"></i> {movies.vote_average.toFixed(1)} </span>
                            </div>
                        </div>
                      </Link>
                      </div>  
              ))}
      </div>
    </div>
  </>
}



// <span className='rateAverag'> {movies.vote_average.toFixed(1)} </span> 