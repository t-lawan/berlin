import React from "react"
import PropTypes from "prop-types"
import { NewsModel } from "../../models/NewsModel"
import { Link } from "gatsby"
import {NewsWrapper, NewsLink} from "./news.styles";
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
