import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="relative flex h-full w-full justify-center py-6">
			<div className="z-50 flex h-fit w-[400px] flex-col items-center rounded-2xl border-foreground/20 bg-background p-6 lg:border lg:shadow-xl">
				<Image
					src="/ruby-logo.png"
					alt="logo"
					width={3336}
					height={1144}
					className="mb-12 w-40"
				/>
				{children}
			</div>
		</div>
	)
}

export default MainLayout
