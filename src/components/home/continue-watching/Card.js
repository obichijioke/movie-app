import { Box, Typography, LinearProgress  } from '@mui/material'
import React from 'react'

const Card = () => {
  return (
    <Box sx={{width:'100%', display:'flex', justifyContent:'space-between'}}>
        <img src='https://image.tmdb.org/t/p/w300/qjGrUmKW78MCFG8PTLDBp67S27p.jpg' alt='backdrop' className='w-1/4 h-16 rounded'/>
        <Box sx={{width:'70%', display: 'flex', flexDirection:'column', justifyContent: 'end'}}>
            <Typography variant='body1' sx={{ lineHeight:'1.2' }}>Game of Thrones</Typography>
            <Typography variant='subtitle2' sx={{fontSize:'0.75rem'}}>Season 1 Episode 2</Typography>
            <LinearProgress variant="determinate" sx={{mt:1, height:'2px'}} value={50} />
        </Box>
    </Box>
  )
}

export default Card