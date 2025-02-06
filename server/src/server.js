const http = require('http');
const app = require('./app');

const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require('./model/planets.model');
const { loadLaunchData } = require('./model/launches.model');
const PORT = process.env.PORT || 8000





const server = http.createServer(app);

async function startServer(params) {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchData();

  server.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
  });
}
startServer();

// to orgainze the code, we can create a new folder called routes and move the routes to that folder    
// also it allows us to response to differrnt types of requests in different files
// not just HTTP , webScoket, etc
