const http = require('http');
const app = require('./app');

const { loadPlanetsData } = require('./model/planets.model');
const PORT = process.env.PORT || 8000
const server = http.createServer(app);


async function startServer(params) {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
  });
}
startServer();

// to orgainze the code, we can create a new folder called routes and move the routes to that folder    
// also it allows us to response to differrnt types of requests in different files
// not just HTTP , webScoket, etc
