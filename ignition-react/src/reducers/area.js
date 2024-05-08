import { LocationSearchingTwoTone } from "@mui/icons-material";

const areaState = {
    area: 'none',
    labArea: 'none',
    selectedMap: null,
    selectedDescription: null,
    selectedImages: null,
    areas:  [
        {
          value: 'rain_garden',
          label: 'Rain Garden',
          map: "/static/images/newMaps/small/rainGarden.jpg",
          areaDescription: "Rain Garden adjacent to CW Library Building on Peel Park Campus. Living Lab Location <a target='_blank' href='https://goo.gl/maps/NHHnpvP3A2TgTAgv5'>here</a>.",
          images: [
            {
              imageName: 'Raing Garden 1',
              small: '/static/images/live_pictures/small/rain_garden_1.jpg',
              large: '/static/images/live_pictures/large/rain_garden_1.jpg',
            },
            {
              imageName: 'Rain Garden 2',
              small: '/static/images/live_pictures/small/rain_garden_2.jpg',
              large: '/static/images/live_pictures/large/rain_garden_2.jpg',
            },
            {
              imageName: 'Rain Garden 3',
              small: '/static/images/live_pictures/small/rain_garden_3.jpg',
              large: '/static/images/live_pictures/large/rain_garden_3.jpg',
            },
            {
              imageName: 'Rain Garden 3',
              small: '/static/images/live_pictures/small/rain_garden_4.jpg',
              large: '/static/images/live_pictures/large/rain_garden_4.jpg',
            },
          ],
          labAreas: [ 
    
          ],
          sensors: [
            // Control Panel 1 PH1	6B72EE6F-43C3-4D31-BC07-C11BDAC355D6	Level	Water Level		? Rain Garden | SuDS
            {
              label: 'Water Level #1',
              value: 'water_level_rain',
              id: '6B72EE6F-43C3-4D31-BC07-C11BDAC355D6',
              type:'sel',
              unit: 'mm',
              selected: false,
            },
            // Control Panel 2 PH1	FC273DCD-9517-4023-B0E0-340AFDAB54FC	Level 1	Water Level		? Rain Garden | SuDS
            {
              label: 'Water Level #2',
              value: 'water_level2_rain',
              id: 'FC273DCD-9517-4023-B0E0-340AFDAB54FC',
              type:'sel',
              unit: 'mm',
              selected: false,
            },            
            // Control Panel 1 PH1	1506A486-DFBD-4EA4-B6CF-DCADDF944915	Moisture Sensor 2	Soil Moisture		? Rain Garden | SuDS
            {
              label: 'Soil Moisture #2',
              value: 'soil_moisture2_rain',
              id: '1506A486-DFBD-4EA4-B6CF-DCADDF944915',
              type:'sel',
              unit: '%',
              selected: false,
            },  
            // Control Panel 1 PH1	CB489E76-8FC5-463B-9989-DE53B3990F2A	Moisture Sensor 3	Soil Moisture		? Rain Garden | SuDS
            {
              label: 'Soil Moisture #3',
              value: 'soil_moisture3_rain',
              id: 'CB489E76-8FC5-463B-9989-DE53B3990F2A',
              type:'sel',
              unit: '%',
              selected: false,
            },  
          ]
        },
        {
          value: 'green_walls',
          label: 'Green Walls on Cockcroft Building',
          map: "/static/images/newMaps/small/walls.jpg",
          areaDescription: "Green Walls on Cockcroft Building and underground attenuation tank infront of the green walls, Peel Park Campus. Living Lab Location <a target='_blank' href='https://goo.gl/maps/NHHnpvP3A2TgTAgv5'>here</a>.",
          images: [
            {
              imageName: 'Green Wall 1',
              small: '/static/images/live_pictures/small/green_wall_1.jpg',
              large: '/static/images/live_pictures/large/green_wall_1.jpg',
            },
            {
              imageName: 'Green Wall 2',
              small: '/static/images/live_pictures/small/green_wall_2.jpg',
              large: '/static/images/live_pictures/large/green_wall_2.jpg',
            },
            {
              imageName: 'Green Wall 3',
              small: '/static/images/live_pictures/small/green_wall_3.jpg',
              large: '/static/images/live_pictures/large/green_wall_3.jpg',
            },
          ],
          sensors: [
            {
              label: 'Soil Moisture - Live Wall PH2 #1',
              value: 'live_wall_ph21',
              id: '31D220C9-9AC1-45A8-957D-31098B97F119',
              type:'sel',
              unit: '%',
              selected: false,
            },
            {
              label: 'Soil Moisture - Live Wall PH2 #2',
              value: 'live_wall_ph22',
              id: 'E64EED9C-71CF-4B78-AA46-83201794C851',
              type:'sel',
              unit: '%',
              selected: false,
            },
            {
              label: 'Soil Moisture - Live Wall PH2 #3',
              value: 'live_wall_ph23',
              id: '36B0F34A-DA05-495C-BF33-E5DA35F211F9',
              type:'sel',
              unit: '%',
              selected: false,
            },
            {
              label: 'Soil Moisture - Live Wall PH2 #4',
              value: 'live_wall_ph24',
              id: '8E2B3469-20A8-4A8B-8075-E6853F2FA1B5',
              type:'sel',
              unit: '%',
              selected: false,
            },
            {
              label: 'Soil Moisture - Live Wall PH2 #5',
              value: 'live_wall_ph25',
              id: '8E2B3469-20A8-4A8B-8075-E6853F2FA1B5',
              type:'sel',
              unit: '%',
              selected: false,
            },
            {
              label: 'CO2 Meter - 518781',
              value: 'co2_meter_wall',
              id: '4826C9E5-6C83-4D43-BEA8-537CB4ACF93B',
              type:'monnit',
              unit: 'ppm',
              selected: false,
            },
            // 91104E44-5D9F-45A8-B840-77299D4307FF,43,62671,Humidity - 518778,wall      
            {
              label: 'Cockcroft Internal Lobby - Humidity #2',
              value: 'humidity_wall',
              id: '91104E44-5D9F-45A8-B840-77299D4307FF',
              type:'monnit',
              labArea: 'all',
              unit: '%',
              selected: false,
            },
            // 68926C93-026C-4091-9942-84822DAD113B,43,62671,Humidity - 518776,wall
            {
              label: 'Cockcroft Internal Lobby - Humidity #1',
              value: 'humidity_wall2',
              id: '68926C93-026C-4091-9942-84822DAD113B',
              type:'monnit',
              labArea: 'all',
              unit: '%',
              selected: false,
            },      
            // FB0EF26D-EB67-4D53-B33B-9429022970DF,2,62671,Temperature - 713417,wall      
            {
              label: 'Cockcroft External Air Temperature #2',
              value: 'temperature_wall1',
              id: 'FB0EF26D-EB67-4D53-B33B-9429022970DF',
              type:'monnit',
              labArea: 'all',
              unit: '°C',
              selected: false,
            },      
            // 8FBFEE34-BFDC-4F35-A6E2-F8D6A6B0BAD8,2,62671,Temperature - 712997,wall      
            {
              label: 'Temperature - 712997',
              value: 'temperature_wall2',
              id: '8FBFEE34-BFDC-4F35-A6E2-F8D6A6B0BAD8',
              type:'monnit',
              unit: '°C',
              selected: false,
            },      
            // 55C7998D-7EF4-4357-9163-FD97625B3139,107,62671,LightSensor - 518773,wall      
            {
              label: 'LightSensor - 518773',
              value: 'temperature_wall3',
              id: '55C7998D-7EF4-4357-9163-FD97625B3139',
              type:'monnit',
              unit: 'Lux',
              selected: false,
            },        
       ],
          labAreas: [ 
              {
                label: 'Biodiversity Wall',
                value: 'biodeversity_wall',
                sensors: [],
              },
              {
                label: 'Seasonal Wall',
                value: 'seasonal_wall',
                sensors: [],
              },
              {
                label: 'Edible Wall',
                value: 'edible_wall',
                sensors: [],
              },
              {
                label: 'Polinator Wall',
                value: 'polinator_wall',
                sensors: [],
              }
          ],
        },
        {
          value: 'green_roof',
          label: 'Green Roof',
          map: "/static/images/newMaps/small/green_roof.jpg",
          areaDescription: "Green Roof on Lady Hale Building, Peel Park Campus. Living Lab Location <a target='_blank' href='https://goo.gl/maps/NHHnpvP3A2TgTAgv5'>here</a>.",
          images: [
            {
              imageName: 'Roof 1',
              small: '/static/images/live_pictures/small/roof_2.jpg',
              large: '/static/images/live_pictures/large/roof_2.jpg',
            },
           
          ],
          labAreas: [ 
            {
              label: 'Meadow Roof',
              value: 'meadow_roof',
              sensors: [],
            },
            {
              label: 'Sedum Roof',
              value: 'sedum_roof',
              sensors: [],
            },
            {
              label: 'Brown Roof',
              value: 'brown_roof',
              sensors: [],
            },
            {
              label: 'Semi-Intensive',
              value: 'semi_intensive',
              sensors: [],
            }
          ],
          sensors: [

            // 536949	Tem - Library Internal 01 - 536949	Lady Hale	Internal Air Temperature		Green Roof (Lady Hale)
            {
              label: 'Lady Hale Internal Temperature #1',
              value: 'roof_internaltemp1',
              id: 'A9C7FD60-9C24-416F-B47D-054115C3F44D',
              type:'monnit',
              labArea: 'all',
              unit: '°C',
              selected: false,
            },
            // 712999	Tem - Library Internal 02 - 712999	Lady Hale	Internal Air Temperature		Green Roof (Lady Hale)
            {
              label: 'Lady Hale Internal Temperature #2',
              value: 'roof_internaltemp2',
              id: '0F1A3259-C792-4BC6-B3E5-95205A513782',
              type:'monnit',
              labArea: 'all',
              unit: '°C',
              selected: false,
            },
            // 782904	Tem - Library Internal 03 - 782904	Lady Hale	Internal Air Temperature		Green Roof (Lady Hale)
            {
              label: 'Lady Hale Internal Temperature #3',
              value: 'roof_internaltemp3',
              id: '00C21BBB-2FFF-4234-81BF-FF31B8EB40F1',
              type:'monnit',
              labArea: 'all',
              unit: '°C',
              selected: false,
            },
            // 782932	Tem - Library Internal 04 - 782932	Lady Hale	Internal Air Temperature		Green Roof (Lady Hale)
            {
              label: 'Lady Hale Internal Temperature #4',
              value: 'roof_internaltemp4',
              id: '01D04542-A3AC-4D25-A0E6-AB059D48F310',
              type:'monnit',
              labArea: 'all',
              unit: '°C',
              selected: false,
            },
            // Roof top irrigation 1	CF2B25F5-07E7-46DE-94B5-0680350B7C22	Meadow
            {
              label: 'Meadow Soil Moisture',
              value: 'roof_meadow_soil_moisture',
              id: 'CF2B25F5-07E7-46DE-94B5-0680350B7C22',
              type:'sel',
              unit: '%',
              labArea: 'meadow_roof',
              selected: false,
            },
            // Roof top irrigation 1	E15A2D5B-FFB3-4049-AD7D-24FCF6CF71BF	Planters 
            {
              label: 'Planters Soil Moisture',
              value: 'roof_planters_soil_moisture',
              id: 'E15A2D5B-FFB3-4049-AD7D-24FCF6CF71BF',
              type:'sel',
              labArea: 'all',
              unit: '%',
              selected: false,
            },
            // Roof top irrigation 1	34BBD2B5-BA22-4850-9D34-7FB001EE65D9	WonderWall
            {
              label: 'Industrial Wall Soil Moisture',
              value: 'roof_wonderwall_soil_moisture',
              id: '34BBD2B5-BA22-4850-9D34-7FB001EE65D9',
              type:'sel',
              labArea: 'all',
              unit: '%',
              selected: false,
            },
            // Roof top irrigation 1	61A764A7-8EBD-425A-A8EC-FDE99666E3A9	Climbers
            {
              label: 'Climbers Soil Moisture',
              value: 'roof_climbers_soil_moisture',
              id: '61A764A7-8EBD-425A-A8EC-FDE99666E3A9',
              type:'sel',
              labArea: 'all',
              unit: '%',
              selected: false,
            },
            // Roof top irrigation 2	789C4CEB-3BB0-4489-95A2-09752919FC36	Sedum
            {
              label: 'Sedum Soil Moisture',
              value: 'roof_sedum_soil_moisture',
              id: '789C4CEB-3BB0-4489-95A2-09752919FC36',
              type:'sel',
              unit: '%',
              labArea: 'sedum_roof',
              selected: false,
            },
            // Roof top irrigation 2	43852C83-8D82-4A47-B69A-6F4279E10B64	Ignition-mix 
            {
              label: 'Perennials Mix Soil Moisture',
              value: 'roof_ignition_soil_moisture',
              id: '43852C83-8D82-4A47-B69A-6F4279E10B64',
              type:'sel',
              unit: '%',
              selected: false,
            },
            // Roof top irrigation 2	657AAB0E-2AF2-43B9-8328-7AB99CE13B9A	Tree
            {
              label: 'Tree Soil Moisture',
              value: 'roof_tree_soil_moisture',
              id: '657AAB0E-2AF2-43B9-8328-7AB99CE13B9A',
              type:'sel',
              unit: '%',
              labArea: 'semi_intensive',
              selected: false,
            },
          ]
        },
        {
          value: 'sustainable_drainage',
          label: 'Sustainable Drainage Trees (SUDS)',
          map: "/static/images/newMaps/small/trees.jpg",
          areaDescription: "Sustainable Drainage Trees (SUDS) adjacent to the New Adelphi Building, Peel Park Campus. Living Lab Location <a target='_blank' href='https://goo.gl/maps/NHHnpvP3A2TgTAgv5'>here</a>..",
          images: [
            {
              imageName: 'Trees 1',
              small: '/static/images/live_pictures/small/trees_1.jpg',
              large: '/static/images/live_pictures/large/trees_1.jpg',
            },
            {
              imageName: 'Trees 2',
              small: '/static/images/live_pictures/small/trees_2.jpg',
              large: '/static/images/live_pictures/large/trees_2.jpg',
            },
          ],
          labAreas: [ 
    
          ],
          sensors: [
            // Control Panel 1 PH1	6B72EE6F-43C3-4D31-BC07-C11BDAC355D6	Level	Water Level		? Rain Garden | SuDS
            {
              label: 'Water Level #1',
              value: 'water_level_suds',
              id: '6B72EE6F-43C3-4D31-BC07-C11BDAC355D6',
              type:'sel',
              unit: 'mm',
              selected: false,
            },
            // Control Panel 2 PH1	FC273DCD-9517-4023-B0E0-340AFDAB54FC	Level 1	Water Level		? Rain Garden | SuDS
            {
              label: 'Water Level #2',
              value: 'water_level2_suds',
              id: 'FC273DCD-9517-4023-B0E0-340AFDAB54FC',
              type:'sel',
              unit: 'mm',
              selected: false,
            },            
            // Control Panel 1 PH1	1506A486-DFBD-4EA4-B6CF-DCADDF944915	Moisture Sensor 2	Soil Moisture		? Rain Garden | SuDS
            {
              label: 'Soil Moisture #2',
              value: 'soil_moisture2_suds',
              id: '1506A486-DFBD-4EA4-B6CF-DCADDF944915',
              type:'sel',
              unit: '%',
              selected: false,
            },  
            // Control Panel 1 PH1	CB489E76-8FC5-463B-9989-DE53B3990F2A	Moisture Sensor 3	Soil Moisture		? Rain Garden | SuDS
            {
              label: 'Soil Moisture #3',
              value: 'soil_moisture3_suds',
              id: 'CB489E76-8FC5-463B-9989-DE53B3990F2A',
              type:'sel',
              unit: '%',
              selected: false,
            },  
          ]
        },
        {
          value: 'industrial_green',
          label: 'Industrial Green Wall on Lady Hale Building',
          map: "/static/images/newMaps/small/industrialwall.jpg",
          areaDescription: "Industrial Green Wall on Lading Hale Building, Peel Park Campus. Living Lab Location <a target='_blank' href='https://goo.gl/maps/NHHnpvP3A2TgTAgv5'>here</a>.",
          images: [
            {
              imageName: 'Industrial Wall',
              small: '/static/images/live_pictures/small/industrial_wall.jpg',
              large: '/static/images/live_pictures/large/industrial_wall.jpg',
            }
          ],
          labAreas: [ 
    
          ],
          sensors: [
            // 782147	Tem - Plant Room 01 - 782147	Lady Hale Plant Room	External Air Temperature		Industrial Green Wall (Lady Hale)
            {
              label: 'Plant Room 01 Temperature',
              value: 'industrial_temperature',
              id: 'A2611924-6ED7-4464-8421-BE32FE5DA9D3',
              type:'monnit',
              labArea: 'all',
              unit: '°C',
              selected: false,
            },
            // 786103	Tem - Plant Room 02 - 786103	Lady Hale Plant Room	External Air Temperature		Industrial Green Wall (Lady Hale)
            {
              label: 'Plant Room 01 Temperature',
              value: 'industrial_temperature2',
              id: '2AA3E48D-0129-4CBF-B5BE-CAC5BD5B0922',
              type:'monnit',
              labArea: 'all',
              unit: '°C',
              selected: false,
            },
            // 838697	Tem - Plant Room 03 - 838697	Lady Hale Plant Room	External Air Temperature		Industrial Green Wall (Lady Hale)
            {
              label: 'Plant Room 01 Temperature',
              value: 'industrial_temperature3',
              id: '03813D0B-CC45-4CBB-AE2F-C029B98FF64C',
              type:'monnit',
              labArea: 'all',
              unit: '°C',
              selected: false,
            },
          ]
        },
        // {
        //   value: 'attenuation_tank',
        //   label: 'Central Attenuation Tank',
        //   labAreas: [ 
    
        //   ],
        // }
      ],
    labAreas: {
      green_walls: [ 
       {
         label: 'Biodiversity Wall',
         value: 'biodeversity_wall',
         sensors: [
              {
                label: 'Soil Moisture - Live Wall PH2 #1',
                value: 'live_wall_ph21',
                id: '31D220C9-9AC1-45A8-957D-31098B97F119',
                type:'sel',
                unit: '%',
                labArea: 'pollinator_wall',
                selected: false,
              },
              {
                label: 'Soil Moisture - Live Wall PH2 #2',
                value: 'live_wall_ph22',
                id: 'E64EED9C-71CF-4B78-AA46-83201794C851',
                type:'sel',
                unit: '%',
                labArea: 'edible_wall',
                selected: false,
              },
              {
                label: 'Soil Moisture - Live Wall PH2 #3',
                value: 'live_wall_ph23',
                id: '36B0F34A-DA05-495C-BF33-E5DA35F211F9',
                type:'sel',
                unit: '%',
                labArea: 'biodeversity_wall',
                selected: false,
              },
              {
                label: 'Soil Moisture - Live Wall PH2 #4',
                value: 'live_wall_ph24',
                id: '8E2B3469-20A8-4A8B-8075-E6853F2FA1B5',
                type:'sel',
                unit: '%',
                labArea: 'seasonal_wall',
                selected: false,
              },
              {
                label: 'CO2 Meter',
                value: 'co2_meter_wall',
                id: '4826C9E5-6C83-4D43-BEA8-537CB4ACF93B',
                type:'monnit',
                unit: 'ppm',
                selected: false,
              },
              // 91104E44-5D9F-45A8-B840-77299D4307FF,43,62671,Humidity - 518778,wall      
              {
                label: 'Cockcroft Internal Lobby - Humidity #2',
                value: 'humidity_wall',
                id: '91104E44-5D9F-45A8-B840-77299D4307FF',
                type:'monnit',
                unit: '%',
                selected: false,
              },
              // 68926C93-026C-4091-9942-84822DAD113B,43,62671,Humidity - 518776,wall
              {
                label: 'Cockcroft Internal Lobby - Humidity #1',
                value: 'humidity_wall2',
                id: '68926C93-026C-4091-9942-84822DAD113B',
                type:'monnit',
                unit: '%',
                selected: false,
              },      
              // FB0EF26D-EB67-4D53-B33B-9429022970DF,2,62671,Temperature - 713417,wall      
              {
                label: 'Cockcroft External Air Temperature #1',
                value: 'temperature_wall1',
                id: 'FB0EF26D-EB67-4D53-B33B-9429022970DF',
                type:'monnit',
                unit: '°C',
                selected: false,
              },      
              // 8FBFEE34-BFDC-4F35-A6E2-F8D6A6B0BAD8,2,62671,Temperature - 712997,wall      
              {
                label: 'Cockcroft External Air Temperature #2',
                value: 'temperature_wall2',
                id: '8FBFEE34-BFDC-4F35-A6E2-F8D6A6B0BAD8',
                type:'monnit',
                unit: '°C',
                selected: false,
              },      
              // 55C7998D-7EF4-4357-9163-FD97625B3139,107,62671,LightSensor - 518773,wall      
              {
                label: 'LightSensor - 518773',
                value: 'temperature_wall3',
                id: '55C7998D-7EF4-4357-9163-FD97625B3139',
                type:'monnit',
                unit: 'Lux',
                selected: false,
              },        
         ],
       },
       {
         label: 'Seasonal Wall',
         value: 'seasonal_wall',
         sensors: [],
       },
       {
         label: 'Edible Wall',
         value: 'edible_wall',
         sensors: [],
       },
       {
         label: 'Polinator Wall',
         value: 'polinator_wall',
         sensors: [],
       }
     ],
     green_roof:[
      {
        label: 'Meadow Roof',
        value: 'meadow_roof',
        sensors: [],
      },
      {
        label: 'Sedum Roof',
        value: 'sedum_roof',
        sensors: [],
      },
      {
        label: 'Brown Roof',
        value: 'brown_roof',
        sensors: [],
      },
      {
        label: 'Semi-Intensive',
        value: 'semi_intensive',
        sensors: [],
      },
     ]
   },      
}
const areaReducer = (state = areaState, action) => {
    switch (action.type){
        case 'SET_AREA':
            return { ...state, area: action.area};
        case 'SET_LAB_AREA':
            console.log('setting lab area');
            console.dir(action);
            return {...state, labArea:action.labArea};
        case 'SET_SELECTED_MAP':
          console.log('SET_SELECTED_MAP');
          let areaMap = '';
          let areaImages = [];
        
          state.areas.forEach(element => {
              if(element.value == action.map) {
                areaMap = element.map;
                areaImages = element.images;
              }
          });
          return {...state, selectedMap: areaMap, selectedImages: areaImages};

          case 'SET_AREA_DESCRIPTION':
            console.log('SET_AREA_DESCRIPTION');
            let areaDescription = '';
            state.areas.forEach(element => {
                if(element.value === action.map) areaDescription = element.areaDescription;
            });
            return {...state, selectedDescription: areaDescription};
        default:
            return state;

    }
}
export default areaReducer;



