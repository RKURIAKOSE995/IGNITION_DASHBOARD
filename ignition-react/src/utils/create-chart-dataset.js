import { format } from 'date-fns'

export const createDataset = (response, sensorName, sensorUnit, sensorId) => {
    response.forEach((item) => {
        item.x = format(new Date(item.x), 'dd MMM yyyy');
    });

    let R = Math.floor((Math.random() * 127) + 127);
    let G = Math.floor((Math.random() * 127) + 127);
    let B = Math.floor((Math.random() * 127) + 127);
    
    let rgb = (R << 16) + (G << 8) + B;
    let pastelColor = `#${rgb.toString(16)}`; 

    return  {
        id: sensorId,
        backgroundColor: pastelColor,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: response,
        label: `${sensorName} - ${sensorUnit}` ,
        sensorUnit: sensorUnit,
        tension: 0.1,
        lineTension: 0.3
      };
  };