import express from 'express'

// import logger from 'morgan'
import * as path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import { errorHandler, errorNotFoundHandler } from './middlewares/errorHandler'

import usersRouter from './routes/users'
import docsRouter from './routes/docs'

dotenv.config()

export const app = express()

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())

// app.use(logger('dev'))
app.use(express.static(path.join(__dirname, '../public')))
app.use('/docs', docsRouter)
app.use('/users', usersRouter)

app.use(errorNotFoundHandler)
app.use(errorHandler)

app.listen(PORT, async () => {
	console.log(`Server is running at http://localhost:${PORT}`)
})
