const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
    res.send('Hello Express teste!!')
})

app.get('/teste', (req, res) => {
    res.json({ message: 'Rota teste' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})