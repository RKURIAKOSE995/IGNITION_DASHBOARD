import { DatePicker, DesktopDatePicker } from "@mui/lab";
import { Button, Grid, Popover, TextField, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { withStyles } from '@mui/styles';
import { useSelector, useDispatch } from "react-redux";
import { deselectAllSensors, resetSensorData, setFromDate, setToDate, toggleFilter } from "src/actions";
import InfoIcon from '@mui/icons-material/Info';
import { CSVLink, CSVDownload } from "react-csv";


export const ChartPickers = (props) => {
    const theme = useTheme();
    let fromDate = useSelector(state => state.pickers.fromDate);
    let toDate = useSelector(state => state.pickers.toDate);
    let selectedSensors = useSelector(state => state.sensors.hasSelectedSensors);
    let selectedArea = useSelector(state => state.areas.area);
    let filterPressedValue = useSelector(state => state.pickers.filterPressed);
    let chartData = useSelector(state => state.charts);

    const [datePreset, setDatePreset] = React.useState('web');
    const [seasonalEl, setSeasonalEl] = React.useState(null);

    const openSeasonal = Boolean(seasonalEl);
    const handleSeasonalOpen = (event) => {
      setSeasonalEl(event.currentTarget);
    };

    const handleSeasonalClose = () => {
      setSeasonalEl(null);
    };

    const [datesEl, setDatesEl] = React.useState(null);
    const openDates = Boolean(datesEl);
    const handleDatesOpen = (event) => {
      setDatesEl(event.currentTarget);
    };

    const handleDatesClose = () => {
      setDatesEl(null);
    };
    
    const [filterEl, setFilterEl] = React.useState(null);
    const openFilter = Boolean(filterEl);
    const handleFilterOpen = (event) => {
      setFilterEl(event.currentTarget);
    };

    const handleFilterClose = () => {
      setFilterEl(null);
    };


    const [fullDataEl, setfullDataEl] = React.useState(null);
    const openFullData = Boolean(fullDataEl);
    const handleFullDataElOpen = (event) => {
      setfullDataEl(event.currentTarget);
    };

    const handleFullDataElClose = () => {
      setfullDataEl(null);
    };

    const [nbsDataEl, setNbsDataEl] = React.useState(null);
    const openNbsData = Boolean(nbsDataEl);
    const handleNbsDataElOpen = (event) => {
      setNbsDataEl(event.currentTarget);
    };

    const handleNbsDataElClose = () => {
      setNbsDataEl(null);
    };
    

    const dispatch = useDispatch();
    console.log(`fromDate ${fromDate} - toDate ${toDate}`);

    const filterPressed = () => {
      
      dispatch(toggleFilter());
      console.log(`Filter pressed value before toggle: ${filterPressedValue} `);
      if(filterPressedValue)
      {
        console.log('reset pressed');
        console.log(`Filter pressed value after toggle: ${filterPressedValue} `);
        dispatch(deselectAllSensors());
        dispatch(resetSensorData());
        
      }
      

      // if(filterPressedValue) { dispatch(resetSensorData()); }
    }
    
    const handlePresetChange = (event, newValue) => {
        setDatePreset(newValue);
        if(newValue == 'winter'){
          console.log(new Date('2021-12-22'));
          dispatch(setFromDate(new Date('2021-12-21')));
          dispatch(setToDate(new Date('2022-03-20')));
        }
        if(newValue == 'summer'){
          dispatch(setFromDate(new Date('2021-06-21')));
          dispatch(setToDate(new Date('2021-10-23')));
        }
        if(newValue == 'spring'){
          dispatch(setFromDate(new Date('2021-03-21')));
          dispatch(setToDate(new Date('2021-06-23')));
        }
        if(newValue == 'autumn'){
          dispatch(setFromDate(new Date('2021-10-23')));
          dispatch(setToDate(new Date('2021-12-21')));
        }
    }

    const handleChange = (type, value) => {
        console.log(`${type} - ${value}`);
        console.dir(value);
        if(type == 'from'){
          dispatch(setFromDate(value))
          console.log(fromDate);
        }

        if(type == 'to'){
          dispatch(setToDate(value))
        }


      };

      const generateCSVData = () => {
        const chartDataClone = JSON.parse(JSON.stringify(chartData));
        console.log('generate csv data');
        console.dir(chartDataClone);
        let resultData = [];
        if(chartDataClone.datasets.length > 0){
          chartDataClone.datasets.forEach((dataset) => {
              let sensorName = dataset.label;
              if(dataset.data.length > 0)
              {
                dataset.data.forEach((dailyValue) => {
                  let obj = {
                    name: sensorName,
                    date: dailyValue.x,
                    value: dailyValue.y,
                    unit: dataset.sensorUnit,
                  };
                  resultData.push(obj);
                });
              }
              
          });
        }
        return resultData;
      }

      let csvRef = React.createRef();
      const download = () => {
          csvRef.current.link.click();
      };


    return ( 

    <>
          { selectedArea != 'none' && 

        <Grid
            container
            spacing={1}
            sx={{ justifyContent: 'space-between' }}
            
        > 
        <Grid item 
          xl={12}
          lg={12}
          sm={12}
          xs={12}
          sx={{ paddingTop:2, paddingBottom:2}}>
              {/* <AverageButton>Winter Average</AverageButton>
              <AverageButton>Summer Average</AverageButton>
              <AverageButton>Spring Average</AverageButton>
              <AverageButton>Autumn Average</AverageButton> */}
              <SectionTitle>Seasonal Data
              <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
              open={openSeasonal}
              anchorEl={seasonalEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handleSeasonalClose}
              disableRestoreFocus>
              <Typography sx={{ p: 1, fontSize:12 }}>To automatically access seasonal data,<br/>please select one of the four seasons by pressing the buttons below.</Typography>
              </Popover>
              <InfoIcon   
                aria-owns={openSeasonal ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handleSeasonalOpen}
                onMouseLeave={handleSeasonalClose}/>
              </SectionTitle>
              <ToggleButtonGroup
                color="primary"
                value={datePreset}
                disabled={filterPressedValue}
                exclusive
                onChange={handlePresetChange}
              >
                <ToggleButton value="winter">Winter Average</ToggleButton>
                <ToggleButton value="summer">Summer Average</ToggleButton>
                <ToggleButton value="spring">Spring Average</ToggleButton>
                <ToggleButton value="autumn">Autumn Average</ToggleButton>
              </ToggleButtonGroup>
        </Grid>
        <Grid item
         xl={12}
         lg={12}
         sm={12}
         xs={12}
        >

          <SectionTitle>Selected Dates 
          <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
              open={openDates}
              anchorEl={datesEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handleDatesClose}
              disableRestoreFocus>
              <Typography sx={{ p: 1, fontSize:12 }}>Please select start and end dates to view data in a specific timeslot.<br/>It is recommended that downloads should be kept to 3 months per query.</Typography>
              </Popover>
              <InfoIcon   
                aria-owns={openDates ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handleDatesOpen}
                onMouseLeave={handleDatesClose}/>
          </SectionTitle>

        </Grid>
        <Grid item
        xl={2}
        lg={2}
        sm={2}
        xs={12}>
            <PickerWrapper>

                <StyledPicker 
                    label="From"
                    inputFormat="yyyy-MM-dd"
                    size="small"
                    disabled={filterPressedValue}
                    value={fromDate}
                    onChange={(newValue) => handleChange('from', newValue)}
                    renderInput={(params) => <TextField {...params} />}
                    />
            </PickerWrapper>
            
        </Grid>

        <Grid item
          xl={2}
          lg={2}
          sm={2}
          xs={12}>
            <PickerWrapper>
                <StyledPicker 
                        label="To"
                        inputFormat="yyyy-MM-dd"
                        size="small"
                        disabled={filterPressedValue}
                        value={toDate}
                        onChange={(newValue) => handleChange('to', newValue)}
                        renderInput={(params) => <TextField {...params} />}
                    />
            </PickerWrapper>
         
            
        </Grid>
        <Grid item
         xl={4}
         lg={4}
         sm={4}
         xs={12}>
         <PickerButton
              color="primary"
              component="a"
                sx={{ 
                    mt: 2, 
                    mr:2,
                    backgroundColor: filterPressed ? 'primary.ignition' : 'primary.ignitionRed', 
                    textColor: 'fff' }}
                onClick={() => {
                  filterPressed();
                }}
            >
              { filterPressedValue ? 'Reset' : 'Filter' }
            </PickerButton>
            { filterPressedValue && 
          
             <PickerButton
              color="primary"
              component="a"
              onClick={() => {
                download();
              }}
              sx={{ 
                mt: 2, 
                backgroundColor: 'primary.ignition', 
                color: 'fff' }}>
              Download 
            </PickerButton>
            
            }
            <CSVLink 
              data={generateCSVData()} 
              color="primary"
              component="a"
              target="_blank"
              filename="chart-data.csv"
              ref={csvRef}
              style={{display: 'none'}}
              >Download CSV</CSVLink>

            <InfoContainer>
              <InfoIcon   
                  aria-owns={openFilter ? 'mouse-over-popover' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handleFilterOpen}
                  onMouseLeave={handleFilterClose}/>
            
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={openFilter}
                anchorEl={filterEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                onClose={handleDatesClose}
                disableRestoreFocus>
                  <Typography sx={{ p: 1, fontSize:12 }}>
                  To download the visible data filtered on the below chart, please click here.

                  </Typography>
                </Popover>
            </InfoContainer> 
            
        </Grid>
        

        <Grid item
         xl={3}
         lg={3}
         sm={3}
         xs={12}>
        </Grid>
       
          { filterPressedValue && 
           <Grid item
           xl={2}
           lg={2}
           sm={2}
           xs={12}>
          
          <PickerButton
           color="primary"
           component="a"
           href="https://github.com/UoS-Living-Lab/living_lab_data"
           target="blank"
           sx={{ 
             mt: 2, 
             backgroundColor: 'primary.ignition', 
             color: 'fff' }}>
           Full Data Repository 
          </PickerButton>
          <InfoContainer>
              <InfoIcon   
                  aria-owns={openFullData ? 'mouse-over-popover' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handleFullDataElOpen}
                  onMouseLeave={handleFullDataElClose}/>
            
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={openFullData}
                anchorEl={fullDataEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                onClose={handleFullDataElClose}
                disableRestoreFocus>
                  <Typography sx={{ p: 1, fontSize:12 }}>
                  To review and download the full dataset for sensors in the Living Lab (no time constraint), please click here.

                  </Typography>
                </Popover>
            </InfoContainer> 
            
          
          </Grid>
         
         }

         { filterPressedValue && 
         <>
          <Grid 
            item
            xl={2}
            lg={2}
            sm={2}
            xs={12}> 
            <PickerButton
              color="primary"
              component="a"
              href="../attachments/labdata-before-nbs.zip"
              target="blank"
              sx={{ 
                mt: 2, 
                backgroundColor: 'primary.ignition', 
                color: 'fff' }}>
              Data Before NBS
            </PickerButton>
            <InfoContainer>
              <InfoIcon   
                  aria-owns={openNbsData ? 'mouse-over-popover' : undefined}
                  aria-haspopup="true"
                  onMouseEnter={handleNbsDataElOpen}
                  onMouseLeave={handleNbsDataElClose}/>
            
              <Popover
                id="mouse-over-popover"
                sx={{
                  pointerEvents: 'none',
                }}
                open={openNbsData}
                anchorEl={nbsDataEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                onClose={handleNbsDataElClose}
                disableRestoreFocus>
                  <Typography sx={{ p: 1, fontSize:12 }}>
                  To download the dataset for measurements before installation of the green infrastructure,<br/>please click “Data Before NBS”.<br/>Please note that Construction of the raingarden was end of October 2020,<br/>and Construction of the green walls, green roof and SUDS trees was April 2021
                  </Typography>
                </Popover>
            </InfoContainer> 
            </Grid>
            <Grid item
            xl={5}
            lg={5}
            sm={5}
            md={12}
            xs={12}>
               <Typography sx={{ p: 1, fontSize:12, mt:4 }}>
                To download the full GitHub repository for pre-install data, please click <a href="https://github.com/UoS-Living-Lab/LivingLabData_BeforeGI">here</a>.
               </Typography>
            </Grid>
            </>
         }
        
        <Grid item
         xl={3}
         lg={3}
         sm={3}
         md={12}
         xs={12}>
        </Grid>
        </Grid>
        }
    </>
    
    );
}


const PickerWrapper = styled('div')({
    margin: "10px 0px"
});

const StyledPicker = styled(DesktopDatePicker)({
    margin: "0px 5px",
    display: 'inline'
});


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

const DownloadButton = styled(CSVLink)({
  color: '#fff',
  fontSize:13,
  padding:10,
  minWidth:150,
  '&:hover': {
      backgroundColor: '#d20a11',
      borderColor: '#d20a11',
      boxShadow: 'none',
    },
});

const InfoContainer = styled('div')({
  display: 'inline',
  position:'relative',
  top:'15px',
  left: '10px',
  marginRight: '15px'
})

const SectionTitle = styled('p')({
  fontWeight: 'bold',
  margin:'10px 0px',
  display:'flex',
  flexDirection:'row',
  justifyContent: 'flex-start'
});


const AverageButton = styled(Button)({
  color: '#000',
  fontSize:11,
  textDecoration: 'underline',
  padding:10,
  minWidth:150,
  background: 'none',
  paddingLeft: 0,
  marginLeft:0,
  '&:hover': {
      backgroundColor: '#d20a11',
      color:'#fff',
      borderColor: 'none',
      boxShadow: 'none',
    },
  '&:active': {
    backgroundColor: '#d20a11',
    color:'#fff',
    borderColor: 'none',
    boxShadow: 'none',
  },
})

