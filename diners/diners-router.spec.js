const request = require('supertest');
const server = require('../api/server');
const prepTestDB = require('../helpers/preptestDB');

beforeEach(prepTestDB);

describe('diner router', () => {
    describe('GET /api/diner/1', () => {
        it('returns 200 OK when user is logged in', async () => {
            let credentials = { username: 'jevonc', password: 'cochran' };

            const authorization = await request(server)
                .post('/api/auth/login/diners')
                .send(credentials)

            expect(authorization.status).toBe(200);

           return request(server)
                .get('/api/diner/1')
                .set('authorization', authorization.body.token)
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })
    })

    describe('PUT /api/diner/1', () => {
        it('returns 200 OK', async () => {
            let credentials = {username: 'jevonc', password: 'cochran'}
            let update = {username: 'jevonc', email: 'jevon.cochran@gmail.com', password: 'cochran', location: '1000 Broadway Ave, Oakland, CA'}

            await request(server)
                .post('/api/auth/login/diners')
                .send(credentials)

            return request(server)
                .put('/api/diner/1')
                .send(update)
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })
    })
})