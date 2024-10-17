import FormWrapper from '@/components/common/form-wrapper'
import CommonInfoForm from '@/features/credit-card/common-info/components/form'

const CommonInfoScreen = () => {
	return (
		<FormWrapper
			title="Thông tin cá nhân"
			description="Hãy cung cấp một số thông tin cá nhân để chúng tôi biết bạn là ai"
		>
			<CommonInfoForm />
		</FormWrapper>
	)
}

export default CommonInfoScreen
