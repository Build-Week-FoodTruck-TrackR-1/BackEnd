const request = require('supertest');
const server = require('../api/server');
const prepTestDB = require('../helpers/preptestDB');

beforeEach(prepTestDB);

describe('auth router', () => {
    // beforeEach(async () => {
    //     await db('operators').truncate();
    //     await db('diners').truncate();
    // })

    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })

    describe('POST /api/auth/register/operators', () => {
        it('should return  201 OK', async () => {
            let credentials = { username: 'oprah', password: 'winfrey', email: 'oprah.winfrey@gmail.com' };
    
            return request(server)
                .post('/api/auth/register/operators')
                .send(credentials)
                .then(res => {
                    expect(res.status).toBe(201)
                })
        })
    
        it('should return 400 BAD REQUEST', async () => {
            let credentials = { username: 'barack', password: 'obama' };
    
            return request(server)
                .post('/api/auth/register/operators')
                .send(credentials)
                .then(res => {
                    expect(res.status).toBe(400);
                })
        })
    })

    describe('POST /api/auth/register/diners', () => {
        it('should return 201 OK', async () => {
            let credentials = { username: 'michael', email: 'michael.jackson@gmail.com', password: 'beatit', location: 'neverland' };

            return request(server)
                .post('/api/auth/register/diners')
                .send(credentials)
                .then(res => {
                    expect(res.status).toBe(201);
                })
        })

        it('should return 400 BAD REQUEST', () => {
            let credentials = { username: 'ladygaga', password: 'badromance', location: 'neverland' }; 

            return request(server)
                .post('/api/auth/register/diners')
                .send(credentials)
                .then(res => {
                    expect(res.status).toBe(400);
                })
        })
    })

    describe('POST /api/auth/login/operators', () => {
        it('should return 200 OK', async () => {
            let signup = { username: 'oprah', password: 'winfrey', email: 'oprah.winfrey@gmail.com' };
            let credentials = { username: 'oprah', password: 'winfrey' }; 

            await request(server)
                .post('/api/auth/register/operators')
                .send(signup)

            return request(server)
                .post('/api/auth/login/operators')
                .send(credentials)
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })
    })

    describe('POST /api/auth/login/diners', () => {
        it('should return 200 OK', async () => {
            let signup = { username: 'michael', email: 'michael.jackson@gmail.com', password: 'beatit', location: 'neverland' };
            let credentials = { username: 'michael', password: 'beatit' };

            await request(server)
                .post('/api/auth/register/diners')
                .send(signup)

            return request(server)
                .post('/api/auth/login/diners')
                .send(credentials)
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })
    })
})



