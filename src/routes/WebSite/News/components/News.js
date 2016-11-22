import React from 'react'
import WidthHeader from '../../../../components/WithHeader'
import Container from '../../../../components/Container'

export const News = (props) => (
	<WidthHeader>
		<Container>
		    新闻资讯
		</Container>
	</WidthHeader>

)

News.propTypes = {
	news: React.PropTypes.number.isRequired,
}

export default News