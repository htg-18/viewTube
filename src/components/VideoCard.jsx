import { Typography,Card,CardContent,CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl,demoChannelTitle,demoVideoTitle,demoVideoUrl,demoChannelUrl } from "../utils/constants"
import { Link } from "react-router-dom"

const VideoCard = ({video:{id:{videoId},snippet}}) => {
    // console.log(videoId,snippet)
  return (
    <Card sx={{
      width:{md:'320px',xs:'100%'}
    }}>
      <Link to={videoId ?`/video/${videoId}`:demoVideoUrl}>
        <CardMedia 
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{
                flex:1,
                width:{md:'320px',xs:"330px"},
                height:180
            }}
        />
      </Link>
      <CardContent
      sx={{
        backgroundColor:'#1e1e1e',
        height:'106px',
        width:{md:'300px',xs:"300px"}
      }}
      >
        <Link to={videoId ?`/video/${videoId}`:demoVideoUrl}>
           <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0,60)||demoVideoTitle}
           </Typography>
        </Link>
        <Link to={snippet?.channelId ?`/channel/${snippet?.channelId}`:demoChannelUrl}>
           <Typography variant="subtitle1" fontSize='16px' color="gray">
            {snippet?.channelTitle.slice(0,60)||demoChannelTitle}
            <CheckCircle sx={{
              fontSize:'12px',
              color:'gray',
              ml:'5px',
              mt:'1px'
            }}/>
           </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard