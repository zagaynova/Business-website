const express = require('express')
const app = express()

app.use('/', express.static('static'))

const listener = app.listen(3000, () => {
    console.log('server has started at ', listener.address().port)
})