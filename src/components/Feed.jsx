import { useState,useEffect } from "react"
import { Box,Typography,Stack } from "@mui/material"
import Sidebar from "./Sidebar"
import Videos from "./Videos"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import Skeleton from "./Skeleton"


const Feed = () => {

  const [selectedCategory, setSelectedCategory]=useState('New')
  const [videos,setVideos]=useState([])
  const [isLoading,setIsLoading]=useState(true)

//   useEffect(()=>{
//     setIsLoading(true)
//     fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>{
//        setVideos(data.items)
//     })
//     setIsLoading(false)
//  },[selectedCategory])
useEffect(() => {
  setIsLoading(true);

  fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {
      setVideos(data.items);
      setIsLoading(false); // Set isLoading to false after data is fetched
    })
    .catch((error) => {
      setIsLoading(false); // Handle any potential errors and set isLoading to false
      console.error("Error fetching data:", error);
    });
}, [selectedCategory]);
  return (
    <Stack sx={{flexDirection:{sx:'column' ,md:'row'}}}>
      <Box sx={{
        height:{sx:'auto',md:'92vh'},
        borderRight:'1px solid #3d3d3d',
        px:{sx:0 , md:2}
      }}>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="copyright" variant="body2" sx={{
          color: 'white',
          mt:1.5
        }}>
          Copyright 2023 Harsh Shah
        </Typography>
      </Box>
      <Box sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: 2,
      }}>
        <Typography variant="h4" fontWeight="bold" mb={2} ml={2} sx={{
          color: 'white',
        }}>
          {selectedCategory} <span style={{
            color:'#F31503'
          }}>Videos</span>
        </Typography>
        {isLoading && <Skeleton/>} 
        <Videos videos={videos}/>
        
      </Box>
    </Stack>
  )
}

export default Feed