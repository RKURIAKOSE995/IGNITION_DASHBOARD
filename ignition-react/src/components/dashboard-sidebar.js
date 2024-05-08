import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Checkbox, Divider, Drawer, FormControlLabel,  Link,  Popover,  TextField, Typography, useMediaQuery } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import styled from '@emotion/styled';

import { CheckCircleOutlineRounded } from '@mui/icons-material';
import CircleOutlined from '@mui/icons-material/CircleOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { checkSelectedsensors, setArea, setLabArea, setSelectedMap, setSensors, toggleSensor, addSensorData, removeSensorData, resetSensorData, deselectAllSensors, setAreaDescription } from 'src/actions';

import format from 'date-fns/format';
import Info from '@mui/icons-material/Info';

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  const areas = useSelector(state =>  state.areas.areas);
  const labAreas = useSelector(state => state.areas.labAreas);
  let sensors = useSelector(state => state.sensors.sensors);
  let selectedArea = useSelector(state=> state.areas.area);
  let selectedLabArea = useSelector(state=> state.areas.labArea);
  let startDate = useSelector(state=>state.pickers.fromDate);
  let endDate = useSelector(state=>state.pickers.toDate);
  const dispatch = useDispatch();

  // const [values, setValues] = useState({    
  //   area: '',
  //   labArea:'',
  //   sensors: [],
  // });
  //popover
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElLabArea, setAnchorElLabArea] = React.useState(null);
  const [anchorElSensors, setAnchorElSensors] = React.useState(null);
  const [anchorDashboard, setAnchorDashboard] = React.useState(null);


  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handleLabAreaOpen = (event) => {
    setAnchorElLabArea(event.currentTarget);
  };

  const handleLabAreaClose = () => {
    setAnchorElLabArea(null);
  };

  const openPopup = Boolean(anchorEl);
  const openLabAreaPopup = Boolean(anchorElLabArea);
  const openSensorsPopup = Boolean(anchorElSensors);
  const openExploreDashboard = Boolean(anchorDashboard);

  const handleSensorsOpen = (event) => {
    setAnchorElSensors(event.currentTarget);
  };

  const handleSensorsClose = () => {
    setAnchorElSensors(null);
  };

  const handleDashboardOpen = (event) => {
    setAnchorDashboard(event.currentTarget);
  };

  const handleDashboardClose = () => {
    setAnchorDashboard(null);
  };
  //popover

  const handleSensorChange = (event,itemId, itemType, itemName, itemUnit) => {
    let eventValue = event.target.checked;
    let sensorName = event.target.name;
    dispatch(toggleSensor(sensorName,eventValue));
    dispatch(checkSelectedsensors());
  
    console.log(`Id ${itemId} - ${itemType}`);
    //2021-11-20
    let formattedStartDate = format(startDate, 'yyyy-MM-dd');
    let formattedEndDate = format(endDate, 'yyyy-MM-dd');
    if(eventValue) {
      fetch(`/sensors/${itemType}/${itemId}/${formattedStartDate}/${formattedEndDate}`).then(res => res.json())
      .then(
          (result) => {
          //  console.dir(result);
          dispatch(addSensorData(result, itemName, itemUnit, itemId));
          
         },
         (error) => {
          console.log(`Error performing request ${error}`);
        });
    } else {
      dispatch(removeSensorData(itemId));
    }
    
  };

  const handleChange = (event) => {
    if(event.target?.checked) {
      eventValue = event.target.checked;
    }
    if(event.target.name == 'area')
    {
      dispatch(deselectAllSensors());
      dispatch(resetSensorData());
      dispatch(setArea(event.target.value))
      dispatch(setSensors([]));
      dispatch(setLabArea('none'));
      dispatch(setSelectedMap(event.target.value));
      dispatch(setAreaDescription(event.target.value));
      dispatch(checkSelectedsensors());

      let sensorsForArea = findSensorsForArea(event.target.value);
      console.dir(sensorsForArea);
      dispatch(setSensors(sensorsForArea));



    }
    if(event.target.name == 'labArea')
    {
      console.log('lab area changed');
      dispatch(setLabArea(event.target.value))
      let sensorsForArea = findSensorsForLabArea(event.target.value);
      // console.dir(sensorsForArea);
      dispatch(setSensors(sensorsForArea));

    }
    console.log(`${event.target.name} - ${event.target.value}`);
  };

  const findSensorsForArea = (areaName) => {
    let sensorsForArea = [];
    areas.map((area) => {
      
      if(area.value === areaName){
        sensorsForArea = area.sensors;
      } 
    });
    return sensorsForArea;
  }
  const findSensorsForLabArea = (areaName) => {
    let sensorsForArea = [];
    let selectedSensors = [];
    areas.map((area) => {
      
      if(area.value === selectedArea){
        sensorsForArea = area.sensors;
      } 
    });
  
    sensorsForArea.map((sensor) => {
      if(sensor.labArea === areaName || sensor.labArea === 'all') selectedSensors.push(sensor);
    });
    console.log(`sensors for lab area`);
    console.dir(selectedSensors);
    return selectedSensors;
  }
  

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          borderTop: '8px solid #d20a11',
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            {/* <NextLink
              href="/"
              passHref
            >
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42
                  }}
                />
              </a>
            </NextLink> */}
            <Link href="/"
            sx={{color: '#fff', textDecoration: 'none'}}>
              <BoldParagraph>IGNTION Living Lab</BoldParagraph>
              <BoldParagraph>Data Dashboard</BoldParagraph>
            </Link>
          </Box>
          <Divider
          sx={{
            borderColor: '#516f78',
            my: 3
          }}
        />    
        <>
            <RedTitle>Explore Dashboard
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
              open={openExploreDashboard}
              anchorEl={anchorDashboard}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handleDashboardClose}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1, fontSize:12 }}>
                Please select the Living Lab Areas through the filters to view and download relevant data.<br/>
                Rain Garden<br/>
                Green Walls on Cockcroft building<br/>
                Green Roof<br/>
                Sustainable Drainage Trees (SUDS)<br/>
                Industrial Green Wall on Lady Hale Building<br/>
              </Typography>
            </Popover>
              <InfoIcon    
                aria-owns={openExploreDashboard ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handleDashboardOpen}
                onMouseLeave={handleDashboardClose}/>
            </RedTitle>
            </>
          <Box sx={{ p:3 }}>
            <BoldParagraph>Area 
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
              open={openPopup}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1, fontSize:12 }}>These are the areas of NBS installations at the Living Lab.<br/>
              Please select one area from the green walls,<br/>roof and trees to display relevant data.</Typography>
            </Popover>
              <InfoIcon    
                aria-owns={openPopup ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}/>
              </BoldParagraph>
          <TextField
                fullWidth  
                name="area"
                onChange={handleChange}
                required
                select
                size="small"
                SelectProps={{ native: true }}
                value={selectedArea}
                variant="outlined"
                placeholder='Select Area'
                sx={{
                  // backgroundColor: '#fff',
                  color:'#000',
                  outline: 'none',
                  borderRadius: '5',
                  borderColor: 'none',
                  '&:hover': {
                      border:'none',
                      // backgroundColor: '#fff',
                      borderColor:'#fff',
                      outline: 'none',
                      borderRadius: '5'
                  }
                }}
              >
                 <option value="none" 
                 disabled>
                  Select Area
                </option>
                {areas.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
              <MoreInfoLink href='https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:a2e43a48-6e4f-4c0c-8032-160813a69e8c' 
                            target='blank'>More Info</MoreInfoLink>


              
          </Box>

          { labAreas[selectedArea] &&
          <Box sx={{ p:3 }}>
            <BoldParagraph>Living Lab Area
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
              open={openLabAreaPopup}
              anchorEl={anchorElLabArea}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handleLabAreaClose}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1, fontSize:12 }}>Please select one of the sub-areas, which would allow you to view sensor data<br/>on a specific type of green wall, part of the green roof, … etc.<br/>
                For more information on data access and usage,<br/>please download the metadata  documentation by pressing the “Metadata” button.
              </Typography>
            </Popover>
              <InfoIcon    
                aria-owns={openLabAreaPopup ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handleLabAreaOpen}
                onMouseLeave={handleLabAreaClose}/>
            </BoldParagraph>
          <TextField
                fullWidth
                name="labArea"
                onChange={handleChange}
                required
                select
                placeholder='Select Lab Area.'
                SelectProps={{ native: true }}
                value={selectedLabArea}
                variant="outlined"
                size="small"
                sx={{
                  // backgroundColor: '#fff',
                  color:'#000',
                  outline: 'none',
                  borderRadius: '0',
                  '&:hover': {
                    border:'none',
                    borderColor:'#fff',
                    outline: 'none',
                    borderRadius: '0'
                }
                }}
              >
                 <option value="none" 
                 disabled>
                  Select lab area
                </option>
                {labAreas[selectedArea].map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>

              <MoreInfoLink href='../attachments/IgnitionLivingLab_metadata.pdf' 
                            target='blank'>Metadata</MoreInfoLink>
              
          </Box>

          }

        </div>
       
        {  sensors?.length > 0  &&

        
          <>
            <RedTitle>Sensor Types
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
              open={openSensorsPopup}
              anchorEl={anchorElSensors}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handleSensorsClose}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1, fontSize:12 }}>Please select the type of sensors you would like to review.<br/>You can overlap different types of sensors through selecting multiple items on this list.<br/>For more information on types of sensors and data, please download the metadata<br/>  documentation by pressing the “Metadata” button.
              </Typography>
            </Popover>
              <InfoIcon    
                aria-owns={openSensorsPopup ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handleSensorsOpen}
                onMouseLeave={handleSensorsClose}/>
            </RedTitle>

          <Box sx={{ p:3 }}>
            { sensors.map((item, i) => (
              <div key={i}>
                <FormControlLabel  
                control={<Checkbox
                          onChange={(e) => handleSensorChange(e, item.id, item.type, item.label, item.unit)}
                          checked={item?.selected ? true : false}
                          name={item?.value}
                          inputProps={{ 'aria-label': 'A', 
                                        'data-guid': item.id, 
                                        'data-type': item.type,
                                        'data-sensorname': item.label,
                                         'data-unit': item.unit }}
                          icon={<CircleOutlined />}
                          checkedIcon={<CheckCircleOutlineRounded />}
                          sx={{
                            color: '#d20a11',
                            borderRadius: '50%',
                            fontSize: '0.9rem',
                            '&.Mui-checked': {
                              // color: 'black',
                              color:'#d20a11'
                            },
                          }}
                        />} 
                label={item?.label} />
                <Divider
                  sx={{
                    borderColor: '#2D3748',
                    my: 3
                  }}
                /> 
              </div>  
          
            ))}

           

            
          </Box>
          </>
       
        }
    
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.1000',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.1000',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};


const BoldParagraph = styled('p')({
  fontWeight: 'bold',
  margin:'10px 0px',
  display:'flex',
  flexDirection:'row',
  justifyContent: 'space-between'
});

const RedTitle = styled('h4')({
  fontWeight: 'bold',
  backgroundColor: '#d20a11',
  padding: "24px",
  display:'flex',
  flexDirection:'row',
  justifyContent: 'space-between'

});

const MoreInfoLink = styled('a')({
  fontWeight:'bold',
  fontSize:11,
  textDecoration: 'underline',
  color: '#fff',
  display:'block',
  paddingTop:20,
  paddingLeft:5,
  "&:visited": {
    color:'#fff !important'
  },
  "&:hover": {
    color:'#fff !important'
  }
});