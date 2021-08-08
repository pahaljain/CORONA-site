const express = require('express')
const path = require('path')
const app = express()

const port = 3000

app.use('/static', express.static(path.join(__dirname, 'static')))    // images, css and other related things would be serverd statically to the browser
app.use('/', require(path.join(__dirname, 'routes/blog.js')))    // this will redirect to that app which will handle all requests & responses related to site

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
