import { useState,useEffect } from "react"
import { Box,Typography,Stack } from "@mui/material"
import { useParams } from "react-router-dom"

import Videos from "./Videos"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import Skeleton from "./Skeleton"


const SearchFeed = () => {

  const [videos,setVideos]=useState([])
  const {searchTerm}=useParams()
  const [isLoading,setIsLoading]=useState(true)

  useEffect(()=>{
    setIsLoading(true)
    fetchFromAPI(`search?part=snippet&q=${searchTerm}}`).then((data)=>{
       setVideos(data.items)
       setIsLoading(false)
    })
 },[searchTerm])
  return (
    <Box sx={{
      overflowY: 'auto',
      height: '90vh',
      flex: 2,
    }}>
      <Typography variant="h4" fontWeight="bold" mb={2} ml={2} sx={{
        color: 'white',
      }}>
        Search Results for: <span style={{
          color:'#F31503'
        }}>{searchTerm}</span>
      </Typography>
      {isLoading && <Skeleton/>}
      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed