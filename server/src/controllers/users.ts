import { Request, Response } from 'express'
import prisma from '../prisma'

export const getAll = async (req: Request, res: Response): Promise<void> => {
	const users = await prisma.user.findMany({
		include: {
			department: true,
			platoon: true,
			rank: true,
			userProfile: true,
			position: true
		},
		orderBy: [{ rankId: 'asc' }, { lastName: 'asc' }]
	})
	res.json(users)
}
