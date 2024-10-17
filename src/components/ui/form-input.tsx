/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export interface FormInputProps {
	label?: string
	name: string
	isFormMessage?: boolean
	isLoading?: boolean
	control: any
}

const FormInput: FC<FormInputProps> = ({
	control,
	isFormMessage = true,
	isLoading = false,
	label,
	name,
	...props
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="flex flex-col">
					{label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<Input
							disabled={isLoading}
							{...field}
							{...props}
						/>
					</FormControl>
					{isFormMessage && <FormMessage />}
				</FormItem>
			)}
		/>
	)
}

export default FormInput
