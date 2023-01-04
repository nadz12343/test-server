
const express = require('express')

const server = express()


server.use((req, res) => {
    res.send('helloo')
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log('server listening at port', PORT))