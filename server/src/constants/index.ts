import { ensureDirSync } from 'fs-extra'
import path from 'path'

export const STATIC_FOLDER_PATH = path.join(path.resolve(), 'public')
export const TEMPLATES_PATH = path.join(STATIC_FOLDER_PATH, 'templates')
export const OUTPUT_PATH = path.join(STATIC_FOLDER_PATH, 'output')

ensureDirSync(TEMPLATES_PATH)
ensureDirSync(OUTPUT_PATH)
