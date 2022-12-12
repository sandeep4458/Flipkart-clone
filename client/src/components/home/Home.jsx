

//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import { Fragment } from "react";
import { Box } from "@mui/material";
import { styled } from '@mui/material';


const Component=styled(Box)`
padding: 10px;
background: #F2F2F2;

`




const Home=()=>{
    return(
<Fragment>
<NavBar /> 
<Component>
<Banner />

</Component>
</Fragment>
    )
}



export default Home;