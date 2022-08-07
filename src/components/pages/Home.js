import React, { useState } from 'react'
import WithMenu from '../layout/WithMenu'
import FeaturedArea from '../home/FeaturedArea';
import { Box, Container } from '@mui/material';
import ContinueWatching from '../home/continue-watching/ContinueWatching';
import SeriesList from '../series/SeriesList';

const Home = () => {
  const [bg, setBg] = useState(null)
  return (
      <div className="mb-4">
        <Box sx={{opacity:'0.4', height: '700px', width: '100%', backgroundImage: `url(${bg != null && bg})`, backgroundPosition:'center', backgroundSize:'cover', filter: 'blur(16px)', backgroundRepeat:'no-repeat'}}>
        </Box>
        <Box sx={{position: 'absolute', top:'100px', width: '100%'}}>
          <Container maxWidth="xl">
            <FeaturedArea setBg={setBg}/>
            <ContinueWatching/>
            <SeriesList/>
          </Container>
        </Box>
      </div>
  )
}

export default WithMenu(Home)