import Docxtemplater from 'docxtemplater'
import fs from 'fs'
import PizZip from 'pizzip'
import expressionParser from '../utils/expressionParser'
import path from 'path'
import { OUTPUT_PATH, TEMPLATES_PATH } from '../constants'
import AdmZip from 'adm-zip'

export const generateDocFromTemplate = async (templateName: string, outputName: string, data: unknown) => {
	const templatePath = path.resolve(TEMPLATES_PATH, templateName)
	const outputPath = path.resolve(OUTPUT_PATH, outputName)

	const content = await fs.readFileSync(templatePath, 'binary')

	const zip = new PizZip(content)
	const doc = new Docxtemplater(zip, {
		paragraphLoop: true,
		linebreaks: true,
		parser: expressionParser
	})

	await doc.render(data)

	const buf = await doc.getZip().generate({
		type: 'nodebuffer',
		compression: 'DEFLATE'
	})

	await fs.writeFileSync(outputPath, buf)
	return outputPath
}

export const createZip = async (files: { path: string }[], outputPath: string) => {
	const zip = new AdmZip()
	files.forEach((f) => {
		zip.addLocalFile(f.path)
	})
	await fs.writeFileSync(outputPath, zip.toBuffer())
}
