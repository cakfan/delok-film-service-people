const request = require('supertest')
const app = require('../app')

describe('People module', () => {
    describe('GET list people', () => {
        describe('GET /people', () => {
            it('should return success', async () => {
                await request(app)
                    .get('/people')
                    .expect('Content-Type', /json/)
                    .expect(200)
            })
        })
        describe('POST /people', () => {
            it('should return success', async () => {
                await request(app)
                    .post('/people')
                    .send({
                        slug: "people-satu",
                        name: "People Satu",
                        gender: "male"
                    })
                    .expect('Content-Type', /json/)
                    .expect(200)
            })
            it('should return invalid', async () => {
                await request(app)
                    .post('/people')
                    .send({})
                    .expect('Content-Type', /json/)
                    .expect(406)
            })
        })
        describe('DELETE /people', () => {
            it('should return success', async () => {
                await request(app)
                    .delete('/people/4')
                    .expect('Content-Type', /json/)
                    .expect(200)
            })
            it('should return not found', async () => {
                await request(app)
                    .delete('/people/4')
                    .expect('Content-Type', /json/)
                    .expect(404)
            })
        })
    })
})
