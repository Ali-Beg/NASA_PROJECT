const exppress = require('express');
const { 
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
} = require('./launches.controller');

const launchesRouter=exppress.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);
launchesRouter.delete('/:id',httpAbortLaunch);
// till now i have created the routes for the launches and the planets and now i will create the routes for the index file


module.exports=launchesRouter;
