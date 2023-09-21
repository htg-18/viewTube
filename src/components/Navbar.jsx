import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import {logo} from "../utils/constants"
import SearchBar from "./SearchBar"

const Navbar = () => (
 
    <Stack 
    direction="row" 
    alignItems="center" p={2} 
    sx={{
    position:'sticky',
    background:'#000',
    top:0,
    justifyContent:'space-between',
    height:'45px',
    }}>

     <Link to="/" style={{display:'flex', alignItems:'center'}}>
       <img src={logo} height={35} />
       <Typography variant="h4" fontWeight='bold'
       sx={{
        color:'#fff',
        ml:'5px',
        display: { xs: 'none', md: 'block' },
       }}
       >ViewTube</Typography>
     </Link>
     <SearchBar/>
    </Stack>

)

export default Navbar