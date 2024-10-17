import { FC, PropsWithChildren } from 'react'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

type FormWrapperProps = PropsWithChildren<{
	title: string
	description?: string
}>

const FormWrapper: FC<FormWrapperProps> = ({
	children,
	title,
	description
}) => {
	return (
		<Card className="w-[380px] border-none shadow-none">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription
					className={cn({
						['hidden']: !description
					})}
				>
					{description}
				</CardDescription>
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	)
}

export default FormWrapper
