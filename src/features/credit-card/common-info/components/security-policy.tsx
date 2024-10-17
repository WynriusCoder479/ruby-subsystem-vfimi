import DialogWrapper from '@/components/common/dialog-wrapper'
import { Button } from '@/components/ui/button'

const info1 = [
	'(a) Họ, chữ đệm và tên khai sinh, tên gọi khác (nếu có)',
	'(b) Ngày, tháng, năm sinh',
	'(c) Giới tính',
	'(d) Nơi thường trú, nơi tạm trú, nơi ở hiện tại, quê quán, địa chỉ liên hệ',
	'(e) Quốc tịch',
	'(f) Hình ảnh cá nhân',
	' thông tin có được từ các hệ thống xác thực định danh (eKYC) ',
	'(g) Số điện thoại, số chứng minh nhân dân, số định danh cá nhân',
	'(h) Địa chỉ thư điện tử',
	'(i) Thông tin về hạn mức còn lại tạm tính, hạn mức thẻ tín dụng khả dụng của cá nhân, dữ liệu cá nhân phản ánh hoạt động, lịch sử hoạt động trên không gian mạng',
	'(j) Chi tiết truy cập các trang mạng và ứng dụng của chúng tôi, bao gồm nhưng không giới hạn dữ liệu về nguồn truy cập, dữ liệu về vị trí, dữ liệu về hệ điều hành của thiết bị truy cập, dữ liệu về giao thông và dữ liệu về liên lạc khác (như địa chỉ giao thức internet (địa chỉ IP), và các nguồn thông tin được truy cập',
	'(k) Dữ liệu về vị trí của cá nhân được xác định qua dịch vụ định vị',
	'(l) Thông tin giao dịch và thông tin được hàm chứa trong bất kỳ (các) tài khoản mà Quý khách có thể đăng ký sử dụng với chúng tôi, cho dù là tài khoản riêng hay đồng sở hữu với bất kỳ bên nào khác, thể loại sản phẩm và/ hoặc dịch vụ mà Quý khách đăng ký với chúng tôi và các dữ liệu cần thiết khác liên quan đến Quý khách và (các) giao dịch của Quý khách với chúng tôi, bao gồm nhưng không giới hạn thông tin định danh khách hàng (có thể bao gồm chữ ký, vân tay, ảnh khuôn mặt, và các đặc điểm sinh trắc học khác), thông tin về tài khoản và/hoặc',
	'(m) Mã nhận diện duy nhất của Quý khách khi Quý khách đăng ký sử dụng sản phẩm/ dịch vụ với chúng tôi và/hoặc các nhà cung cấp, bên cung cấp dịch vụ, đối tác, thương nhân và các bên thứ ba',
	'(n) Các thông tin khác liên quan đến việc cung cấp các sản phẩm và dịch vụ của chúng tôi'
]

const info2 = [
	'(i) thông qua quan hệ giữa Quý khách và chúng tôi, ví dụ thông tin mà Quý khách cung cấp trong các văn bản đăng ký hoặc các tài liệu hỗ trợ giao dịch, khi Quý khách sử dụng các sản phẩm hoặc dịch vụ của chúng tôi, khi tham gia các khảo sát, sự cạnh tranh và chương trình khuyến mại dành cho khách hàng, và trong quá trình đánh giá tài chính',
	'(ii) thông qua liên hệ trao đổi bằng lời nói và văn bản của Quý khách với chúng tôi và/ hoặc các đối tác hợp tác kinh doanh của chúng tôi',
	'(iii) từ các nhà cung cấp, bên cung cấp dịch vụ, đối tác, thương nhân và các bên thứ ba, bao gồm nhưng không giới hạn các bên tư vấn về khảo sát, truyền thông mạng xã hội, tiếp thị, tham chiếu tín dụng, ngăn ngừa gian lận, tập hợp dữ liệu',
	' bên hỗ trợ cơ sở hạ tầng và phương tiện, và các bên thứ ba khác liên quan đến hoạt động kinh doanh của chúng tôi',
	'(iv) từ bất kỳ bên cung cấp báo cáo tín dụng, bên cung cấp tham chiếu tín dụng và các cơ quan thuộc chính phủ, hoặc thông tin thu thập từ bất kỳ nguồn công cộng sẵn có, các hướng dẫn, hoặc cơ quan đăng ký nào',
	'(v) từ hoạt động phân tích Quý khách sử dụng và quản lý (các) tài khoản/ tiện ích của Quý khách tại nền tảng của chúng tôi (bao gồm trang web FIMI.tech và Ứng dụng FIMI), từ các giao dịch mà Quý khách thực hiện và từ khoản thanh toán được thực hiện từ/ đến (các) tài khoản/ tiện ích của Quý khách',
	'(vi) thông qua các tập tin được tạo ra bởi trang mạng mà Quý khách truy cập (cookie) hoặc các thiết bị/ công cụ giám sát tương tự và/ hoặc',
	'(vii) từ những nguồn của bên thứ ba, mà Quý khách đồng ý việc thu thập, hoặc những nguồn mà việc thu thập được pháp luật yêu cầu hoặc cho phép.'
]

const info3 = [
	'(a) cho mục đích ghi chép lại',
	'(b) tuân thủ với pháp luật và quy định áp dụng',
	'(c) tuân thủ các thủ tục và chính sách nội bộ',
	'(d) tạo điều kiện cho việc quản lý và hỗ trợ',
	'(e) hỗ trợ mục đích bảo mật, phòng ngừa tội phạm và chống gian lận',
	' (f) điều tra hoặc phát hiện việc sử dụng trái phép, sử dụng phi pháp hoặc lạm dụng các dịch vụ, hệ thống hoặc tài liệu khác của chúng tôi.'
]

const info4 = [
	'a) để xác định danh tính và lý lịch xác thực và sàng lọc',
	'b) để tiến hành kiểm tra với cơ quan đăng ký chặn tin nhắn rác, thư điện tử rác, cuộc gọi rác hoặc cơ quan đăng ký khác (nếu có)',
	'c) để đánh giá và xử lý (các) đơn đăng ký/yêu cầu của Quý khách đối với bất kỳ sản phẩm hoặc dịch vụ nào được chúng tôi cung cấp hoặc phân phối (bao gồm nhưng không giới hạn ở những sản phẩm của bên thứ ba chẳng hạn như các chính sách thẻ tín dụng, chính sách bảo hiểm)',
	'd) để thẩm tra, xây dựng và đánh giá độ tin cậy về tín dụng của Quý khách',
	'e) để chúng tôi có thể cân nhắc việc cung cấp hoặc tiếp tục cung cấp bất kỳ sản phẩm và dịch vụ nào của chúng tôi tới Quý khách',
	'f) để quản lý và duy trì (các) tài khoản và trang thiết bị mà Quý khách có với chúng tôi',
	'g) để cung cấp thư hoặc các thông báo khác tới Quý khách hoặc các bên khác có liên quan, và để cập nhật thông tin cá nhân của Quý khách',
	'h) để nhập liệu, để kiểm tra tính đầy đủ và chính xác của các dữ liệu khách hàng được nhập vào hệ thống',
	'i) để quản lý tốt hơn việc kinh doanh của chúng tôi và mối quan hệ của Quý khách với chúng tôi (bao gồm việc đào tạo nhân viên)',
	'j) để xác thực Quý khách để, bên cạnh các hoạt động khác, Quý khách có thể truy cập tài khoản số/điện tử, để cá biệt hóa trải nghiệm của Quý khách đối với các sản phẩm và dịch vụ của chúng tôi, để quản lý việc truy cập và tình trạng thành viên của Quý khách với các bên thứ ba có liên quan',
	'k) để đăng ký Quý khách vào các ứng dụng kỹ thuật số để quản lý thẻ và tài khoản thẻ của Quý khách, bao gồm nhưng không giới hạn ở ứng dụng di động, xác thực sinh trắc học và các giải pháp phát hiện gian lận sử dụng sinh trắc học của chúng tôi sau khi Quý khách cho phép đồng ý liên kết thông tin',
	'l) để quản lý và ghi âm các cuộc gọi và các liên lạc thông qua kênh điện tử với Quý khách và các bên có liên quan khác',
	'm) để đổi quà thưởng, giao quà tặng, chuyển đổi quà tặng, giải thưởng',
	'n) để tiến hành tạm khóa, phong toả hoặc đóng tài khoản/giao dịch',
	'o) để hiểu rõ hơn các nhu cầu đầu tư và tình trạng tài chính hiện tại và trong tương lai của Quý khách',
	'p) để cải thiện, tăng cường, cá nhân hóa, và cá biệt hóa các sản phẩm và dịch vụ bao gồm cả các dịch vụ trực tuyến của chúng tôi và để phát triển các sản phẩm và dịch vụ mới',
	'q) để quản lý các đề nghị, cạnh tranh, các chiến dịch và khuyến mại',
	'r) để trả lời các câu hỏi và khiếu nại của Quý khách và để giải quyết tranh chấp nói chung',
	's) để tạo dữ liệu, báo cáo và thống kê, phản hồi, cho chúng tôi hoặc cho các bên thứ ba khác có liên quan của chúng tôi hoặc trên cơ sở yêu cầu của các cơ quan có thẩm quyền hoặc các bên thứ ba khác có liên quan',
	't) để tiến hành nghiên cứu thị trường, khảo sát và phân tích dữ liệu liên quan đến bất kỳ sản phẩm hoặc dịch vụ nào do chúng tôi cung cấp (cho dù được tiến hành bởi riêng FIMI hoặc cùng với các bên khác) mà có thể liên quan tới Quý khách',
	'u) để đánh giá rủi ro, phân tích xu hướng, thống kê, lên kế hoạch, bao gồm phân tích xử lý dữ liệu về thống kê, rủi ro và phòng chống rửa tiền, để tạo lập và duy trì các hệ thống chấm điểm tín nhiệm',
	'v) để cung cấp thông tin, đề nghị giao dịch và tiến hành tiếp thị và khuyến mại tới Quý khách liên quan đến bất kỳ sản phẩm, dịch vụ, đề nghị giao dịch hoặc sự kiện nào do FIMI hoặc đối tác kinh doanh của FIMI cung cấp mà chúng tôi cho rằng Quý khách có thể quan tâm',
	'w) cho mục đích kiểm toán, quản lý rủi ro và tuân thủ',
	'x) để đáp ứng hoặc tuân thủ các chính sách nội bộ của FIMI và các thủ tục và bất kỳ quy tắc, luật pháp, quy định, quy tắc thực hành hoặc các hướng dẫn, chỉ thị hoặc yêu cầu được ban hành bởi bất kỳ tòa án, cơ quan pháp luật hoặc cơ quan quản lý nào (cả trong nước hoặc quốc tế) (bao gồm nhưng không giới hạn việc tiết lộ thông tin cho các cơ quan quản lý, thực hiện kiểm tra, giám sát hoặc điều tra kiểm toán)',
	'y) để đánh giá bất kỳ yêu cầu mua lại, tiến hành bất kỳ giao dịch mua lại hoặc chuyển giao việc kinh doanh và/hoặc tài sản, chuyển giao hoặc chuyển nhượng quyền, lợi ích hoặc nghĩa vụ theo (những) hợp đồng của Quý khách với chúng tôi',
	'z) để bảo vệ hoặc thực thi các quyền của chúng tôi, bao gồm việc để thu các khoản phí và lệ phí và để thu hồi bất kỳ khoản nợ nào đang nợ chúng tôi',
	'aa) để duy trì thông tin chính xác về nhận biết khách hàng (KYC), thực hiện các kiểm tra khác theo yêu cầu',
	'bb) để phát hiện, ngăn chặn, và điều tra tội phạm, tấn công, hoặc các vi phạm bao gồm gian lận, rửa tiền, tài trợ khủng bố, hối lộ, tham nhũng, hoặc trốn thuế',
	'cc) cho các nhà cung cấp/các bên cung cấp dịch vụ/các bên bán của chúng tôi',
	'dd) cho bất kỳ mục đích nào khác được yêu cầu hoặc cho phép bởi bất kỳ luật, quy định, hướng dẫn và/hoặc các cơ quan quản lý có liên quan nào',
	'ee) để thực hiện các hoạt động khác có liên quan đến việc cung cấp, vận hành, xử lý và quản lý của chúng tôi đối với các sản phẩm và dịch vụ cho Quý khách, và để phục vụ các mục đích khác mà chúng tôi cho là phù hợp tại từng thời điểm.'
]

const info5 = [
	'(a) các công ty con và/hoặc các công ty liên kết của FIMI',
	'(b) các công ty và/hoặc các tổ chức đóng vai trò là các bên bán, các bên cung cấp, các đối tác, các đại lý và/hoặc các cố vấn chuyên nghiệp của chúng tôi, bao gồm nhưng không giới hạn ở các công ty cung cấp dịch vụ hành chính, thư từ, tiếp thị qua điện thoại, bán hàng trực tiếp, trung tâm gọi điện, quy trình kinh doanh, du lịch, thị thực, quản trị tri thức, quản trị nhân sự, xử lý dữ liệu, công nghệ thông tin, máy tính, thanh toán, thu hồi nợ, tham chiếu tín dụng và các kiểm tra lý lịch khác, lưu ký, nhận tiền gửi, thẻ nhựa, văn thư, nghiên cứu trị trường, mô hình hóa dữ liệu, đổi thưởng, lưu trữ và quản lý hồ sơ, nhập liệu, sàng lọc trước và xác minh, pháp lý, trang mạng hoặc phương tiện truyền thông xã hội, viễn thông, gửi tin nhắn hoặc gửi thư điện tử, kết nối mạng, điện thoại, cơ sở hạ tầng và hỗ trợ công nghệ, an toàn thông tin, duy trì phần mềm và giấy phép, trung tâm dữ liệu, hội thoại và hội thảo, và các dịch vụ tư vấn, và/hoặc các dịch vụ khác có liên quan đến, hoặc để hỗ trợ, cho việc vận hành hoạt động kinh doanh của chúng tôi',
	'(c) công an hoặc bất kỳ nhân viên công vụ nào tiến hành điều tra liên quan đến bất kỳ vi phạm nào bao gồm các vi phạm bị nghi vấn',
	'(d) bất kỳ bên bảo lãnh hoặc nhà cung cấp bảo mật nào đối với (các) tiện ích cung cấp bởi chúng tôi cho Quý khách',
	'(e) bất kỳ tòa án, trọng tài hoặc cơ quan có thẩm quyền nào, dù là chính phủ hay bán chính phủ có thẩm quyền đối với chúng tôi',
	'(f) bất kỳ cá nhân, cơ quan có thẩm quyền hoặc cơ quan quản lý hoặc bên thứ ba mà chúng tôi được phép hoặc bắt buộc phải tiết lộ theo quy định pháp luật của bất kỳ quốc gia, hoặc theo bất kỳ hợp đồng hoặc cam kết nào khác giữa bên thứ ba và chúng tôi',
	'(g) bất kỳ cá nhân có liên quan đến việc thực thi hoặc duy trì bất kỳ quyền nào của chúng tôi theo (các) thỏa thuận giữa Quý khách với chúng tôi hoặc theo cách khác, luôn tuân thủ bất kỳ quy định pháp luật nào (bao gồm các quy định, hướng dẫn và/hoặc nghĩa vụ) áp dụng cho chúng tôi (dù ở trong hay ngoài Việt Nam), cho bất kỳ mục đích nào nêu trên.'
]

const info6 = [
	'(a) khi có sự đồng ý của Quý khách',
	'(b) khi chúng tôi được yêu cầu hoặc được phép tiết lộ theo quy định pháp luật',
	'(c) khi chúng tôi được yêu cầu hoặc cho phép theo quyết định của tòa án',
	'(d) khi chúng tôi chuyển giao quyền và nghĩa vụ theo (các) thỏa thuận giữa Quý khách và chúng tôi',
	' (e) khi chúng tôi buộc phải đáp ứng nghĩa vụ của mình với bất kỳ cơ quan quản lý có liên quan.'
]

const SecurityPolicy = () => {
	return (
		<DialogWrapper
			title="Thông báo bảo mật"
			trigger={
				<Button
					variant="link"
					className="p-0"
				>
					- Thông báo bảo mật của chúng tôi
				</Button>
			}
		>
			<div className="flex flex-col gap-2 text-justify text-xs">
				<p>
					<span className="font-bold">
						Công Ty TNHH Tiếp thị và Truyền thông FIMI
					</span>{' '}
					và các công ty con, công ty liên kết khác có liên quan (gọi chung là
					“FIMI” hoặc “chúng tôi”) tôn trọng sự riêng tư và cố gắng bảo vệ dữ
					liệu cá nhân của Quý khách tuân thủ quy định của pháp luật Việt Nam.
				</p>
				<p>
					Chúng tôi sẽ chỉ thu thập và sử dụng dữ liệu cá nhân của Quý khách phù
					hợp với quy định của pháp luật (kể cả Nghị định số 13/2023/NĐ-CP ngày
					17 tháng 4 năm 2023 về bảo vệ dữ liệu cá nhân như được sửa đổi, bổ
					sung hoặc thay thế tùy từng thời điểm), Thông Báo Bảo Mật này và các
					điều khoản về sự riêng tư trong (các) thỏa thuận với chúng tôi.
				</p>
				<p>
					Thông Báo Bảo Mật này là một phần của các điều khoản và điều kiện
					tương ứng điều chỉnh mối quan hệ giữa Quý khách và chúng tôi, bao gồm
					nhưng không giới hạn ở, như có thể được áp dụng, Điều Khoản và Điều
					Kiện của các sản phẩm Thẻ Tín Dụng được phát hành bởi các Tổ chức tín
					dụng đối tác của FIMI, Điều khoản và Điều kiện Sử Dụng các nền tảng
					của FIMI (gọi chung là “Các Điều Khoản và Điều Kiện”) và nên được đọc
					cùng với Các Điều Khoản Và Điều Kiện đó. Bằng việc đăng ký sử dụng
					hoặc sử dụng các sản phẩm hoặc dịch vụ của chúng tôi hoặc bằng việc
					cho phép chúng tôi sử dụng thông tin cá nhân của Quý khách, Quý khách
					chấp nhận các chính sách và thực tiễn được mô tả trong Thông Báo Bảo
					Mật này.
				</p>
				<div className="flex flex-col gap-2">
					<p className="font-bold">Thông Báo Bảo Mật này giải thích:</p>
					<ul className="space-y-1 px-2">
						<li className="list-item list-inside">
							- Loại dữ liệu cá nhân mà chúng tôi thu thập và cách thức mà chúng
							tôi thu thập dữ liệu cá nhân;
						</li>
						<li className="list-item">
							- Cách thức chúng tôi xử lý dữ liệu cá nhân của Quý khách;
						</li>
						<li className="list-item">
							- Các bên nhận dữ liệu cá nhân mà chúng tôi tiết lộ;
						</li>
						<li className="list-item">
							- Các quyền và nghĩa vụ liên quan đến dữ liệu cá nhân mà chúng tôi
							thu thập; và
						</li>
						<li>
							- Các lựa chọn mà chúng tôi đề xuất, kể cả cách thức truy cập và
							cập nhật dữ liệu cá nhân
						</li>
					</ul>
					<p>
						Để tránh nhầm lẫn, Thông Báo Bảo Mật này chỉ áp dụng cho các khách
						hàng cá nhân. Bằng việc cung cấp dữ liệu cá nhân của một bên thứ ba
						(chẳng hạn như thông tin của người phụ thuộc, vợ/chồng, con cái
						và/hoặc cha mẹ, bạn bè, bên thụ hưởng, người được ủy quyền, đối tác,
						người liên hệ trong các trường hợp khẩn cấp hoặc cá nhân khác của
						Quý khách) cho chúng tôi, Quý khách cam đoan và bảo đảm rằng Quý
						khách đã có được sự đồng ý của bên thứ ba đó cho việc xử lý (bao gồm
						nhưng không giới hạn việc thu thập, sử dụng và tiết lộ) các thông
						tin cá nhân cho các mục đích được nêu tại văn bản này.
					</p>
				</div>
				<p>
					Chúng tôi hành động với tư cách là bên kiểm soát và xử lý dữ liệu cá
					nhân mà chúng tôi thu thập được từ Quý khách hoặc thu thập được trong
					suốt quá trình chúng tôi giao dịch với Quý khách. Điều này có nghĩa
					rằng chúng tôi quyết định mục đích và phương tiện xử lý dữ liệu cá
					nhân và khi hành động với tư cách là bên xử lý dữ liệu cá nhân, chúng
					tôi sẽ trực tiếp xử lý dữ liệu cá nhân đó.
				</p>
				<div className="flex-2 flex flex-col gap-2">
					<p>
						<span className="font-bold">1. Loại dữ liệu cá nhân</span> mà chúng
						tôi thu thập và cách thức mà chúng tôi thu thập dữ liệu cá nhân.
					</p>
					<p>
						1.1 Để chúng tôi có thể xử lý các yêu cầu của Quý khách, có thể mở
						và điều hành tài khoản/tiện ích cho Quý khách và/hoặc nhằm cung cấp
						khái quát các sản phẩm và dịch vụ của chúng tôi, chúng tôi, và bên
						xử lý dữ liệu mà chúng tôi thuê, có thể cần phải và/hoặc được yêu
						cầu phải thu thập, ghi, phân tích, xác nhận, lưu trữ, chỉnh sửa, sử
						dụng, công khai, kết hợp, truy cập, truy xuất, thu hồi, mã hóa, giải
						mã, sao chép, chia sẻ, truyền đưa, cung cấp, chuyển giao, xóa, hủy
						dữ liệu cá nhân hoặc các hành động khác có liên quan (nghĩa là, “xử
						lý”) dữ liệu cá nhân, mà các dữ liệu này chứa đựng bất kỳ dữ liệu
						nào có liên quan một cách trực tiếp hoặc gián tiếp đến Quý khách
						và/hoặc các giao dịch mà Quý khách thực hiện với chúng tôi. Chúng
						tôi, và bên xử lý dữ liệu mà chúng tôi thuê, có thể xử lý các loại
						dữ liệu cá nhân, bao gồm cả dữ liệu cá nhân nhạy cảm, được thu thập
						sau đây về Quý khách:
					</p>
					{info1.map((data, i) => (
						<p key={i}>{data}</p>
					))}
					<p>
						1.2 Chúng tôi, và bên xử lý dữ liệu mà chúng tôi sử dụng, có thể thu
						thập những dữ liệu này từ Quý khách khi Quý khách yêu cầu, hoặc
						trong quá trình chúng tôi cung cấp cho Quý khách, bất kỳ sản phẩm và
						dịch vụ nào của chúng tôi, và từ nhiều nguồn đa dạng, bao gồm nhưng
						không giới hạn: <br /> (i) thông qua quan hệ giữa Quý khách và chúng
						tôi, ví dụ thông tin mà Quý khách cung cấp trong các văn bản đăng ký
						hoặc các tài liệu hỗ trợ giao dịch, khi Quý khách sử dụng các sản
						phẩm hoặc dịch vụ của chúng tôi, khi tham gia các khảo sát, sự cạnh
						tranh và chương trình khuyến mại dành cho khách hàng, và trong quá
						trình đánh giá tài chính; <br /> (ii) thông qua liên hệ trao đổi
						bằng lời nói và văn bản của Quý khách với chúng tôi và/ hoặc các đối
						tác hợp tác kinh doanh của chúng tôi; <br /> (iii) từ các nhà cung
						cấp, bên cung cấp dịch vụ, đối tác, thương nhân và các bên thứ ba,
						bao gồm nhưng không giới hạn các bên tư vấn về khảo sát, truyền
						thông mạng xã hội, tiếp thị, tham chiếu tín dụng, ngăn ngừa gian
						lận, tập hợp dữ liệu; bên hỗ trợ cơ sở hạ tầng và phương tiện, và
						các bên thứ ba khác liên quan đến hoạt động kinh doanh của chúng
						tôi; <br /> (iv) từ bất kỳ bên cung cấp báo cáo tín dụng, bên cung
						cấp tham chiếu tín dụng và các cơ quan thuộc chính phủ, hoặc thông
						tin thu thập từ bất kỳ nguồn công cộng sẵn có, các hướng dẫn, hoặc
						cơ quan đăng ký nào; <br /> (v) từ hoạt động phân tích Quý khách sử
						dụng và quản lý (các) tài khoản/ tiện ích của Quý khách tại nền tảng
						của chúng tôi (bao gồm trang web FIMI.tech và Ứng dụng FIMI), từ các
						giao dịch mà Quý khách thực hiện và từ khoản thanh toán được thực
						hiện từ/ đến (các) tài khoản/ tiện ích của Quý khách;
					</p>
					{info2.map((data, i) => (
						<p key={i}>{data}</p>
					))}
					<p>
						1.3 Chúng tôi và những người đại diện của chúng tôi có thể ghi lại
						và/ hoặc quản lý các hệ thống thông tin liên lạc (bao gồm điện
						thoại, các hội thoại qua điện thoại cố định và điện thoại di động,
						thư điện tử, tin nhắn tức thời, phòng trò chuyện, fax và các phương
						tiện liên lạc điện tử khác) giữa Quý khách, đại diện theo ủy quyền
						hoặc được cho phép, với nhân viên, đại lý, bên tư vấn của FIMI Chúng
						tôi chỉ thực hiện những hoạt động nêu trên trong phạm vi pháp luật
						áp dụng cho phép nhằm phục vụ những mục đích hợp pháp hoặc những mục
						đích mà pháp luật cho phép hoặc yêu cầu. Chúng tôi thu thập dữ liệu
						cá nhân này vì một số lý do bao gồm nhưng không giới hạn:
					</p>
					{info3.map((data, i) => (
						<p key={i}>{data}</p>
					))}
					<p className="mt-2 font-bold">
						2. Chúng tôi xử lý dữ liệu cá nhân của Quý khách
					</p>
					<p>
						2.1 Chúng tôi, và bên xử lý dữ liệu mà chúng tôi sử dụng, có thể xử
						lý dữ liệu cá nhân vì một hoặc nhiều mục đích sau đây:
					</p>
					{info4.map((data, i) => (
						<p key={i}>{data}</p>
					))}
					<p>
						2.2 Một tập tin được tạo ra bởi trang mạng mà Quý khách truy cập
						(cookie) là một tệp văn bản nhỏ mà một trang mạng có thể gửi đến
						trình duyệt của Quý khách, mà sau đó có thể được lưu trữ trên hệ
						thống của Quý khách. Chúng tôi sử dụng cookies trong một số trang
						của chúng tôi để thu thập thông tin về những người dùng trang mạng
						của chúng tôi (ví dụ, lưu lại các tùy chọn của những người dùng và
						ghi lại thông tin phiên truy cập) và thông tin mà chúng tôi thu thập
						sẽ được sử dụng sau đó để đảm bảo mức độ dịch vụ được cá nhân hóa
						cho những người dùng của chúng tôi. Quý khách có thể điều chỉnh các
						cài đặt trên trình duyệt của Quý khách để Quý khách được thông báo
						khi nhận một cookie. Trong trường hợp Quý khách mong muốn tắt các
						cookies được liên kết với các công nghệ đó, Quý khách có thể làm
						điều đó bằng cách thay đổi các cài đặt trong trình duyệt của Quý
						khách. Tuy nhiên, khi làm như vậy, Quý khách có thể không thể sử
						dụng một số chức năng nhất định hoặc truy cập và một số (các) phần
						nhất định trên các trang mạng của chúng tôi.
					</p>
					<p>
						2.3 Chúng tôi sẽ yêu cầu sự tự nguyện đồng ý cho phép của Quý khách
						trước khi sử dụng dữ liệu cá nhân của Quý khách cho mục đích khác
						ngoài các mục đích đã được nêu tại Thông Báo Bảo Mật này và tại các
						điều khoản bảo mật trong (các) thỏa thuận của Quý khách với FIMI.
					</p>
					<p className="mt-2 font-bold">
						3. Việc tiết lộ dữ liệu cá nhân của Quý khách:
					</p>
					<p>
						3.1 Để cung cấp cho Quý khách các sản phẩm và dịch vụ của chúng tôi
						và để quản lý và/hoặc vận hành các sản phẩm và dịch vụ đó, và/hoặc
						để phục vụ các mục đích khác như được mô tả ở trên, chúng tôi có thể
						tiết lộ dữ liệu cá nhân của Quý khách hoặc dữ liệu cá nhân của các
						bên thứ ba có liên quan đến Quý khách, cho các bên dưới đây:
					</p>
					{info5.map((data, i) => (
						<p key={i}>{data}</p>
					))}
					<p>
						3.2 Ngoài ra, các tổ chức riêng lẻ liên kết với FIMI, thương nhân và
						đối tác chiến lược của chúng tôi có thể liên hệ với Quý khách về các
						sản phẩm, dịch vụ và ưu đãi mà chúng tôi tin rằng Quý khách có thể
						quan tâm hoặc mang lại lợi ích sử dụng cho Quý khách.
					</p>
					<p>
						3.3 Mặt khác, chúng tôi sẽ coi dữ liệu cá nhân của Quý khách là
						riêng tư và bí mật và ngoài các bên đã nêu ở trên, chúng tôi sẽ
						không tiết lộ dữ liệu của Quý khách cho bất kỳ bên nào khác ngoại
						trừ:
					</p>
					{info6.map((data, i) => (
						<p key={i}>{data}</p>
					))}
					<p className="mt-2 font-bold">
						4. Bảo mật dữ liệu cá nhân của Quý khách
					</p>
					<p>
						4.1. Việc xử lý dữ liệu cá nhân có thể gây rủi ro rò rỉ dữ liệu hoặc
						xử lý dữ liệu không phù hợp. Hiểu được tầm quan trọng của việc bảo
						vệ dữ liệu cá nhân, chúng tôi coi thông tin là tài sản quý giá của
						mình và do đó chúng tôi rất coi trọng việc đảm bảo an toàn đối với
						dữ liệu cá nhân của Quý khách. Chúng tôi thường xuyên xem xét và cập
						nhật các biện pháp quản lý và kỹ thuật khi xử lý dữ liệu cá nhân của
						Quý khách.
					</p>
					<p>
						4.2. Nhân viên của chúng tôi được đào tạo để xử lý dữ liệu cá nhân
						một cách an toàn và với sự tôn trọng tối đa, và nếu vi phạm sẽ bị xử
						lý kỷ luật.
					</p>
					<p className="mt-2 font-bold">
						5. Quyền và nghĩa vụ của Quý khách liên quan đến dữ liệu cá nhân mà
						chúng tôi thu thập
					</p>
					<p>
						5.1. Chúng tôi có thể hỗ trợ Quý khách truy cập và chỉnh sửa dữ liệu
						cá nhân của Quý khách do chúng tôi nắm giữ.
					</p>
					<p>
						5.2. Khi Quý khách muốn truy cập vào dữ liệu cá nhân của Quý khách
						mà chúng tôi đang sở hữu, hoặc khi Quý khách cho rằng dữ liệu cá
						nhân được chúng tôi nắm giữ là không chính xác, không đầy đủ, gây
						hiểu nhầm hoặc không cập nhật, nếu có liên quan, Quý khách có thể
						yêu cầu chúng tôi thông qua các kênh liên hệ chính thống và công
						khai của chúng tôi hoặc qua (các) kênh khác mà chúng tôi có thể
						thiết lập tùy từng thời điểm.
					</p>
					<p>
						5.3. Chúng tôi, bằng sự nỗ lực hợp lý, sẽ tuân thủ yêu cầu truy cập
						hoặc chỉnh sửa dữ liệu cá nhân của Quý khách trong vòng 72 giờ kể từ
						khi nhận được yêu cầu hoàn chỉnh và hợp lệ và phí xử lý liên quan
						(nếu có) từ Quý khách, tùy thuộc vào quyền của chúng tôi được viện
						đến bất kỳ sự miễn trừ và/hoặc ngoại lệ nào theo quy định pháp luật.
					</p>
					<p>
						5.4. Xin lưu ý rằng chúng tôi có thể từ chối quyền truy cập vào dữ
						liệu cá nhân của Quý khách trong một số trường hợp nhất định, ví dụ
						như khi chúng tôi không thể xác nhận danh tính của Quý khách hoặc
						khi dữ liệu được yêu cầu có tính chất thương mại bí mật hoặc trong
						trường hợp chúng tôi nhận được nhiều yêu cầu lặp lại đối với cùng
						một dữ liệu. Tuy nhiên, chúng tôi sẽ thông báo cho Quý khách về lý
						do không thể đồng ý với yêu cầu của Quý khách.
					</p>
					<p>
						5.5. Cũng xin lưu ý rằng, chúng tôi có thể, bằng quyết định của
						mình, cho phép chỉnh sửa theo yêu cầu và/hoặc có thể yêu cầu thêm
						tài liệu chứng minh về dữ liệu mới để tránh gian lận và không chính
						xác.
					</p>
					<p>
						5.6. Quý khách có thể hỗ trợ chúng tôi cập nhật dữ liệu cá nhân của
						mình (như số điện thoại liên lạc và địa chỉ hiện tại), điều này cho
						phép chúng tôi phục vụ Quý khách một cách tốt hơn.
					</p>
					<p>
						5.7. Quý khách có thể rút lại sự đồng ý của mình đối với bất kỳ hoặc
						tất cả các mục đích được nêu trong Thông Báo này bằng cách để lại
						yêu cầu qua các kênh liên hệ chính thống và công khai của chúng tôi.
						Nếu Quý khách rút lại sự đồng ý của mình đối với bất kỳ hoặc tất cả
						các mục đích và tuỳ thuộc vào bản chất yêu cầu của Quý khách, FIMI
						có thể sẽ không tiếp tục cung cấp các sản phẩm hoặc dịch vụ của
						chúng tôi đến Quý khách. Việc rút lại sự đồng ý này sẽ được xem là
						sự chấm dứt từ phía Quý khách cho bất kỳ mối quan hệ hợp đồng nào mà
						Quý khách có với chúng tôi, và vi phạm nghĩa vụ hoặc các cam kết
						theo hợp đồng của Quý khách, đồng thời chúng tôi bảo lưu rõ ràng các
						quyền và biện pháp khắc phục hợp pháp của chúng tôi trong những
						trường hợp đó
					</p>
					<p>
						5.8. Không ảnh hưởng đến những điều trên, Quý khách đồng ý và thừa
						nhận rằng bất kỳ sự rút lại sự đồng ý nào theo các điều khoản được
						nêu trong Thông Báo Bảo Mật này sẽ không ảnh hưởng đến bất kỳ sự
						đồng ý nào mà Quý khách đã có với FIMI đối với việc sử dụng (các) số
						điện thoại ở Việt Nam, các thư điện tử và các dữ liệu cá nhân khác
						của Quý khách để nhận các thông tin tiếp thị hoặc quảng cáo. Tuy vậy
						Quý khách luôn có thể, bằng một yêu cầu cụ thể, rút lại sự đồng ý về
						việc nhận các thông tin tiếp thị nêu trên vào bất kỳ thời điểm nào.{' '}
					</p>
					<p>
						5.9. Thông Báo Bảo Mật này không được xem là vi phạm Điều Khoản và
						Điều Kiện. Các quyền của chúng tôi theo Thông Báo Bảo Mật này được
						xem là bổ sung và không ảnh hưởng đến các quyền khác về thu thập, sử
						dụng, tiết lộ, và các hoạt động xử lý dữ liệu cá nhân khác được nêu
						trong Điều Khoản và Điều Kiện hoặc theo pháp luật hiện hành quy định
						và không một điều khoản nào trong Thông Báo Bảo Mật này hàm ý hạn
						chế bất kỳ quyền nào trong số các quyền khác này của chúng tôi.
					</p>
					<p className="mt-2 font-bold">
						Lưu trữ dữ liệu cá nhân của Quý khách
					</p>
					<p>
						Chúng tôi sẽ lưu trữ dữ liệu cá nhân của Quý khách trong khoảng thời
						gian được yêu cầu trong mối quan hệ với Quý khách, nhằm tuân thủ
						Thông Báo Bảo Mật này và/ hoặc các điều khoản và điều kiện trong
						(các) thoả thuận giữa Quý khách và chúng tôi, trong khoảng thời gian
						cần thiết khác để đáp ứng lợi ích của FIMI và/ hoặc của khách hàng,
						hoặc khi pháp luật và/ hoặc các chính sách có liên quan của FIMI quy
						định, hoặc trong khoảng thời gian khác mà các mục đích cho việc thu
						thập dữ liệu cá nhân của Quý khách vẫn còn hiệu lực.
					</p>
					<p className="mt-2">
						<span className="font-bold">
							7. Trường hợp Quý khách cung cấp dữ liệu cá nhân
						</span>{' '}
						không đầy đủ Chúng tôi dựa vào dữ liệu cá nhân của Quý khách để cung
						cấp các sản phẩm và dịch vụ đến Quý khách, bởi lẽ đó, Quý khách cần
						đảm bảo rằng tại mọi thời điểm, các thông tin do Quý khách cung cấp
						cho chúng tôi là đúng, chính xác và đầy đủ. Quý khách cần cập nhật
						kịp thời tất cả thay đổi đối với các thông tin đã cung cấp cho chúng
						tôi. Trường hợp Quý khách rút lại đồng ý về việc cho phép thu thập,
						sử dụng và tiết lộ thông tin cá nhân của Quý khách theo Thông Báo
						Bảo Mật này, thì việc rút lại đồng ý đó có thể làm cho dịch vụ của
						chúng tôi bị giới hạn, hạn chế, tạm ngừng, hủy bỏ, ngăn cản hoặc bị
						cấm đoán, tùy từng trường hợp. Chúng tôi sẽ không chịu trách nhiệm
						đối với Quý khách cho bất kỳ tổn thất nào phát sinh, và các quyền
						hợp pháp của chúng tôi sẽ được bảo lưu một cách rõ ràng đối với việc
						giới hạn, hạn chế, tạm ngừng, hủy bỏ, ngăn cản, hoặc cấm đoán đó.
					</p>
					<p className="mt-2 font-bold">8. Sửa đổi Thông Báo Bảo Mật</p>
					<p>
						Thông Báo Bảo Mật này có thể được sửa đổi theo thời gian. Thông báo
						về bất kỳ sự sửa đổi nào sẽ được đăng tải trên trang điện tử của
						chúng tôi và/ hoặc các phương tiện liên lạc khác mà chúng tôi cho là
						phù hợp.
					</p>
					<p className="mt-2 font-bold">
						9. Liên hệ với chúng tôi về quyền riêng tư của Quý khách và xử lý dữ
						liệu cá nhân của Quý khách
					</p>
					<p>
						Trường hợp Quý khách có bất kỳ câu hỏi nào liên quan đến Thông Báo
						Bảo Mật này hoặc cách chúng tôi xử lý dữ liệu cá nhân của Quý khách,
						vui lòng trao đổi với bất kỳ Nhân Viên Dịch Vụ Khách Hàng nào qua
						các kênh liên hệ chính thống và công khai của chúng tôi tại trang
						web FIMI.tech và Ứng dụng FIMI.
					</p>
				</div>
			</div>
		</DialogWrapper>
	)
}

export default SecurityPolicy
