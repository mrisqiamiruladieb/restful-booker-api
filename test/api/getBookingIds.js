const request = require('supertest')
const baseUrl = require('../../env')

describe('Get Request Booking Ids', () => {
    it('Get Booking Ids', async () => {
        const response = request(baseUrl())
        .get('/booking')
        // .get('/booking?firstname=sally&lastname=brown')
        // .get('/booking?checkin=2014-03-13&checkout=2014-05-21')
        console.log((await response).status)
        console.log((await response).body)
    })
})