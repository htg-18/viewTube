import { Stack } from "@mui/material"
import { categories } from "../utils/constants"
import { Category } from "@mui/icons-material"


const Sidebar = ({selectedCategory,setSelectedCategory}) => (
   <Stack
     direction="row"
     sx={{
        overflowY:"auto",
        height:{sx:'auto' ,md:'95%'},
        flexDirection:{md:'column'}
     }}
   >
    {
        categories.map((category)=>(
          <button 
            className="category-btn"
            style={{
                background: category.name===selectedCategory && '#FC1503',
                color:'white'
            }}
            onClick={()=>{
                setSelectedCategory(category.name)
            }}
          >
             <span style={{
                color:selectedCategory===category.name?'black':'#FC1503',
                marginRight:'15px'
             }}>{category.icon}</span>
             <span>{category.name}</span>
          </button>
        )
        )
    }
   </Stack>
)
 
export default Sidebar