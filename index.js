// Server and DB setup
require('dotenv').config();
const express = require('express');
const dbConnection = require('./db/connections');

const { DB_URL } = process.env;

const app = express();

app.disable('x-powered-by');
app.set('port', 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const startServer = async () => {
  try {
    app.listen(app.get('port'), () =>
      console.log(`Server is running on http://localhost:${app.get('port')}`)
    );
    await dbConnection(DB_URL);
    console.log('mongo connected');
  } catch (err) {
    console.log(`Error while connecting to DB ==> ${err}`);
  }
};

// Start the server
startServer();
