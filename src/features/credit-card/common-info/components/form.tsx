'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { addInfo } from '@/actions/client/add-info'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form } from '@/components/ui/form'
import FormCombobox from '@/components/ui/form-combobox'
import FormInput from '@/components/ui/form-input'
import Policy from '@/features/credit-card/common-info/components/policy'
import { cities } from '@/features/credit-card/common-info/constants/cities.constant'
import {
	CommonInfoSchema,
	commonInfoSchema
} from '@/features/credit-card/common-info/schemas/common-info.schema'
import { useUid } from '@/stores/uid.store'

const CommonInfoForm = () => {
	const form = useForm<CommonInfoSchema>({
		resolver: zodResolver(commonInfoSchema),
		defaultValues: {
			fullname: '',
			dob: '',
			phone: '',
			email: '',
			city: ''
		}
	})

	const searchParams = useSearchParams()

	const [checked, setChecked] = useState<boolean>(false)

	const { uid } = useUid()

	const { mutate, isPending } = useMutation({
		mutationFn: async (values: CommonInfoSchema) => {
			const product = searchParams.get('product')
			const code = searchParams.get('code')

			await addInfo(uid, values, code ?? 'RUBY00001', product ?? 'vpbankcc')
		}
	})

	const checkHandler = () => setChecked(!checked)

	const onSubmit = form.handleSubmit(values => mutate(values))

	return (
		<Form {...form}>
			<form onSubmit={onSubmit}>
				<div className="flex flex-col gap-4">
					<FormInput
						name="fullname"
						isLoading={isPending}
						control={form.control}
						isFormMessage
						label="Họ và tên"
					/>

					<FormInput
						name="email"
						isLoading={isPending}
						control={form.control}
						isFormMessage
						label="Email"
					/>
					<FormInput
						name="phone"
						isLoading={isPending}
						control={form.control}
						isFormMessage
						label="Số điện thoại"
					/>
					<FormCombobox
						name="city"
						label="Khu vực"
						isLoading={isPending}
						control={form.control}
						form={form}
						initalData="Thành phố"
						items={cities}
						isMessage
					/>
					<div
						className="flex items-start gap-4 pt-4"
						style={{ paddingTop: '.5rem' }}
					>
						<Checkbox
							id="terms"
							checked={checked}
							onCheckedChange={checkHandler}
						/>
						<div className="grid gap-1.5 leading-none">
							<label
								htmlFor="terms"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Đồng ý với điểu khoản của chúng tôi.
							</label>
						</div>
					</div>

					<Policy />

					<Button
						type="submit"
						className="mt-4 w-full"
						disabled={!checked || isPending}
					>
						Mở thẻ ngay
					</Button>
				</div>
			</form>
		</Form>
	)
}

export default CommonInfoForm
