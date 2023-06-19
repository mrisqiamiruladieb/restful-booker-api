const request = require('supertest')
const baseUrl = require('../../env')

describe('Get Request Health Check', () => {
    it('Get Health Check', async () => {
        const response = request(baseUrl())
        .get('/ping')
        console.log((await response).status)
        // console.log((await response).body)
    })
})