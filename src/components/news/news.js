import React from "react"
import PropTypes from "prop-types"
import { NewsModel } from "../../models/NewsModel"
import {NewsWrapper, NewsLink} from "./news.styles";
const News = props => {
  return (
    <NewsWrapper>
      <NewsLink to={'/news/' + props.news.slug}>
        <h3> {props.article.en.title}</h3>
      </NewsLink>
      <p dangerouslySetInnerHTML={{ __html: props.news.en.content }} />
    </NewsWrapper>
  )
}

News.propTypes = {
  article: PropTypes.instanceOf(NewsModel),
}
export default Article
