import React from 'react'

export const News = (props) => (
  <div style={{ margin: '0 auto' }}>
      新闻资讯
  </div>
)

News.propTypes = {
  news: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default News