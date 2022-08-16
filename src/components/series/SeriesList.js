import React from 'react'
import { Box, Typography } from '@mui/material'
import SeriesCard from './SeriesCard'
import axios from 'axios'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Slider from "react-slick";

const SeriesList = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box sx={{width:'100%', mt: 6}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', mb:3}}>
            <Typography variant='h5'>Continue watching</Typography>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Typography variant='body2' sx={{mr: 1}}>See all 10</Typography>
                <ArrowRightAltIcon/>
            </Box>
        </Box>
        {/* <Box sx={{display: 'flex', justifyContent: ''}}> */}
            <Slider {...settings}>
              <Box sx={{mx:1}}><SeriesCard/></Box>
              <Box sx={{mx:1}}><SeriesCard/></Box>
              <Box sx={{mx:1}}><SeriesCard/></Box>
              <Box sx={{mx:1}}><SeriesCard/></Box>
              <Box sx={{mx:1}}><SeriesCard/></Box>
              <Box sx={{mx:1}}><SeriesCard/></Box>
              <Box sx={{mx:1}}><SeriesCard/></Box>
              <Box sx={{mx:1}}><SeriesCard/></Box>
              <Box sx={{mx:1}}><SeriesCard/></Box>
              <Box sx={{mx:1}}><SeriesCard/></Box>
              <Box sx={{mx:1}}><SeriesCard/></Box>
              <Box sx={{mx:1}}><SeriesCard/></Box>
              <Box sx={{mx:1}}><SeriesCard/></Box>
            </Slider>
        {/* </Box> */}
    </Box>
  )
}

export default SeriesList