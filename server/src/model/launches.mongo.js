const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
    flightNumber:{
        type:Number,
        required:true,
    },
    launchDate:{
        type:Date,
        requied:true,
    },
    mission:{
        type:String,
        required:true,
    },
    rocket:{
        type:String,
        required:true,
    },         
    target:{
        type:String,
        requied:true,
    },
    customers:[ String ],

    upcoming:{
        type:Boolean,
        required:true,
    },
    success:{
        type:Boolean,
        required:true,
        default:true,
    },

});

// connect launchesSchema withe the launches collections
module.exports = mongoose.model('Launch', launchesSchema);


// {
//     flightNumber: 100,
//     mission : 'Kepler Exploration X',
//     rocket : 'Explorer IS1',
//     launchDate : new Date('December 27, 2030'),
//     target : 'Kepler-442 b',
//     customer : ['ZTM', 'NASA'],
//     upcoming : true,
//     success : true,
// }

