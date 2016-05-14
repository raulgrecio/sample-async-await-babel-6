"use strict"

const assert = require('chai').assert,
      seneca = require('seneca')(),
      client = seneca.client(),
      server = require('../server')


describe('Array2', function() {
    describe('#indexOf2()', function () {

        function bar() {
            const bar = {"bar" : true}
            return bar
        }

        function puf() {
            return new Promise((resolve, reject) => {
                //const result = {"puf" : true}
                //resolve (result);

                const request = require('request');
                request('http://jsonplaceholder.typicode.com/posts/1', function (error, response, body) {
                    if (!error && response.statusCode == 200)
                        resolve(body)
                    else
                        reject (error)
                })
            })
        }

        function taz() {
            return new Promise((resolve, reject) => {
                client.act({ role:'user', cmd:'login' }, function (err, result) {
                    if (!err)
                        resolve(result)
                    else
                        reject (err)
                })
            })
        }
        
        it('sin promesa explicita', function () {
            async function foo() {
                const s = await bar(); console.log(s); return s
            }
//            throw new Error('ESTO ES UN ERROR PROVOCADOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')

            return foo().then(result => {
                assert.deepEqual(result, {"bar" : true})
            })
        })

        it('con promesa explicita', function () {
            async function foo() {
                const s = await puf(); console.log(s); return s
            }
//            throw new Error('ESTO ES UN ERROR PROVOCADOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')


            const valorEsperado = {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }

            return foo().then(result => {
                assert.deepEqual(JSON.parse(result), valorEsperado)
            })
        })

        it('with seneca', function () {

            async function foo() {
                const s = await taz(); return s
            }
//            throw new Error('ESTO ES UN ERROR PROVOCADOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')

            return foo().then(result => {
                assert.deepEqual(result, { loggedIn: true })
            })
        });
    })
})