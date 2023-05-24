import React, { useEffect } from 'react' ;
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function People() {

  let [Allperson, setAllperson] = useState([])

  let getAllData = async ()=>{
    let {data} = await axios.get("https://api.themoviedb.org/3/trending/person/day?api_key=c5e1d1bc33e817750cc4aeba6192e9f0") ;
    setAllperson(data.results);
    console.log(data.results)
  }

  useEffect(()=>{
    getAllData();
  } , [])


  return <>
        <div className='allperson '>
          <div className="row g-3">
              {Allperson.slice(0,10).map((person , index)=>(
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                    <Link className='nav-link' >
                      <img className='w-100 item_col' src={"https://image.tmdb.org/t/p/original/"+person.profile_path}  alt="" />
                      <div className="item position-relative">
                                <div className=' '> 
                                  <h5 className='people_name'> {person.title} {person.name} </h5>
                                </div>
                      </div>
                      </Link>
                  </div>
              ))}
          </div>
        </div>
  </>
}

//  to={`/details/${person.media_type}/${person.id}`}