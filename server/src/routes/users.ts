import { Router } from 'express'
import * as usersController from '../controllers/users'

const usersRouter = Router()

usersRouter.get('/', usersController.getAll)

export default usersRouter
