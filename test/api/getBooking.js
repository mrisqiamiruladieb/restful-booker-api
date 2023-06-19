const request = require('supertest')
const baseUrl = require('../../env')

describe('Get Request Booking', () => {
    it('Get Booking', async () => {
        const response = request(baseUrl())
        // .get('/booking/:id')
        .get('/booking/1')
        console.log((await response).status)
        console.log((await response).body)
    })
})