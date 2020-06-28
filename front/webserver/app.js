const app = require('express')()
const helmet = require('helmet')
const compression = require('compression')
const logger = require('./logger')

app.use(helmet())
app.use(compression())
app.disable('x-powered-by')
