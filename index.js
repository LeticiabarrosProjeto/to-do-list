const express = require('express')
const app = express()
const port = 3000
app.get('/',(req, res) =>{
    res.send('Hello Worold')
})
app.listen(port,() =>{
    console.log('o servidor está sendo executado em htt:localhost:${port}')
 })