import { google } from 'googleapis'

import { getGoogleAuth } from '@/lib/google-auth'

export const getSheets = async () => {
	const auth = await getGoogleAuth()

	const sheets = google.sheets({ version: 'v4', auth })

	return sheets
}
