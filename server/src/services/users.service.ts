import prisma from '../prisma'

export const getUsers = async (ids?: string[]) => {
	return await prisma.user.findMany({
		where: { id: { in: ids } },
		include: {
			department: true,
			platoon: true,
			rank: true,
			userProfile: true,
			position: true
		},
		orderBy: [{ rankId: 'desc' }, { lastName: 'asc' }]
	})
}
