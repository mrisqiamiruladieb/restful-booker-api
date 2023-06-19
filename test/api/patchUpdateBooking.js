const request = require('supertest')
const baseUrl = require('../../env')

describe('Patch Request Update Booking a.k.a Partial Request Update Booking', () => {
    it('Patch Update Booking a.k.a Partial Update Booking', async () => {
        const response = request(baseUrl())
        // .patch('/booking/:id')
        .patch('/booking/1')
        .send({
            "firstname" : "James",
            "lastname" : "Brown"
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})