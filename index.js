const express = require('express')
const app = express()
const port = 80

app.get('/api', (req, res) => {
    res.send('Hello Express teste!!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})