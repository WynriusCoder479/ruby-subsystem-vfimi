import DialogWrapper from '@/components/common/dialog-wrapper'
import { Button } from '@/components/ui/button'

const UserPolicy = () => {
	return (
		<DialogWrapper
			title="NỘI DUNG CHÍNH SÁCH VỀ BẢO VỆ DỮ LIỆU CÁ NHÂN CHÍNH SÁCH BẢO VỆ DỮ LIỆU CÁ NHÂN ĐỐI VỚI KHÁCH HÀNG"
			trigger={
				<Button
					variant="link"
					className="p-0"
				>
					- Chính sách bảo vệ dữ liệu cá nhân.
				</Button>
			}
		>
			<div className="flex flex-col gap-2 text-justify text-xs">
				<p>
					FIMI chịu trách nhiệm quảng cáo và giới thiệu dịch vụ tài chính, bảo
					hiểm, hàng hóa và dịch vụ khác của các đối tác đến Quý khách. Quý
					khách vui lòng đọc các điều khoản dưới đây nhằm hiểu rõ hơn về mục
					đích, phạm vi thông tin mà chúng tôi xử lý dữ liệu cá nhân và các biện
					pháp chúng tôi áp dụng để bảo vệ thông tin và quyền lợi của Khách hàng
					đối với các hoạt động này.
				</p>
				{/* 1 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">Điều 1. Định nghĩa:</p>
					<p>
						1. Dữ liệu cá nhân: là thông tin dưới dạng ký hiệu, chữ viết, chữ
						số, hình ảnh, âm thanh hoặc dạng tương tự trên môi trường điện tử
						gắn liền với một con người cụ thể hoặc giúp xác định một con người
						cụ thể. Dữ liệu cá nhân bao gồm dữ liệu cá nhân cơ bản và dữ liệu cá
						nhân nhạy cảm.
					</p>
					<p>
						2. Xử lý dữ liệu cá nhân: là một hoặc nhiều hoạt động tác động tới
						dữ liệu cá nhân, như: thu thập, ghi, phân tích, xác nhận, lưu trữ,
						chỉnh sửa, công khai, kết hợp, truy cập, truy xuất, thu hồi, mã hóa,
						giải mã, sao chép, chia sẻ, truyền đưa, cung cấp, chuyển giao, xóa,
						hủy dữ liệu cá nhân hoặc các hành động khác có liên quan.
					</p>
				</div>
				{/* 2 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">Điều 2. Loại Dữ liệu được xử lý:</p>
					<p>
						1. Các Dữ liệu cá nhân của Khách hàng có thể được thu thập và xử lý
						bao gồm và/hoặc không giới hạn các loại dữ liệu cá nhân bao gồm các
						thông tin cá nhân cơ bản do Quý khách cung cấp trong quá trình đăng
						ký.
					</p>
					<p>
						2. Các thông tin, dữ liệu của Khách hàng nêu tại Điều này bao gồm dữ
						liệu cá nhân cơ bản và dữ liệu cá nhân nhạy cảm. Dữ liệu cá nhân
						nhạy cảm là những dữ liệu có liên quan đến quyền riêng tư của Khách
						hàng. Chúng tôi cam kết bảo vệ dữ liệu cá nhân nhạy cảm của Khách
						hàng phù hợp với quy định của pháp luật.
					</p>
				</div>
				{/* 3 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">
						Điều 3. Thông tin về tổ chức, cá nhân được xử lí dữ liệu cá nhân:
					</p>
					<p>
						FIMI, Các đối tác của FIMI, có thể bao gồm cơ quan nhà nước, các tổ
						chức đánh giá xếp hạng, đánh giá tín nhiệm, tổ chức cung cấp hạ tầng
						và công nghệ thông tin, các tổ chức và cá nhân có liên quan khác,
						được phép xử lý dữ liệu theo hợp đồng, thỏa thuận được thiết lập hợp
						pháp với các Bên nêu trên.
					</p>
				</div>
				{/* 4 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">
						Điều 4. Mục đích Xử lý dữ liệu cá nhân:
					</p>
					<p>
						1. Phục vụ cho việc đăng ký sử dụng các sản phẩm, dịch vụ tài chính,
						bảo hiểm, hàng hóa và dịch vụ khác tại các đối tác của FIMI.
					</p>
					<p>
						2. Việc Xử lý dữ liệu cá nhân của Khách hàng chỉ được thực hiện khi
						có sự đồng ý của Khách hàng, trừ trường hợp khác được pháp luật quy
						định. Các bên cam kết bảo mật tối đa Dữ liệu cá nhân theo quy định
						của pháp luật.
					</p>
				</div>
				{/* 5 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">Điều 5. Cách thức Xử lý dữ liệu</p>
					<p>
						1. Chúng tôi có thể thu thập dữ liệu cá nhân của Khách hàng theo các
						cách thức, hình thức như sau:
					</p>
					<ul className="space-y-1 pl-2">
						<li>(a) Thu thập trực tiếp từ Khách hàng</li>
						<li>(b) Thu thập từ bên thứ ba hoặc các nguồn thông tin khác</li>
					</ul>
					<p>
						2. Chúng tôi có thể xử lý dữ liệu cá nhân của Khách hàng theo các
						cách thức, hình thức như sau:
					</p>
					<ul className="space-y-1 pl-2">
						<li>
							(a) Tùy vào mục đích xử lý dữ liệu cá nhân Khách hàng trong từng
							trường hợp cụ thể, chúng tôi có thể áp dụng các cách thức xử lý
							phù hợp bao gồm nhưng không giới hạn các phương thức xử lý dữ liệu
							cá nhân tự động (thông qua cookies và/hoặc công nghệ có liên quan
							khác), không tự động hoặc các phương thức khác bảo đảm được yêu
							cầu về bảo vệ dữ liệu.
						</li>
						<li>
							(b) Trong quá trình xử lý dữ liệu, chúng tôi áp dụng một hoặc
							nhiều hoạt động tác động tới dữ liệu cá nhân như: thu thập, ghi,
							phân tích, xác nhận, lưu trữ, chỉnh sửa, công khai, kết hợp, truy
							cập, truy xuất, thu hồi, mã hóa, giải mã, sao chép, chia sẻ,
							truyền đưa, cung cấp, chuyển giao, xóa, hủy dữ liệu, cá nhân hoặc
							các hành động khác có liên quan.
						</li>
						<li>
							(c) Các bên có thể trực tiếp hoặc thông qua Bên xử lý dữ liệu cá
							nhân để xử lý dữ liệu của Khách hàng phù hợp với quy định pháp
							luật hiện hành
						</li>
					</ul>
				</div>
				{/* 6 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">
						Điều 6. Thời gian bắt đầu và kết thúc Xử lý dữ liệu:
					</p>
					<p>
						1. Thời gian bắt đầu xử lý dữ liệu: Kể từ thời điểm Khách hàng chấp
						thuận với Chính sách này hoặc khi dữ liệu được cung cấp, thu thập
						phù hợp với quy định của Chính sách này và quy định pháp luật.
					</p>
					<p>
						2. Thời gian kết thúc xử lý dữ liệu: Cho tới thời điểm Khách hàng
						yêu cầu chấm dứt việc xử lý dữ liệu hoặc thời điểm các bên hoàn
						thành quá trình Xử lý dữ liệu phù hợp với mục đích xử lý và quy định
						của pháp luật.
					</p>
				</div>
				{/* 7 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">
						Điều 7. Quy định về giới thiệu sản phẩm:
					</p>
					<p>
						1. Trường hợp Khách hàng đã đồng ý cho phép các bên xử lý Dữ liệu cá
						nhân của mình cho mục đích tiếp thị, giới thiệu sản phẩm, dịch vụ,
						Khách hàng đồng ý rằng các bên có quyền tiếp thị, quảng cáo, giới
						thiệu sản phẩm theo nội dung, hình thức, tần suất như sau:
					</p>
					<ul className="space-y-1 pl-2">
						<li>
							(a) Nội dung: Tiếp thị, giới thiệu sản phẩm quảng cáo của FIMI và
							đối tác.
						</li>
						<li>
							(b) Phương thức: Qua tin nhắn quảng cáo, thông báo trên website,
							ứng dụng hoặc các phương thức khác theo quy định của pháp luật.
						</li>
						<li>
							(c) Hình thức: gửi trực tiếp cho Khách hàng qua không gian mạng,
							thiết bị, phương tiện điện tử hoặc các hình thức khác theo quy
							định của pháp luật.
						</li>
						<li>(d) Tần suất: Theo quy định pháp luật về quảng cáo.</li>
					</ul>
					<p>
						2. Ngoài các nội dung quy định tại khoản 1 Điều này, các bên có
						trách nhiệm tuân thủ các quy định của pháp luật về quảng cáo.
					</p>
				</div>
				{/* 8 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">Điều 8. Quyền của Khách hàng:</p>
					<p>
						Theo quy định tại Nghị định 13/2023/NĐ-CP về bảo vệ dữliệu cá nhân,
						Quý Khách là chủ thể dữ liệu cá nhân của mình và có quyền đối với dữ
						liệu cá nhân của mình.
					</p>
					<p>
						1. Khách hàng có quyền được biết về hoạt động xử lý dữ liệu cá nhân
						của mình, trừ trường hợp pháp luật có quy định khác.
					</p>
					<p>
						2. Khách hàng có quyền đồng ý hoặc không đồng ý cho phép xử lý dữ
						liệu cá nhân của mình, trừ trường hợp luật có quy định khác.
					</p>
					<p>
						3. Khách hàng được quyền truy cập để xem, chỉnh sửa hoặc yêu cầu
						chỉnh sửa Dữ liệu cá nhân của mình bằng cách gửi văn bản gửi đến các
						bên, trừ trường hợp luật có quy định khác.
					</p>
					<p>
						4. Khách hàng có quyền rút lại sự đồng ý của mình bằng cách gửi văn
						bản gửi đến các bên, trừ trường hợp pháp luật có quy định khác. Việc
						rút lại sự đồng ý không ảnh hưởng đến tính hợp pháp của việc xử lý
						dữ liệu đã được Khách hàng đồng ý với các bên trước khi rút lại sự
						đồng ý.
					</p>
					<p>
						5. Khách hàng được quyền xóa hoặc yêu cầu xóa dữ liệu cá nhân của
						mình bằng cách gửi văn bản gửi đến các bên, trừ trường hợp luật có
						quy định khác.
					</p>
					<p>
						6. Khách hàng được quyền yêu cầu hạn chế xử lý Dữ liệu cá nhân của
						mình bằng cách gửi văn bản gửi đến các bên, trừ trường hợp luật có
						quy định khác. Việc hạn chế xử lý dữ liệu sẽ được các bên thực hiện
						trong 72 giờ sau khi có yêu cầu của Khách hàng, với toàn bộ Dữ liệu
						cá nhân mà Khách hàng yêu cầu hạn chế, trừ trường hợp luật có quy
						định khác.
					</p>
					<p>
						7. Khách hàng được quyền yêu cầu các bên cung cấp cho bản thân Dữ
						liệu cá nhân của mình bằng cách gửi văn bản, trừ trường hợp luật có
						quy định khác.
					</p>
					<p>
						8. Khách hàng được quyền phản đối, Tổ chức được xử lý dữ liệu cá
						nhân quy định tại Điều 3 Chính sách này xử lý dữ liệu cá nhân của
						mình bằng cách gửi văn bản nhằm ngăn chặn hoặc hạn chế tiết lộ Dữ
						liệu cá nhân hoặc sử dụng cho mục đích quảng cáo, tiếp thị, trừ
						trường hợp luật có quy định khác. Các bên sẽ thực hiện yêu cầu của
						Khách hàng trong 72 giờ sau khi nhận được yêu cầu, trừ trường hợp
						luật có quy định khác.
					</p>
					<p>
						9. Khách hàng có quyền khiếu nại, tố cáo hoặc khởi kiện theo quy
						định của pháp luật.
					</p>
					<p>
						10. Khách hàng có quyền yêu cầu bồi thường đối với thiệt hại thực tế
						theo quy định của pháp luật nếu các bên có hành vi vi phạm quy định
						về bảo vệ Dữ liệu cá nhân của mình, trừ trường hợp các bên có thỏa
						thuận khác hoặc luật có quy định khác.
					</p>
					<p>
						11. Khách hàng có quyền tự bảo vệ theo quy định của Bộ luật Dân sự,
						luật khác có liên quan và Nghị định 13/2023/NĐ-CP, hoặc yêu cầu cơ
						quan, tổ chức có thẩm quyền thực hiện các phương thức bảo vệ quyền
						dân sự theo quy định tại Điều 11 Bộ luật Dân sự.
					</p>
				</div>
				{/* 9 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">Điều 9. Nghĩa vụ của Khách hàng:</p>
					<p>
						Theo quy định tại Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân,
						Quý Khách là chủ thể dữ liệu cá nhân của mình và có nghi ̃a vụ đối
						với dữ liệu cá nhân của mình, bao gồm:
					</p>
					<p>
						1. Tuân thủ các quy định của pháp luật, quy định, hướng dẫn đến xử
						lý Dữ liệu cá nhân của Khách hàng.
					</p>
					<p>
						2. Cung cấp đầy đủ, trung thực, chính xác Dữ liệu cá nhân, các thông
						tin khác khi đăng ký và sử dụng dịch vụ và cập nhật đầy đủ, chính
						xác, trung thực khi có thay đổi về các thông tin này. Nếu có bất kỳ
						thông tin sai lệch nào FIMI sẽ không chịu trách nhiệm trong trường
						hợp thông tin đó làm ảnh hưởng hoặc hạn chế quyền lợi của Khách
						hàng. Trường hợp không thông báo, nếu có phát sinh rủi ro, tổn thất
						thì Khách hàng chịu trách nhiệm về những sai sót hay hành vi lợi
						dụng, lừa đảo khi sử dụng dịch vụ do lỗi của mình hoặc do không cung
						cấp đúng, đầy đủ, chính xác, kịp thời sự thay đổi thông tin; bao gồm
						cả thiệt hại về tài chính, chi phí phát sinh do thông tin cung cấp
						sai hoặc không thống nhất.
					</p>
					<p>
						3. Phối hợp với các bên, cơ quan nhà nước có thẩm quyền hoặc bên thứ
						ba trong trường hợp phát sinh các vấn đề ảnh hưởng đến tính bảo mật
						Dữ liệu cá nhân của Khách hàng.
					</p>
					<p>
						4. Tự bảo vệ dữ liệu cá nhân của mình; chủ động áp dụng các biện
						pháp nhằm bảo vệ Dữ liệu cá nhân của mình trong quá trình sử dụng
						dịch vụ; thông báo kịp thời cho các bên khi phát hiện thấy có sai
						sót, nhầm lẫn về Dữ liệu cá nhân của mình hoặc nghi ngờ Dữ liệu cá
						nhân của mình đang bị xâm phạm.
					</p>
					<p>
						5. Tự chịu trách nhiệm đối với những thông tin, dữ liệu, chấp thuận
						mà mình tạo lập, cung cấp trên môi trường mạng; tự chịu trách nhiệm
						trong trường hợp dữ liệu cá nhân bị rò rỉ, xâm phạm do lỗi của mình
					</p>
					<p>
						6. Thường xuyên cập nhật các quy định, chính sách về xử lý Dữ liệu
						cá nhân của trong từng thời kỳ được thông báo tới Khách hàng hoặc
						đăng tải trên Kênh truyền thông. Thực hiện các hành động theo hướng
						dẫn của FIMI để thể hiện rõ việc chấp thuận hoặc không chấp thuận
						đối với các mục đích xử lý Dữ liệu cá nhân được thông báo tới Khách
						hàng trong từng thời kỳ.
					</p>
					<p>7. Các trách nhiệm khác theo quy định của pháp luật.</p>
				</div>
				{/* 10 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">
						Điều 10. Quyền của các bên xử lý dữ liệu:
					</p>
					<p>
						1. Xử lý dữ liệu cá nhân của Khách hàng theo đúng mục đích, phạm vi
						và các nội dung khác đã thỏa thuận với Khách hàng và/hoặc được Khách
						hàng đồng ý.
					</p>
					<p>
						2. Sửa đổi Chính sách này theo từng thời kỳ và bảo đảm Khách hàng
						được thông báo thông qua các Kênh truyền thông FIMI trước khi áp
						dụng.
					</p>
					<p>
						3. Có quyền từ chối những yêu cầu không hợp pháp của Khách hàng.
					</p>
					<p>
						4. Quyết định áp dụng các biện pháp phù hợp để bảo vệ Dữ liệu cá
						nhân của Khách hàng.
					</p>
					<p>
						5. Trong phạm vi pháp luật cho phép, trường hợp Khách hàng có yêu
						cầu rút lại sự đồng ý và/hoặc đề nghị FIMI hoặc các bên liên quan
						xóa dữ liệu, hạn chế xử lý dữ liệu cá nhân của Khách hàng thì FIMI
						có quyền hạn chế, ngừng, hủy bỏ một phần hoặc toàn bộ việc cung cấp
						sản phẩm, dịch vụ cho Khách hàng do không có đầy đủ các thông tin,
						dữ liệu để thực hiện cung cấp các sản phẩm, dịch vụ cho Khách hàng;
						Khách hàng tự chịu trách nhiệm đối với mọi hậu quả, thiệt hại có thể
						xảy ra.
					</p>
					<p>
						6. Các quyền khác được quy định tại Chính sách này và theo quy định
						của pháp luật.
					</p>
				</div>
				{/* 11 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">
						Điều 11. Nghĩa vụ của các bên xử lý dữ liệu:
					</p>
					<p>
						1. Tuân thủ các quy định của pháp luật trong quá trình xử lý dữ liệu
						cá nhân của Khách hàng.
					</p>
					<p>
						2. Áp dụng các biện pháp bảo mật thông tin phù hợp để tránh việc
						truy cập, thay đổi, sử dụng, tiết lộ trái phép dữ liệu cá nhân của
						Khách hàng.
					</p>
					<p>
						3. Thực hiện đúng theo các yêu cầu hợp pháp của Khách hàng liên quan
						đến Dữ liệu cá nhân của Khách hàng.
					</p>
					<p>
						4. Bảo đảm có cơ chế cho phép Khách hàng thực hiện các quyền liên
						quan đến Dữ liệu cá nhân của mình.
					</p>
					<p>
						5. Phối hợp với cơ quan nhà nước có thẩm quyền và các tổ chức, cá
						nhân có liên quan khác để giảm thiểu tối đa thiệt hại khi phát hiện
						hành vi vi phạm pháp luật đối với Dữ liệu cá nhân của Khách hàng.
					</p>
					<p>
						6. Chịu trách nhiệm trước Khách hàng đối với những thiệt hại phát
						sinh do lỗi của các bên thực hiện không đúng các quy định của pháp
						luật về xử lý dữ liệu hoặc không đúng theo phạm vi, mục đích đã thỏa
						thuận với Khách hàng.
					</p>
					<p>
						7. Các nghi ̃a vụ khác được quy định tại Chính sách này và theo quy
						định của pháp luật.
					</p>
				</div>
				{/* 12 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">
						Điều 12. Hậu quả, thiệt hại không mong muốn có thể xảy ra:
					</p>
					<p>
						1. Các bên cam kết luôn sử dụng nhiều công nghệ bảo mật thông tin
						khác nhau nhằm bảo vệ Dữ liệu cá nhân của Khách hàng không bị truy
						lục, sử dụng hoặc chia sẻ ngoài ý muốn. Tuy nhiên, không một dữ liệu
						nào có thể được bảo mật 100%. Vì vậy, chúng tôi cam kết sẽ bảo mật
						một cách tối đa Dữ liệu cá nhân của Khách hàng. Một số hậu quả,
						thiệt hại không mong muốn có thể xảy ra bao gồm nhưng không giới
						hạn:
					</p>
					<ul className="space-y-1 pl-2">
						<li>
							(a) Lỗi phần cứng, phần mềm trong quá trình xử lý dữ liệu làm mất
							dữ liệu của Khách hàng;
						</li>
						<li>
							(b) Lỗ hổng bảo mật nằm ngoài khả năng kiểm soát, hệ thống bị
							hacker tấn công gây lộ lọt dữ liệu
						</li>
						<li>
							(c) Khách hàng tự làm lộ lọt dữ liệu cá nhân do: bất cẩn hoặc bị
							lừa đảo; truy cập các website/tải các ứng dụng có chứa phần mềm
							độc hại...
						</li>
					</ul>
					<p>
						2. Chúng tôi khuyến cáo Khách hàng bảo mật các thông tin liên quan
						đến mật khẩu đăng nhập vào tài khoản của Khách hàng, mã OTP và không
						chia sẻ mật khẩu đăng nhập, mã OTP này với bất kỳ người nào khác.
					</p>
					<p>
						3. Trong trường hợp máy chủ lưu trữ dữ liệu bị hacker tấn công dẫn
						đến mất mát Dữ liệu cá nhân của Khách hàng, chúng tôi sẽ có trách
						nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp
						thời và thông báo cho Khách hàng được biết.
					</p>
				</div>
				{/* 13 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">Điều 13. Điều khoản chung:</p>
					<p>
						1. Khách hàng đã biết rõ và đồng ý Chính sách này là Thông báo xử lý
						dữ liệu cá nhân được thực hiện theo quy định tại Điều 13 Nghị định
						13/NĐ-CP/2023 và được sửa đổi, bổ sung trong từng thời kỳ.
					</p>
					<p>
						2. Khách hàng cam kết thực hiện nghiêm túc các điều khoản, điều kiện
						nêu tại Chính sách này. Các vấn đề chưa được quy định, các Bên thống
						nhất thực hiện theo quy định của pháp luật, hướng dẫn của cơ quan
						Nhà nước có thẩm quyền và/hoặc các sửa đổi, bổ sung Chính sách này
						được FIMI thông báo cho khách hàng trong từng thời kỳ.
					</p>
					<p>
						3. Chính sách này được giao kết trên cơ sở thiện chí giữa FIMI và
						Khách hàng. Trong quá trình thực hiện nếu phát sinh tranh chấp, các
						Bên sẽ chủ động giải quyết trên cơ sở thương lượng trên tinh thần
						các bên cùng có lợi. Trường hợp tranh chấp không giải quyết được,
						tranh chấp sẽ được đưa ra Tòa án nhân dân có thẩm quyền để giải
						quyết theo quy định của pháp luật.
					</p>
					<p>
						4. Khách hàng hiểu và đồng ý rằng, Chính sách này có thể được sửa
						đổi theo từng thời kỳ và được thông báo tới Khách hàng trước khi áp
						dụng. Việc Khách hàng tiếp tục sử dụng dịch vụ sau thời hạn thông
						báo về các nội dung sửa đổi, bổ sung trong từng thời kỳ đồng nghĩa
						với việc Khách hàng đã chấp nhận các nội dung sửa đổi, bổ sung đó.
					</p>
					<p>
						5. Quý khách với vai trò là Chủ thể dữ liệu xác nhận đã được thông
						báo và đồng ý cho phép FIMI & đối tác của FIMI, và có thể bao gồm cơ
						quan nhà nước, các tổ chức cung cấp hệ thống CNTT liên quan khác,
						được phép thu thập, xử lý, phân tích, lưu trữ, truyền đưa các dữ
						liệu cá nhân cơ bản do Quý khách khai báo với FIMI để phục vụ cho
						mục đích đăng ký sử dụng các sản phẩm, dịch vụ tài chính, bảo hiểm,
						hàng hóa và dịch vụ khác tại các đối tác của FIMI.
					</p>
				</div>
			</div>
		</DialogWrapper>
	)
}

export default UserPolicy
