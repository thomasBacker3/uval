import { convert as numberToWordsRu } from 'number-to-words-ru'

export const getLastNameWithInitials = ({
	lastName,
	name,
	middleName
}: {
	lastName: string
	name: string
	middleName: string
}) => `${lastName} ${name.slice(0, 1)}. ${middleName.slice(0, 1)}.`

export const convertNumberToText = (n: number) =>
	numberToWordsRu(n, {
		showNumberParts: { fractional: false },
		showCurrency: { integer: false }
	})
