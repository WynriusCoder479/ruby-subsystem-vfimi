import Image from 'next/image'
import Link from 'next/link'
import { FaClock, FaHome, FaPhone } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const socialBrand = [
	{
		link: 'https://www.facebook.com/fimipubs',
		image: '/brand/facebook.png'
	},
	{
		link: 'https://www.youtube.com/channel/UChE5adX4GQgsFahptRJWbbg',
		image: '/brand/youtube.png'
	},
	{
		link: 'https://www.tiktok.com/@ruby.agency0?_t=8pZyXahvO47&_r=1',
		image: '/brand/tik-tok.png'
	}
] satisfies {
	link: string
	image: string
}[]

const Footer = () => {
	return (
		<div className="mt-4 flex w-full flex-col">
			<div className="flex-1 bg-gradient-to-r from-primary to-[#1CA7EC]">
				<div className="relative flex flex-col gap-4 p-2">
					<Image
						src="/ruby-logo-white.png"
						alt="logo"
						width={3336}
						height={1144}
						className="w-32"
					/>
					<p className="text-sm font-bold uppercase text-white">
						Công ty tnhh tiếp thị và truyền thông Ruby
					</p>
					<div className="absolute right-4 top-4 flex gap-4">
						{socialBrand.map(brand => (
							<Link
								href={brand.link}
								key={brand.image}
							>
								<Image
									src={brand.image}
									alt={brand.image}
									width={512}
									height={512}
									className="size-8"
								/>
							</Link>
						))}
					</div>
					<div className="flex items-center space-x-2">
						<div className="rounded-full bg-white p-1.5 shadow-md">
							<FaHome className="size-4 text-primary" />
						</div>
						<p className="text-xs font-semibold text-white">
							Tổ 8, Mương Đào, khu phố 3, Phường Đông Hồ, Thành phố Hà Tiên,
							Tỉnh Kiên Giang, Việt Nam
						</p>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<div className="rounded-full bg-white p-1.5 shadow-md">
								<IoMail className="size-4 text-primary" />
							</div>
							<p className="text-xs font-semibold text-white">
								admin@ruby-agency.vn
							</p>
						</div>
						<div className="flex items-center space-x-2">
							<div className="rounded-full bg-white p-1.5 shadow-md">
								<FaPhone className="size-4 text-primary" />
							</div>
							<p className="text-xs font-semibold text-white">039 771 3769</p>
						</div>
					</div>

					<div className="flex items-center space-x-2">
						<div className="rounded-full bg-white p-1.5 shadow-md">
							<FaClock className="size-4 text-primary" />
						</div>
						<p className="text-xs font-semibold text-white">
							8:30 - 17:30 | Thứ 2 - Thứ 6
						</p>
					</div>
				</div>
			</div>
			<div className="p-2 text-sm font-bold tracking-tight">
				<p className="text-foreground">
					Copyright © RUBY Agency., Ltd, all right reserved.
				</p>
			</div>
		</div>
	)
}

export default Footer
