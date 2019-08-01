import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { ArticleModel } from "../../models/ArticleModel"
import { Link } from "gatsby"
const ArticleWrapper = styled.div`
  border-bottom: 1px solid black;
`

const ArticleLink = styled(Link)``
const Article = props => {
  return (
    <ArticleWrapper>
      <ArticleLink to={'/article/' + props.article.slug}>
        <h3> {props.article.en.title}</h3>
      </ArticleLink>
      <p dangerouslySetInnerHTML={{ __html: props.article.en.content }} />
      <img src="https://via.placeholder.com/150" width="100%" height="300px" />
    </ArticleWrapper>
  )
}

Article.propTypes = {
  article: PropTypes.instanceOf(ArticleModel),
}
export default Article
