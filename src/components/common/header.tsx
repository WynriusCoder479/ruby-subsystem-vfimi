'use client'
import Image from 'next/image'

const Header = () => {
	return (
		<div className="sticky inset-x-0 top-0 z-50 bg-background shadow-md">
			<div className="container flex items-center justify-center p-2">
				<Image
					src="/ruby-logo.png"
					alt="logo"
					width={3336}
					height={1144}
					className="w-36"
				/>
			</div>
		</div>
	)
}

export default Header
