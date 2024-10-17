import { google } from 'googleapis'

export const getGoogleAuth = async () =>
	await google.auth.getClient({
		projectId: process.env.GCP_PROJECT_ID,
		credentials: {
			type: process.env.GCP_TYPE,
			project_id: process.env.GCP_PROJECT_ID,
			private_key_id: process.env.GCP_PRIVATE_KEY_ID,
			private_key: process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, '\n'),
			client_email: process.env.GCP_CLIENT_EMAIL,
			universe_domain: process.env.GCP_UNIVERSE_DOMAIN
		},
		scopes: ['https://www.googleapis.com/auth/spreadsheets']
	})
