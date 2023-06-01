const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    console.log(`Log hit at ${Date.now()}`)
    //res.json(JSON.stringify({message}))
    res.json({'message':'Automate all the things!','timestamp':`${Date.now()}`})
})

app.listen(port, () => {
    console.log(`Example listening on ${port}`)
})