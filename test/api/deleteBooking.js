const request = require('supertest')
const baseUrl = require('../../env')

describe('Delete Request Booking', () => {
    it('Delete Booking', async () => {
        const response = request(baseUrl())
        .delete('/booking/1')
        console.log((await response).status)
        // console.log((await response).body)
    })
})