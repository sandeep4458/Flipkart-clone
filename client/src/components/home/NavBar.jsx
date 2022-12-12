
import { Box,styled, Typography } from '@mui/material';
import {navData} from '../../constants/data';

const Component=styled(Box)`

display:flex;
margin:55px 90px 0 90px;
justify-content:space-between;
`

const Container=styled(Box)`
padding:12px 8px;
text-align:center;

`
const Text=styled(Typography)`
font-size:14px;
font-family:inherit;
font-weight:600;
`


const NavBar = ()=>{
return(
<Component>
    {
            navData.map(data => (
                <Container>
                    <img src={data.url} alt="nav" style={{width:64}}/>
                    <Text>{data.text}</Text>
                </Container>
            ))
            }

</Component>
 
 
    )


}


export default NavBar;