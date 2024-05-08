import makeQuery from "../utils/sql.js";
import makeMoveQuery from "../utils/mysql.js";
const sensors = {
   listSensors(req,res){
      makeQuery('SELECT * FROM MONNIT_SENSORS', res);
   },
   getMonnitSensor(req, res){
      let sensorId = req.params.sensorId; '';
      let startDate = req.params.startDate;
      let endDate = req.params.endDate;
      // SELECT CAST(MR.messageDate AS DATE) as x,
      // ROUND(avg(CAST(MR.rawData AS FLOAT)),2) as y
      // from MONNIT_READINGS as MR
      // LEFT JOIN MONNIT_SENSORS MS
      // on MR.sensorID = MS.sensorID
      // where CAST(MR.messageDate as date) >= '2021-11-20'
      // and CAST(MR.messageDate as date) <= '2021-12-12'
      // AND MS.sensorID = '03813D0B-CC45-4CBB-AE2F-C029B98FF64C'
      // GROUP BY CAST(MR.messageDate AS DATE)
      // ORDER BY CAST(MR.messageDate AS DATE) ASC
      makeQuery(`SELECT CAST(MR.messageDate AS DATE) as x,
                  ROUND(avg(CAST(MR.rawData AS FLOAT)),2) as y
                  from MONNIT_READINGS as MR
                  LEFT JOIN MONNIT_SENSORS MS
                  on MR.sensorID = MS.sensorID
                  where CAST(MR.messageDate as date) >= '${startDate}'
                  AND CAST(MR.messageDate as date) <= '${endDate}'
                  AND MS.sensorID = '${sensorId}'
                  GROUP BY CAST(MR.messageDate AS DATE)
                  ORDER BY CAST(MR.messageDate AS DATE) ASC`, res);
   },
   getSelSensor(req, res){
      let sensorId = req.params.sensorId; 
      let startDate = req.params.startDate;
      let endDate = req.params.endDate;
      makeQuery(`SELECT CAST(SU.lastUpdate AS DATE) as x,
                  ROUND(AVG(CAST(readings.readingValue AS FLOAT)),2) as y
                  FROM SEL_READINGS as readings
                  LEFT JOIN SEL_SENSORS as sensors
                  on readings.sensorGUID = sensors.sensorGUID
                  LEFT JOIN SEL_UPDATES SU
                        on readings.readingGUID = SU.readingGUID
                  WHERE CAST(SU.lastUpdate as date)  >= '${startDate}'
                  AND CAST(SU.lastUpdate as date)  <= '${endDate}'
                  AND sensors.sensorGUID = '${sensorId}'
                  GROUP BY CAST(SU.lastUpdate AS DATE)
                  ORDER BY CAST(SU.lastUpdate AS DATE) ASC`, res);
   },
   getTTNSensor(req, res)
   {
      let sensorId = req.params.sensorId;
      let startDate = req.params.startDate;
      let endDate = req.params.endDate;
      makeQuery(`SELECT CAST(TD.received_at AS DATE) as x,
               ROUND(AVG(CAST(reading.sensor_value AS FLOAT)),2) as y
               FROM TTN_READINGS AS reading
               LEFT JOIN TTN_DATETIMES TD
               on reading.uplink_guid = TD.uplink_guid
               WHERE CAST(TD.received_at as date)  >= '${startDate}'
               AND CAST(TD.received_at as date)  <= '${endDate}'
               and sensor_guid = '${sensorId}'
               GROUP BY CAST(TD.received_at AS DATE)
               ORDER BY CAST(TD.received_at AS DATE) ASC`,res)
   },
   getMoveSensor(req,res)
   {

      let sensorId = req.params.sensorId;
      let startDate = req.params.startDate;
      let endDate = req.params.endDate;

      makeMoveQuery(`SELECT MAX(reading_date) as date, 
                     ROUND(AVG(grams_per_kg),2) as grams_per_kg, 
                     ROUND(AVG(humidity),2) as humidity, 
                     ROUND(AVG(wetbulb_celsius),2) as wetbulb_celsius
                     FROM readings
                     WHERE sensor_id = '${sensorId}'
                     and CAST(reading_date as date)  >= '${startDate}'
                     and CAST(reading_date as date) <= '${endDate}'
                     GROUP BY DAY(reading_date)`,res);
      

   }
}


export default sensors;
