const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(`Log hit at ${Date.now()}`)
    //res.json(JSON.stringify({message}))
    res.json({'message':'Automate all the things!','timestamp':`${Date.now()}`})
})

app.get('/live', (req, res) => {

    res.send("Live probe check passed. Hi Lil Lorenzo")
})

module.exports = app