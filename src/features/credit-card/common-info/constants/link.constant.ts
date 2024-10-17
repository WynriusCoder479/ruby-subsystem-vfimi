export const linkProduct = (code: string, type: string) => {
	let link: string = ''

	switch (type) {
		case 'vpbankcc':
			link = `https://cards.vpbank.com.vn/?utm_campaign=JarvisCustCC.Partner&utm_source=FiMi&utm_medium=${code}`
			break
		case 'hdbvjp':
			link = `https://hdbank.page.link/?link=https://hdbank.page.link/?channel%3Ddop%26productcode%3DDOPVJ%26utm_source%3DFIMI%26utm_campaign%3Dtest%26utm_channel%3DDOP%26utm_ref%3D${code}&apn=com.vnpay.hdbank&isi=1461658565&ibi=com.vnpay.HDBank`
			break
		case 'hdb4in1':
			link = `https://hdbank.page.link/?link=https://hdbank.page.link/?channel%3Ddop%26productcode%3DDOPPLX%26utm_source%3DFIMI%26utm_campaign%3Dtest%26utm_channel%3DDOP%26utm_ref%3D${code}&apn=com.vnpay.hdbank&isi=1461658565&ibi=com.vnpay.HDBank`
			break
		case 'tpbevo':
			link = `https://evocard.tpb.vn/?utm_source=avay_afffimi&utm_campaign=First&utm_medium=${code}`
			break
		case 'vibtra':
			link = `https://www.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-travel-eilte&utm_source=REFERCARD&utm_medium=REFER_CARD&utm_content=Affiliate_FIMIVIB-${code}`
			break
		case 'vibpre':
			link = `https://www.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-premier-boundless&utm_source=REFERCARD&utm_medium=REFER_CARD&utm_content=Affiliate_FIMIVIB-${code}`
			break
		case 'vibsup':
			link = `https://www.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-supercard&utm_source=Public_Website&utm_medium=Affiliate_FIMIVIB-${code}-&utm_content=Affiliate_FIMIVIB-${code}`
			break
		case 'vibonl':
			link = `https://www.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-onlineplus-2in1&utm_source=Public_Website&utm_medium=Affiliate_FIMIVIB-${code}-&utm_content=Affiliate_FIMIVIB-${code}`
			break
		case 'vibcas':
			link = `https://www.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-cashback&utm_source=REFERCARD&utm_medium=REFER_CARD&utm_content=Affiliate_FIMIVIB-${code}`
			break
		case 'vibfam':
			link = `https://www.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-family-link&utm_source=REFERCARD&utm_medium=REFER_CARD&utm_content=Affiliate_FIMIVIB-${code}`
			break
		case 'vibfin':
			link = `https://wwww.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-financial-free&utm_source=REFERCARD&utm_medium=REFER_CARD&utm_content=Affiliate_FIMIVIB-${code}`
			break
		case 'viblaz':
			link = `https://www.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-lazcard&utm_source=REFERCARD&utm_medium=REFER_CARD&utm_content=Affiliate_FIMIVIB-${code}`
			break
		case 'vibrew':
			link = `https://www.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-rewards-unlimited&utm_source=REFERCARD&utm_medium=REFER_CARD&utm_content=Affiliate_FIMIVIB-${code}`
			break
		case 'vibivy':
			link = `https://www.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-ivycard&utm_source=Public_Website&utm_medium=Affiliate_FIMIVIB-${code}&utm_content=Affiliate_FIMIVIB-${code}`
			break
	}

	return link
}
