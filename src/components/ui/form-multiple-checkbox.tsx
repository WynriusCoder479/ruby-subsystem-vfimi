/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { FC } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { ComboboxItemType } from '@/lib/types'
import { cn } from '@/lib/utils'

export interface FormMultipleCheckboxProps {
	label?: string
	description?: string
	name: string
	isFormMessage?: boolean
	isLoading?: boolean
	control: any
	items: ComboboxItemType[]
}

const FormMultipleCheckbox: FC<FormMultipleCheckboxProps> = ({
	control,
	name,
	items,
	isFormMessage = true,
	isLoading = false,
	label,
	description
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={() => (
				<FormItem>
					<div className="mb-1.5">
						<FormLabel className={cn({ ['hidden']: !label })}>
							{label}
						</FormLabel>
						<FormDescription className={cn({ ['hidden']: !description })}>
							Select the items you want to display in the sidebar.
						</FormDescription>
					</div>
					<div className="max-h-[500px] space-y-4 overflow-y-scroll rounded-md border border-foreground/30 p-2.5">
						{items.map(item => (
							<FormField
								key={item.value}
								control={control}
								name={name}
								render={({ field }) => {
									return (
										<FormItem
											key={item.value}
											className="flex flex-row items-start space-x-2 space-y-0"
										>
											<FormControl>
												<Checkbox
													checked={field.value?.includes(item.value)}
													disabled={isLoading}
													onCheckedChange={checked => {
														return checked
															? field.onChange([...field.value, item.value])
															: field.onChange(
																	field.value?.filter(
																		(value: string) => value !== item.label
																	)
																)
													}}
												/>
											</FormControl>
											<FormLabel className="text-sm font-normal">
												{item.label}
											</FormLabel>
										</FormItem>
									)
								}}
							/>
						))}
					</div>
					<FormMessage className={cn({ ['hidden']: !isFormMessage })} />
				</FormItem>
			)}
		/>
	)
}

export default FormMultipleCheckbox
