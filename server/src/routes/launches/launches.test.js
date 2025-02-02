const request = require('supertest');
const app=require('../../app');



describe('Test GET /launches', () => {
    test('IT should response with 200 success', async ()=>{
        const response= await request(app)
        .get('/launches')
        .expect('Content-Type', /json/)
        .expect(200);
    });
});


const completeLaunchData={
    mission: 'USS Enterprise',
    rocket: 'NCC 1701-D',
    launchDate: 'January 4, 2028',
    target: 'Kepler-186 f'
};
const launchDataWithoutTheDate={
    mission: 'USS Enterprise',
    rocket: 'NCC 1701-D',
    target: 'Kepler-186 f'
};

const launchDataWithInvalidDate={
    mission: 'USS Enterprise',
    rocket: 'NCC 1701-D',
    launchDate: 'Zoot',
    target: 'Kepler-186 f'   
};

describe('Test POST /launches', () => {
    test('IT should response with 201 created', async ()=>{
        const response= await request(app)
            .post('/launches')
            .send(completeLaunchData)
            .expect('Content-Type', /json/)
            .expect(201); 
    
        const requestDate = new Date(completeLaunchData.launchDate).valueOf();
        const responseDate  =new Date(response.body.launchDate).valueOf();
        expect(responseDate).toBe(requestDate); 
        expect(response.body).toMatchObject(launchDataWithoutTheDate);    

    });

    test('IT catch missing required propertiens', async ()=>{
        const response= await request(app)
            .post('/launches')
            .send(launchDataWithoutTheDate)
            .expect('Content-Type', /json/)
            .expect(400);
        
        expect(response.body).toStrictEqual({
            error: 'Missing required launch property'
        });
    });


    test('IT catch invalid dates', async ()=>{
        const response= await request(app)
            .post('/launches')
            .send(launchDataWithInvalidDate)
            .expect('Content-Type', /json/)
            .expect(400);
        
        expect(response.body).toStrictEqual({
            error: 'Invalid launch date'
        });
    });

});
