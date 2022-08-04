import { Box } from '@mui/material'
import React, { useEffect, useState} from 'react'
import movies from './movies'

const FeaturedArea = ({setBg}) => {
    const [selected, setSelected] = useState(null)
    useEffect(()=>{
        setSelected(movies[0])
        setBg(`https://image.tmdb.org/t/p/original${movies[0].backdrop_path}`)
    },[])
    useEffect(()=>{
        setBg(`https://image.tmdb.org/t/p/original${selected?.backdrop_path}`)
    },[selected])


  return (
    // backgroundImage: `url(https://image.tmdb.org/t/p/original${selected?.backdrop_path})`, backgroundPosition:'center', backgroundSize:'cover'
    <Box sx={{width: "100%", height: "600px", display: 'flex', justifyContent: 'space-between', overflow: 'hidden', alignItems: 'center', }}>
        <Box sx={{width: "78%"}}>
            <img src={`https://image.tmdb.org/t/p/original${selected?.backdrop_path}`} alt={selected?.title} className='w-full h-full opacity-80 rounded-md'/>
        </Box>
        <Box sx={{width: "20%", height:'100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            { movies?.map((item, i) => <Box key={i} sx={{width: "100%", }} onClick={()=>setSelected(item)}><img src={`https://image.tmdb.org/t/p/w500`+ item['backdrop_path']} alt={item.title} className='w-full rounded-md'/></Box>)}
            
        </Box>
    </Box>
  )
}

export default FeaturedArea