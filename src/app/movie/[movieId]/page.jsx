import { getAllMovieById } from '@/services/movie.service'
import React from 'react'
import { FaStar } from "react-icons/fa6";

const MovieDetails = async ({params}) => {
    const {movieId} = params;
    const data = await getAllMovieById(movieId);
  return (
    <div class="bg-red-950 w-full h-screen dark:bg-gray-800 py-8 -mx-4 ">
        <div class=" mx-auto px-4 sm:px-6 lg:px-8 ">
                <div class="flex flex-col md:flex-row mt-32">
                <div class="md:flex-1 px-10">
                    <div class="h-[730px] w-[1100px] bg-gray-300 dark:bg-gray-700 mb-4">
                        <img class="w-full h-full object-cover" src={data.payload.image} alt="Movie Image"/>
                    </div>
                   
                </div>
                <div class="md:flex-1 px-4">
                    <h2 class="text-2xl font-bold text-white dark:text-white">{data.payload.director}</h2>
                    <p class="text-white dark:text-gray-300 text-sm"></p>
                    <div class="flex">
                        <div class="mr-4">
                            <span class=" text-white dark:text-gray-300">{data.payload.runtime}</span>
                            <span class="text-white dark:text-gray-300"> minutes</span>
                        </div>
                    </div>
                    <div>
                        <i class=" text-white dark:text-gray-300">{data.payload.genre}</i>
                        <div className='flex'>
                            <span ><FaStar className='text-white dark:text-yellow-300'/></span>
                            <span ><FaStar className='text-white dark:text-yellow-300'/></span>
                            <span ><FaStar className='text-white dark:text-yellow-300'/></span>
                            <span ><FaStar className='text-white dark:text-yellow-300'/></span>
                            <span ><FaStar className='text-white dark:text-yellow-300'/></span>
                        </div>
                        
                    </div>
                    
                    <div className='mt-14'>
                        <h2 class="font-bold text-2xl text-white dark:text-gray-300">{data.payload.movie_title} ({data.payload.released_year})</h2>
                        <p class="text-white dark:text-gray-300 text-lg mt-2">
                            {data.payload.description}
                        </p>

                        <p className='text-white mt-20'>{new Date(data.payload.posted_at).toLocaleString()}</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

  )
}

export default MovieDetails