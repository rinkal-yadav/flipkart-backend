import { Box,styled } from "@mui/material";
import Slide from "./Slide";

const LeftCompo =styled(Box)(({theme})=>({
    width:'83%',
    [theme.breakpoints.down('md')]:{
        width:'100%',
    }
}))

const RightCompo=styled(Box)(({theme})=>({
    background: '#FFFFFF',
    padding: '5px',
    marginTop: '10px',
    textAlign: 'center',
    width: '17%',
    marginLeft: '10px',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }

}))



const MidSlide =({products,title,timer})=>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return(
        <Box style={{display:'flex'}} >
            <LeftCompo ><Slide model={1} products={products} title={title} timer={timer}/></LeftCompo>
            <RightCompo>
                <img src={adURL} alt='AdImg' style={{width:'198px'}}/>
            </RightCompo>

        </Box>
    )

}

export default MidSlide