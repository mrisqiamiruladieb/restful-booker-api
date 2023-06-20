const { expect } = require('chai')
const request = require('supertest')
const baseUrl = require('../../env')

describe('Get Request Health Check', () => {
    const response = request(baseUrl())
    .get('/ping')

    it('response status equal to 201', async () => {
        expect((await response).status).to.equal(201)
    })

})