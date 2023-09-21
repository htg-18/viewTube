import { useState,useEffect } from "react"
import { Link,useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography,Box,Stack,CircularProgress } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import Videos from "./Videos"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import { grey } from "@mui/material/colors"



const VideoDetail = () => {
   
   const [videoDetail,setVideoDetail]=useState(null)
   const [videos,setVideos]=useState([])
   const {id}=useParams()
   const [isLoading,setIsLoading]=useState(true)
// console.log(videoDetail)
   useEffect(()=>{
    setIsLoading(true)
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data?.items[0]))

      fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=>{
        setVideos(data?.items)
        setIsLoading(false)
      })
   },[id])
   console.log(videoDetail)
   if(!videoDetail?.snippet) return <div>Loading...</div>;
  return (
    <>
    {isLoading && <Box minHeight="90vh" display="flex" sx={{ 
      color:"black",
      alignItems:"center",
      justifyContent:"center",
     }}>
      <CircularProgress color="success"/>
    </Box>}
    <Box minHeight="90vh"
       sx={{
        color:"black"
       }}
    >
     
      <Stack
        direction={{
          xs:'column',
          md:'row'
        }}
       
      >
        <Box flex={1}
          //  sx={{
          //   position:'sticky',
          //   top:'0px'
          //  }}
        >
          <Box 
           sx={{
            position: 'sticky',
            width: '100%',
            top:'87px',
            overflowY: 'scroll',
           }}
          >
           <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player"  controls
           />
          
          <Typography color="#fff" variant="h5" fontWeight="bold"
            sx={{
              fontSize:'20px'
            }}
          >
            {videoDetail.snippet.title}
          </Typography>
         
          <Stack direction="row" justifyContent="space-between"
           sx={{
            color:'#fff',
            
           }}
           px={2}
           py={1}
          >
            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
               <Typography variant="subtitle1" sx={{
                color:"#fff",
                fontWeight: "bold",
                fontSize: '12px'
               }}>
               {videoDetail.snippet.channelTitle}
               <CheckCircle sx={{
                fontSize:'12px',
                marginLeft:'5px',
                color:'grey'
               }}/>
               </Typography>
            </Link>
            <Stack direction='row' gap="20px" alignItems='center'>
               <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail.statistics.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail.statistics.likeCount).toLocaleString()} likes
                </Typography>
            </Stack>
          </Stack>
          </Box>
        </Box>
        <Box flex={0.35}>
          <Videos videos={videos}/>
        </Box>
      </Stack>
    </Box>
    </>
  )
}

export default VideoDetail