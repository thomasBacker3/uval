import { Request, Response } from 'express'
import { getUsers } from '../services/users.service'

export const getAll = async (req: Request, res: Response): Promise<void> => {
	const users = await getUsers()
	res.json(users)
}
