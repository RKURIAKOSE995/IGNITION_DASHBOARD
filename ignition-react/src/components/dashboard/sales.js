import { Bar, Line } from 'react-chartjs-2';
import { Box, Button, Card, CardContent, CardHeader, Divider, FormControlLabel, Switch, Typography, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { style, styled } from '@mui/system';
import { useSelector } from 'react-redux';
import 'chartjs-adapter-date-fns';
import { Bloodtype, Label } from '@mui/icons-material';

export const Sales = (props) => {
  const theme = useTheme();
  let chartData = useSelector(state => state.charts);
  let filterPressed = useSelector(state => state.pickers.filterPressed);
  let areaSelected = useSelector(state=> state.areas.area);

  const options = {
    animation: true,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: true },
    maintainAspectRatio: false,
    responsive: true,
    elements: { 
      line: {   
        tension:10,         
        borderJoinStyle: 'round'
      }
    },
    fill:true,
    xAxes: [
      {
        type: 'time',
        time: {
          unit: 'day',
          unitStepSize: 1,
          parser: 'dd MMM yyyy'
        },
        ticks: {
          fontColor: theme.palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: false,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider
        }
      }
    ],
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.primary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    },
    plugins: {
      legend: { 
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          textAlign: 'left',
          padding:10,
        },
        align: 'start',

      },
      tooltip: {
        callbacks: {
            label: (item) => {
                return  `${item.dataset.label}: ${item.formattedValue} ${item.dataset.sensorUnit}`;
            }
              
        },
    },
    }
  };

  return (
    
    <>
    { (!filterPressed  && areaSelected == 'none') &&

      <Card {...props}>
        <CardHeader
        title="Welcome to IGNITION Data Dashboard" />
        <Divider/>
        <CardContent>
          <Box
              sx={{
                position: 'relative'
              }}
            >
              <h3>Welcome to IGNITION Living Lab Data Dashboard</h3>
              <p>This platform aims to share the data generated within the IGNITION NBS Living Lab with researchers, organisations, investors and the general public.</p><br/>

              <p>Feel free to navigate the dashboard and get to know more about how we monitor water and energy within the different typologies of green infrastructure at our Living Lab.</p><br/>
              <p>For further information and collaboration, please email <a target="_blank" 
              rel="noreferrer" 
              href="mailto:UoS-IgnitionLL@salford.ac.uk">UoS-IgnitionLL@salford.ac.uk</a> </p><br/>
              <h3>About IGNITION</h3>
              <p>
                <a 
                target="_blank"
                rel="noreferrer"
                href="https://eur01.safelinks.protection.outlook.com/?url=http%3A%2F%2Fwww.ignitiongm.com%2F&data=04%7C01%7CN.H.Abdelrahman2%40salford.ac.uk%7C8c11887ffdf849cf5ba008d9365b8112%7C65b52940f4b641bd833d3033ecbcf6e1%7C0%7C0%7C637600589487206616%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=y5O3QZTjRxeGHzZ3BTgCMXyUWmnNydBEkQFz%2FpSmQlo%3D&reserved=0">
                  €4.6 million EU funded IGNITION Project 
                </a> sets target to uplift green infrastructure in Greater Manchester and develop business models for investment in Nature-base Solutions (NBS). The role of its NBS Living Lab at University of Salford is pivotal to achieving these targets as it provides a retrofit installation that showcases a variety of NBS climate mitigation solutions and delivers evidence to inform stakeholders on investment schemes based on real-time data, and raise awareness of economic, environmental and well-being benefits of such technologies for communities.
The installation integrates a green-blue roof, living wall, SUDS trees and rain garden with a connected water management scheme linking all elements, providing greater benefits as an integrated system.
                </p><br/>
              <h3>Learn More!</h3>
              <p>For more info about the project and NBS Living Lab, please check out our project data and research through the following links:</p><br/>
              <a target="_blank" 
                  rel="noreferrer" 
                  href="http://hub.salford.ac.uk/ignition-living-lab/">NBS Living Lab Website</a><br/>
              <a target="_blank" 
                  rel="noreferrer" 
                  href="https://www.greatermanchester-ca.gov.uk/what-we-do/environment/natural-environment/ignition/">GMCA IGNITION Page</a><br/>
              <a target="_blank" 
                rel="noreferrer" 
                href="https://youtube.com/playlist?list=PL5Tkez2nLfPz97huI_87g2uLtCNweSpcL">Living Lab Virtual Video Tour </a><br/>
              <a target="_blank" 
                  rel="noreferrer" 
                  href="https://sway.office.com/61jGdw6lBKkJtO54?ref=Link">NBS Living Lab Newsletter</a><br/>
              <a target="_blank" 
                 rel="noreferrer" 
                 href="https://www.youtube.com/channel/UCu3nhfyNubVHdHvEdbD_8_A">NBS Living Lab YouTube Channel and video content</a><br/>
          </Box>
        </CardContent>
      </Card> 
    }

    <Card {...props}>
      <CardHeader
        // action={(
        //   <Button
        //     endIcon={<ArrowDropDownIcon fontSize="small" />}
        //     size="small"
        //   >
        //     Last month
        //   </Button>
        // )}
        title="Living Lab Monitoring Data"
      />
      <Divider />
     
      { filterPressed &&
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
          <Line
            data={chartData}
            options={options}
          />
        </Box>
      </CardContent>
      }
      <Divider />
      {/* { filterPressed && 
         <Box
         sx={{
           display: 'flex',
           justifyContent: 'flex-start',
           p: 2
         }}>
         <FormControlLabel
           control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
           label={
             <Typography sx={{ fontSize: 12 }}>
               Hours/Days filter based on the data
           </Typography>
           }
           
           // label={<span style={{ fontSize: '12px' }}>Hours/Days filter based on the data</span>}
         />
         </Box>
      } */}
     
     { filterPressed && 
          <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                p: 2
              }}
            >
              <PickerButton
                color="primary"
                component="a"
                href="../attachments/plantspecies.zip"
                target="blank"
                sx={{ 
                  mt: 2, 
                  backgroundColor: 'primary.ignition', 
                  color: 'fff' }}
              >
                Planting composition
              </PickerButton>
             
              
            </Box>
     }

    </Card>
    </>
  );
};


const PickerButton = styled(Button)({
  color: '#fff',
  fontSize:13,
  padding:10,
  minWidth:150,
  '&:hover': {
      backgroundColor: '#d20a11',
      borderColor: '#d20a11',
      boxShadow: 'none',
    },
})

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" 
  disableRipple 
  {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  fontSize:12,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#bfbfbf',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const LineParagraph = styled(Typography)({
  fontSize:12,
  fontWeight:'normal',
  color:'#d20a11',
})


