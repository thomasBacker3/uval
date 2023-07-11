import { NextFunction, Request, Response } from 'express'
import prisma from '../prisma'
import path from 'path'
import fs from 'fs'
import { convertNumberToText, getLastNameWithInitials } from '../utils'

import { createZip, generateDocFromTemplate } from '../services/docs.service'
import { OUTPUT_PATH } from '../constants'

export const generateUval = async (req: Request, res: Response, next: NextFunction) => {
	const { userIds, templatesIds, input, templatePath } = req.body

	// const userIds = [
	// 	'68ab7762-c3ff-4f08-8d82-528599e5e04d',
	// 	'9f70ef5c-2177-41cd-95b2-998ec6acc197',
	// 	'cca4abe1-3c53-473d-aa75-9d8cbc0f5065'
	// ]

	const inputTemp = {
		dates: {
			start: input.dates.start,
			finish: input.dates.finish,
			finishTime: '20.00',
			money: input.dates.money
		}
	}

	const users = await prisma.user.findMany({
		where: { id: { in: userIds } },
		include: {
			department: true,
			platoon: true,
			rank: true,
			userProfile: true,
			position: true
		},
		orderBy: [{ rankId: 'asc' }, { lastName: 'asc' }]
	})

	const data = {
		users: users.map((u: { lastName: any; middleName: any; name: any }) => ({
			...u,
			fullName: getLastNameWithInitials({
				lastName: u.lastName,
				middleName: u.middleName,
				name: u.name
			})
		})),
		input: inputTemp,
		year: new Date().getFullYear(),
		total: {
			number: users.length,
			text: convertNumberToText(users.length).toLocaleLowerCase()
		}
	}

	const files: { path: string }[] = await Promise.all(
		templatesIds.map(async (tmpl: string) => {
			const templateName = `input_${tmpl}.docx`
			const outputName = `output_${tmpl}.docx`

			const outputPath = await generateDocFromTemplate(templateName, outputName, data)
			return { path: outputPath }
		})
	)

	const outputPath = path.resolve(OUTPUT_PATH, 'docs.zip')
	createZip(files, outputPath)

	res.download(outputPath, (err) => {
		if (err) {
			files.forEach((file) => fs.unlinkSync(file.path))
			fs.unlinkSync(outputPath)
			next({ text: 'File download error', status: 500 })
		}
		files.forEach((file) => fs.unlinkSync(file.path))
		fs.unlinkSync(outputPath)
	})
}
