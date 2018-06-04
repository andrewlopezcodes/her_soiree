require('dotenv').config();

const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require('cors');
const her_soireeRoutes = require('./routes/her_soiree');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (request, response)=>{
  response.send('her_soiree: Slash route is running');
});

app.use('/her_soiree', her_soireeRoutes)

app.listen(process.env.PORT, ()=> {
  console.log(`her_soiree: Application is listening on port no. ${process.env.PORT}...`)
});
