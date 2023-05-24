import React from 'react' ;
import Movies from '../Movies/Movies';
import People from '../People/People';
import Tvshow from '../Tvshow/Tvshow';


export default function Home() {

  return <>
    
    <div className='maain mb-5 d-flex justify-content-center align-items-center'>
    <i class="fa-solid fa-play"></i> <h1 className='noxe text-center fw-bold'> NOXE MOVIES</h1>
    </div>


    <div className='mb-5 mt-3'>
      <h1 className='text-white mb-3'> Trending Movies </h1>
      <Movies/>
    </div>
    <div className='my-5'>
      <h1 className='text-white mb-3'> Trending Stars </h1>
      <People/>    
    </div>
    <div className='my-5'>
      <h1 className='text-white mb-3'> Trending TV-Shows </h1>
      <Tvshow/>
    </div>

    
  </>
}
