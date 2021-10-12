const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World from node server!')
})

app.post('/postApi', (req, res) => {
    console.log('Hello World from node server post api!')
    res.send('Hello World from node server post api!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
