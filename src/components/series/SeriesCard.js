import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


const SeriesCard = () => {
  const [active, setActive] = useState('first')
  return (
    <div className='w-full relative'>
      <div className=''>
        <Typography sx={{my:1, fontSize:'0.8rem', }}>Trending in Ireland</Typography>
        <div className='relative h-64'>
            <img src='https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg' alt='' className='h-full object-cover rounded-sm'/>
            <div className='absolute h-full w-full top-0 left-0' style={{background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 43%)'}}></div>
            <Typography sx={{position: 'absolute', bottom: 7, left:8}}>3 Seasons</Typography>
        </div>
      </div>

        <div className='absolute top-0 left-0 bg-white p-2 h-80 w-full rounded-sm opacity-0 hover:opacity-100 transition-all ease-in-out duration-700 hover:scale-125 z-50'>
          <p className='text-gray-600 text-xs my-1'>Rated by friend</p>
          <img src='https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg' alt='' className='h-3/4 w-full object-cover rounded'/>
          <p className='text-gray-500 text-xs my-1 font-bold'>2001 . 1h 30min</p>
          <div className='flex justify-between text-gray-500 text-xs'>
            <p className='my-1'>drama, sci-fi</p>
            <div className='flex items-center gap-3'>
              <FavoriteBorderIcon fontSize='small'/>
              <ErrorOutlineIcon fontSize='small'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SeriesCard