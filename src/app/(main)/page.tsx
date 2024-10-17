/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useMutation } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'

import { createClient } from '@/actions/client/add-first'
import { generateRandomSubString } from '@/lib/gen-id'
import { useUid } from '@/stores/uid.store'

interface HomePageProps {
	searchParams: {
		code: string
		product: string
	}
}

const HomePage: FC<HomePageProps> = ({ searchParams: { code, product } }) => {
	const router = useRouter()

	const { setUid } = useUid()

	const { mutate: createClientMutate, isPending } = useMutation({
		mutationFn: async ({
			publisherCode,
			productCode
		}: {
			publisherCode: string
			productCode: string
		}) => {
			const uid = generateRandomSubString(12)

			setUid(uid)

			await createClient(uid, publisherCode, productCode)

			return { uid }
		},
		onSuccess: ({ uid }) => {
			router.push(
				`/credit-card/common-info?code=${uid}&product=${product ?? 'vpbankcc'}`
			)
		}
	})

	useEffect(() => {
		createClientMutate({
			publisherCode: code,
			productCode: product
		})
	}, [])

	if (!isPending) return null

	return (
		<div className="flex h-screen w-full items-center justify-center">
			<div className="flex flex-col items-center justify-center gap-4">
				<Loader2 className="size-7 animate-spin" />
				<p>Vui lòng chờ trong giây lát</p>
			</div>
		</div>
	)
}

export default HomePage
