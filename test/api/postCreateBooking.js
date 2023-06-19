const request = require('supertest')
const baseUrl = require('../../env')

describe('Post Request Create Booking', () => {
    it('Post Create Booking', async () => {
        const response = request(baseUrl())
        .post('/booking')
        .send({
            "firstname" : "Jim",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})