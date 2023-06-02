const request = require('supertest')
const app = require('./src/app')

describe("Test the root path", () => {
    test("It should respond the GET method", done => {
        request(app)
        .get('/')
        .then(response => {
            expect(response.statusCode).toBe(2001)
            done()
        })
    })
})