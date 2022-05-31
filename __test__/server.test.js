'use strict';

const server= require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);


describe('API Server', () => {
    test('home page section', async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('hellow world');
    });

    
    test('get the file with data', async () => {
        const response = await request.get('/data');
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object');

    });

    it('handle not found request', async () => {
        const response = await request.get('/abc');
        expect(response.status).toEqual(404);

    });
    it('handle server internal errors', async () => {
        const response = await request.get('/bad');
        expect(response.status).toEqual(500);
    })
})
