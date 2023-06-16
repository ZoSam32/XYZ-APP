const request = require('supertest')
const app = require('../src/app')

describe("Test the root path", () => {
    test("It should respond the GET method", done => {
        request(app)
        .get('/')
        .then(response => {
            expect(response.statusCode).toBe(200)
            done()
        })
    })
})

describe("Test the liveness probe", () => {
    test("It should respond the GET method", done => {
        request(app)
        .get('/live')
        .then(response => {
            expect(response.statusCode).toBe(200)
            done()
        })
    })
})

describe("Test the readiness probe", () => {
    test("It should respond the GET method", done => {
        request(app)
        .get('/ready')
        .then(response => {
            expect(response.statusCode).toBe(200)
            done()
        })
    })
})