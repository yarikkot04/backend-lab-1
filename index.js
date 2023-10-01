const express = require('express')
const healthcheckRoute = require('./routes/healthcheck')
const app = express()

app.use('/healthcheck', healthcheckRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})