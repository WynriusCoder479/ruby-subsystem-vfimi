import { FC, PropsWithChildren, ReactNode } from 'react'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

type DialogWrapperProps = PropsWithChildren<{
	trigger: ReactNode
	title: string
	description?: string
}>

const DialogWrapper: FC<DialogWrapperProps> = ({
	trigger,
	title,
	description,
	children
}) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className="max-h-[600px] w-[420px] overflow-y-scroll">
				<DialogHeader>
					<DialogTitle className="px-4 uppercase">{title}</DialogTitle>
					<DialogDescription className={cn({ ['hidden']: !description })}>
						{description}
					</DialogDescription>
				</DialogHeader>
				{children}
			</DialogContent>
		</Dialog>
	)
}

export default DialogWrapper
