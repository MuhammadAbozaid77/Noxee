import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


export default function Details() {

    let params = useParams();
    let [DataDetails, setDataDetails] = useState({})

    let detailsFun = async ()=> {
        let {data} = await axios.get(`https://api.themoviedb.org/3/${params.mediaType}/${params.id}?api_key=c5e1d1bc33e817750cc4aeba6192e9f0`);
        setDataDetails(data);
        console.log(data)

    }

    useEffect(() => {
        detailsFun();
    }, [])
    

  return <>
          <div className='details'>
            <div className="row">
                <div className="col-md-3 px-0 rounded rounded-3  picshadow">
                    {
                        params.mediaType == "person" ? <img className='w-100 rounded rounded-3' src={"https://image.tmdb.org/t/p/original/"+DataDetails.profile_path} alt="" /> :
                        <img className='w-100 rounded rounded-3' src={"https://image.tmdb.org/t/p/original/"+DataDetails.poster_path} alt="" />
                    }
                
                </div>
                <div className="col-md-6 px-5">
                    <div className=' d-flex my-3  align-items-center'> 
                        <h2 className='fw-light my-0 fw-bold'> {DataDetails.original_title} </h2> 
                    </div>
                    <div className=' d-flex my-3  align-items-center'> 
                        <button className='btn btn-primary px-2 py-1 me-3'> Topics </button> 
                        <p className='text-white fw-light my-0'> {DataDetails.tagline} </p> 
                    </div>
                    <div className=' d-flex my-3  align-items-start'> 
                        <button className='btn btn-primary px-2 py-1 me-3'> Descripition </button> 
                        <p className='text-white fw-light my-0'> {DataDetails.overview}  </p> 
                    </div>
                    <div className=' d-flex my-3  align-items-center'> 
                        <button className='btn btn-primary px-2 py-1 me-3'> Time </button> 
                        <h5 className='text-white fw-light my-0'> {DataDetails.runtime  + " min"} </h5> 
                    </div>
                    <div className=' mt-5 '>
                        <div className="row">
                            <div className="col-md-4 text-center watch">
                                <i class="fa-solid fa-share-nodes"></i>
                                <h3 className=''> Share </h3>
                            </div>
                            <div className="col-md-8 video_play text-center">
                                <i class="fa-solid fa-play"></i>
                                <h3> Watch Video </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 px-0 rounded rounded-3  d-flex justify-content-center align-items-center picshadow flex-column">
                    <i class="download fa-solid fa-circle-down"></i>
                    <h3 className='download_now'> Download Now </h3>
                </div>
            </div>
        </div>  
  </>
}
