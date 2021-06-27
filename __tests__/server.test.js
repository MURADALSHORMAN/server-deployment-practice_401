xtest('adds 1+2 to be 3',()=>{
    expect(1+2).toBe(3)
});

xtest('adds 1+2 to be 3',()=>{
    expect(1+2).toBe(4)
});

'use strict';
const { response } = require('express');
const supertest=require('supertest');
const server=require('../server');
const request=supertest(server.app);

describe('API Server',()=>{
    it('handels bad requstes',async()=>{
        const response= await request.get('/foo');
        expect(response.status).toEqual(404);
    });

    it('handels errors',async()=>{
        const response=await request.get('/bad');
        expect(response.status).toEqual(500);
    });

    it('handels correct route',async()=>{
        const response=await request.get('/');
        expect(response.status).toEqual(200);
    })


})