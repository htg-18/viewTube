import { useState,useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { Box } from "@mui/material"
import Videos from "./Videos"
import ChannelCard from "./ChannelCard"
import { fetchFromAPI } from "../utils/fetchFromAPI"
import Skeleton from "./Skeleton"

const ChannelDetail = () => {
  const {id}=useParams();
  const [channelDetail,setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [isLoading,setIsLoading] = useState(true)

  // console.log(channelDetail)
  useEffect(() => {
    setIsLoading(true)
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
      setIsLoading(false);
    };

    fetchResults();
  }, [id]);
  
  return (
    <Box minHeight="95vh"
      
    >
   
      <Box>
      <div
  style={{
    background: 'rgb(63, 94, 251)',
    background: 'radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)',
    zIndex:10,
    height:'300px',
    
  }}
/>
      
       <ChannelCard channelDetail={channelDetail}
         marginTop="-113px"
         
       />
       
      </Box>
      <Box>
        {isLoading  && <Skeleton/>}
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail