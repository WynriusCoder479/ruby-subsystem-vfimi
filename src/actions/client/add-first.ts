/* eslint-disable react-hooks/rules-of-hooks */
'use server'

import { formatInTimeZone } from 'date-fns-tz'

import { getSheets } from '@/lib/google-sheets'

export const createClient = async (
	uid: string,
	publisherCode: string,
	productCode: string
) => {
	const sheets = await getSheets()

	const timestamp = Date.now()

	await sheets.spreadsheets.values.append({
		spreadsheetId: process.env.SHEET_ID,
		range: 'DATA!A2:J1',
		valueInputOption: 'USER_ENTERED',
		requestBody: {
			values: [
				[
					`'${uid}`,
					formatInTimeZone(
						new Date(timestamp),
						'Asia/Ho_Chi_Minh',
						'QQQ E LL/dd/yyyy - HH:mm:ss'
					),
					publisherCode,
					productCode
				]
			]
		}
	})
}
