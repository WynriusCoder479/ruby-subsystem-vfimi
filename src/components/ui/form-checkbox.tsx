/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Checkbox } from '@radix-ui/react-checkbox'
import { FC } from 'react'

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { cn } from '@/lib/utils'

export interface FormCheckboxProps {
	label?: string
	description?: string
	name: string
	isFormMessage?: boolean
	isLoading?: boolean
	control: any
}

const FormCheckbox: FC<FormCheckboxProps> = ({
	label,
	description,
	name,
	isFormMessage = true,
	isLoading = false,
	control
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
					<FormControl>
						<Checkbox
							checked={field.value}
							onCheckedChange={field.onChange}
							disabled={isLoading}
						/>
					</FormControl>
					<div className="space-y-1 leading-none">
						<FormLabel className={cn({ ['hidden']: !label })}>
							{label}
						</FormLabel>
						<FormDescription className={cn({ ['hidden']: !description })}>
							{description}
						</FormDescription>
					</div>
					<FormMessage className={cn({ ['hidden']: !isFormMessage })} />
				</FormItem>
			)}
		/>
	)
}

export default FormCheckbox
