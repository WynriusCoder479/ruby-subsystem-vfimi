import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'

import { cn } from '@/lib/utils'
import QueryProvider from '@/providers/query.provider'

export const metadata: Metadata = {
	title: 'Ruby',
	description: 'Ruby product introview'
}

const font = Montserrat({
	subsets: ['latin', 'vietnamese']
})

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang="en">
			<body className={cn(font.className, 'antialiased')}>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	)
}

export default RootLayout
