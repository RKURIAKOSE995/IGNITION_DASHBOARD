import { Avatar, Box, Card, CardContent, Grid, Link, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import { WbSunny } from '@mui/icons-material';
import parse from 'html-react-parser';
import styled from '@emotion/styled';

export const MapCard = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Link href={props?.mapurl.replace('small','large')} 
                target="_blank">
          <img
              alt="Area Map"
              src={props?.mapurl}
              style={{
                display: 'inline-block',
                // maxWidth: '100%',
                width:'100%',
                margin:'0px auto'
              }}
            />
          </Link>
          
            <Typography sx={{ 
                     fontSize:13,
                     textAlign: 'left' }}> {parse(props?.mapdescription)}</Typography>
          { props?.images &&
            props.images.map((element, id) => {
              return (
              <Link 
                href={element.large} 
                key={id}
                target="blank">
                <Thumb src={element.small}/>
              </Link>
              ); 
              
              
            })
            
          }
        </Grid>
        
      </Grid>
            
    </CardContent>
  </Card>
);


const Thumb = styled('img')({
  width:100,
  height:100,
  "&:visited": {
    color:'#fff !important'
  },
  "&:hover": {
    color:'#fff !important'
  },
  marginRight: 8,
  marginTop:20,
  objectFit: 'cover',
});