const rewire = require("rewire")
const server = rewire("./server")
const expectOK = server.__get__("expectOK")
// @ponicode
describe("expectOK", () => {
    test("0", () => {
        let callFunction = () => {
            expectOK({ status: 404, json: { status: 429 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            expectOK({ status: 400, json: { status: 429 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            expectOK({ status: 500, json: { status: 429 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            expectOK({ status: 429, json: { status: 400 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            expectOK({ status: 200, json: { status: 500 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            expectOK(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
