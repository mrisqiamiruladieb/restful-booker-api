const { expect } = require('chai')
const request = require('supertest')
const baseUrl = require('../../env')

describe('Get Request Booking Ids', () => {
    const response = request(baseUrl())
    .get('/booking')
    // .get('/booking?firstname=sally&lastname=brown')
    // .get('/booking?checkin=2014-03-13&checkout=2014-05-21')

    it('response status equal to 200', async () => {
        expect((await response).status).to.equal(200)
    })

})