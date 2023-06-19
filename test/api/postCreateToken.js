const request = require('supertest')
const baseUrl = require('../../env')

describe('Post Request Create Token', () => {
    it('Create Token', async () => {
        const response = request(baseUrl())
        .post('/auth')
        .send({
            "username" : "admin",
            "password" : "password123"
        })
        console.log((await response).status);
        console.log((await response).body)
    })
})