import express from 'express';
import sensorRoutes from './routes/sensors.js';

// const Joi = require('joi'); //used for validation
const app = express();
app.use(express.json());
 
 
app.use('/api/sensors', sensorRoutes); //to use the routes

 

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

export default app;