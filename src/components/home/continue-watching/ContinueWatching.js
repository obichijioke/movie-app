import { Typography, Box } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Card from './Card';

const ContinueWatching = () => {
  return (
    <Box sx={{width:'100%', mt: 6}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', mb:3}}>
            <Typography variant='h5'>Continue watching</Typography>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Typography variant='body2' sx={{mr: 1}}>See all 10</Typography>
                <ArrowRightAltIcon/>
            </Box>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Box sx={{width: '24%'}}><Card/></Box>
            <Box sx={{width: '24%'}}><Card/></Box>
            <Box sx={{width: '24%'}}><Card/></Box>
            <Box sx={{width: '24%'}}><Card/></Box>
        </Box>
    </Box>
  )
}

export default ContinueWatching