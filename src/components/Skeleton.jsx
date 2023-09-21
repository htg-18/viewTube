import { Stack,Box } from '@mui/material'
import React from 'react'
import './skeleton.css'

const Skeleton = ({type}) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2} sx={{
      display: "flex",
      alignItems: "space-around",
      justifyContent:'center'}}>
        {Array.from({ length: 16 }).map((_, idx) => (
        <Box key={idx} className="container"
           sx={{
      width:{md:'320px',xs:'100%'},
      color:"gray"
    }}
        >
           <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2} sx={{
      display: "flex",
      alignItems: "space-around",
      justifyContent:'center'}}>
             <Box sx={{
        backgroundColor:'gray',
        height:'170px',
        width:{md:'300px',xs:"300px"}
      }}>

             </Box>
             <Box  sx={{
        backgroundColor:'#1e1e1e',
        height:'106px',
        width:{md:'300px',xs:"300px"}
      }}>

             </Box>
           </Stack>
        </Box>
        ))}

      </Stack>
  )
}

export default Skeleton