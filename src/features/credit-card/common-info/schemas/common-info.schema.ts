import { z } from 'zod'

import { cities } from '@/features/credit-card/common-info/constants/cities.constant'

const cityList = cities.map(city => city.value)

export const commonInfoSchema = z.object({
	fullname: z.string().min(1, { message: 'Vui lòng nhập họ và tên' }),
	dob: z.union([z.coerce.date(), z.string()]),
	phone: z
		.string()
		.min(1, { message: 'Vui lòng nhập số điện thoại' })
		.max(10, { message: 'Số điện thoại cho chiều dài tối đa 10 số' })
		.refine(val => /^\d+$/.test(val), { message: 'Số điện thoại không đúng' }),
	email: z.string().email({ message: 'Vui lòng nhập email' }),
	city: z.enum([cityList[0], ...cityList], {
		message: 'Vui lòng chọn khu vực sinh sống'
	})
})

export type CommonInfoSchema = z.infer<typeof commonInfoSchema>
