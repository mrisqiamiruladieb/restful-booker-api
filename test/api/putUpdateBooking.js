const request = require('supertest')
const baseUrl = require('../../env')

describe('Put Request Update Booking', () => {
    it('Put Update Booking', async () => {
        const response = request(baseUrl())
        // .put('/booking/:id')
        .put('/booking/1')
        .send({
            "firstname" : "James",
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