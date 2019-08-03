import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { NewsModel } from "../../models/NewsModel"
import { Link } from "gatsby"
const NewsWrapper = styled.div`
  border-bottom: 1px solid black;
`

const NewsLink = styled(Link)``
const News = props => {
  return (
    <NewsWrapper>
      <NewsLink to={'/news/' + props.news.slug}>
        <h3> {props.article.en.title}</h3>
      </NewsLink>
      <p dangerouslySetInnerHTML={{ __html: props.news.en.content }} />
      <img src="https://via.placeholder.com/150" width="100%" height="300px" />
    </NewsWrapper>
  )
}

News.propTypes = {
  article: PropTypes.instanceOf(NewsModel),
}
export default Article
