'use server'

import { redirect } from 'next/navigation'

import { linkProduct } from '@/features/credit-card/common-info/constants/link.constant'
import { CommonInfoSchema } from '@/features/credit-card/common-info/schemas/common-info.schema'
import { getSheets } from '@/lib/google-sheets'

export const addInfo = async (
	uid: string,
	client: CommonInfoSchema,
	publisherCode: string,
	productCode: string
) => {
	const sheets = await getSheets()

	const {
		data: { values }
	} = await sheets.spreadsheets.values.get({
		spreadsheetId: process.env.SHEET_ID,
		range: 'DATA'
	})

	if (!values) {
		throw Error('Internal server error')
	}

	const data = [...values].map(value => {
		if (value[0] !== uid) return value

		const rest = value.splice(0, 4)

		const { fullname, ...restClient } = client

		return [...rest, '', fullname.toUpperCase(), ...Object.values(restClient)]
	})

	await sheets.spreadsheets.values.update({
		spreadsheetId: process.env.SHEET_ID,
		range: 'DATA',
		valueInputOption: 'USER_ENTERED',
		requestBody: {
			values: data
		}
	})

	redirect(linkProduct(publisherCode, productCode))
}
