import React from "react"
import { NewsItemWrapper } from "./news-item.styles"
import PropTypes from "prop-types"

const NewsItem = props => (
  <NewsItemWrapper news>
    <img src="https://placebear.com/g/350/200" />
    <p> {props.title}</p>
    <p> {props.description}</p>
  </NewsItemWrapper>
)

NewsItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default NewsItem;
