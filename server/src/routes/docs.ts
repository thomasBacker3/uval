import { Router } from 'express'
import * as docsController from '../controllers/docs'

const docsRouter = Router()

docsRouter.post('/uval', docsController.generateUval)

export default docsRouter
