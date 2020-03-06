const request = require('supertest');
const server = require('../api/server');

describe('operator router', () => {
    describe('GET /api/operator/1', () => {
        it('returns 200 okay when logged in', async () => {
            let credentials = {username: 'juanz', password: 'zamora'}
            await request(server)
                .post('/api/auth/login/operators')
                .send(credentials)

            return request(server)
                .get('/api/operator/1')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })
    })
})