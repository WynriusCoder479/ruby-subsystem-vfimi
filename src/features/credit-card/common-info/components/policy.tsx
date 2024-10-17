import SecurityPolicy from '@/features/credit-card/common-info/components/security-policy'
import TermPolicy from '@/features/credit-card/common-info/components/term-policy'
import UserPolicy from '@/features/credit-card/common-info/components/user-policy'

const Policy = () => {
	return (
		<div className="flex flex-col">
			<p className="text-sm font-bold tracking-tight">
				Bằng việc cung cấp thông tin, bạn đã đồng ý với:
			</p>
			<div className="flex w-full flex-col items-start">
				<SecurityPolicy />
				<TermPolicy />
				<UserPolicy />
			</div>
		</div>
	)
}

export default Policy
