import { Box, Container } from '@mui/material'
import React from 'react'
import NavBar from '../menu/NavBar'

const WithMenu = (Component) => {
  return (props)=>(
    <Box>
        <NavBar/>
        <Box sx={{width: "100%"}}>
            <Component {...props}/>
        </Box>
    </Box>
  )
}

export default WithMenu