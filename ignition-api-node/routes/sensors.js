import express from 'express'
import sensors from '../controllers/sensors.js';

const router  = express.Router()

router.get('/index', sensors.listSensors)
//http://localhost/api/sensors/monnit/2AA3E48D-0129-4CBF-B5BE-CAC5BD5B0922/2021-11-20/2021-12-12
router.get('/monnit/:sensorId/:startDate/:endDate', sensors.getMonnitSensor);

//http://localhost/api/sensors/sel/5B111000-F4DF-4AF6-92DD-05A850146131/2021-11-20/2021-12-12
router.get('/sel/:sensorId/:startDate/:endDate', sensors.getSelSensor)


//http://localhost/api/sensors/ttn/043B67CD-6903-456C-A697-61E07BC7556E/2021-11-20/2021-12-12
router.get('/ttn/:sensorId/:startDate/:endDate', sensors.getTTNSensor);

router.get('/move/:sensorId/:startDate/:endDate', sensors.getMoveSensor);
export default router
 