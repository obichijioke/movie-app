import { Box, Typography } from '@mui/material'
import React from 'react'

const SeriesCard = () => {
  return (
    <div className='w-full '>
        <Typography sx={{my:1, fontSize:'0.8rem', }}>Trending in Ireland</Typography>
        <div className='relative h-64 transition-all ease-in-out duration-300 hover:scale-150 hover:z-50'>
            <img src='https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg' alt='' className='h-full object-cover rounded hover:h-5/6'/>
            <div className='absolute h-full w-full top-0 left-0' style={{background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 43%)'}}></div>
            <Typography sx={{position: 'absolute', bottom: 7, left:8}}>3 Seasons</Typography>
        </div>
    </div>
  )
}

export default SeriesCard