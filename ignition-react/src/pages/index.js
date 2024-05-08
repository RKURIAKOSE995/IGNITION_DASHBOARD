import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import { ChartBar } from 'src/icons/chart-bar';
import { ChartPickers } from 'src/components/dashboard/chartpickers';
import React from 'react';
import { MapCard } from 'src/components/dashboard/map';
import { TemperatureActivity } from 'src/components/dashboard/temperature-activity';
import { SolarVoltage } from 'src/components/dashboard/solarvoltage';
import store from 'src/store';
import { Provider, useSelector } from 'react-redux';
import { AverageTemperature } from 'src/components/average-temperature';
console.log('Initial state: ', store.getState())
const Dashboard = () => {


  const mapUrl = useSelector(state =>  state.areas.selectedMap);
  const areaDescription = useSelector(state => state.areas.selectedDescription);
  const filterSelected = useSelector(state => state.pickers.filterPressed);
  const areaImages = useSelector(state => state.areas.selectedImages);

  return (
  <Provider store={store}>
    <Head>
      <title>
        Dashboard | Ignition
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
           
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
          
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
          
            {/* <TasksProgress /> */}
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
        
          </Grid>
          <Grid 
                      lg={12}
                      md={12}
                      xl={12}
                      xs={12}
          item >
              <ChartPickers />

          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            {/* Add here */}
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {filterSelected && 
            <>
              <AverageTemperature sx={{ marginBottom: 2}} />
            </>
            }
            { mapUrl && 
               <MapCard mapurl={mapUrl} 
               mapdescription={areaDescription}
               images={areaImages} />
            }
             { filterSelected && 
             <>
                <TotalCustomers  sx={{ marginTop: 2}} />
                <TemperatureActivity  sx={{ marginTop: 2}} />
                <SolarVoltage  sx={{ marginTop: 2}} />
             </>
              }
             

          
            </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
          </Grid>
        </Grid>
      </Container>
    </Box>
  </Provider>
  );
}

Dashboard.getLayout = (page) => (
  <Provider store={store}>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </Provider>
);

export default Dashboard;
