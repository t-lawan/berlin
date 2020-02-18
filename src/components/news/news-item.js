import React from "react"
import {
  NewsItemWrapper,
  NewsItemLink,
  NewsText,
  NewsItemContainer,
} from "./news-item.styles"
import PropTypes from "prop-types"
import { getCurrentLanguageString, createPath, truncateText } from "../../utility/helper"
import { connect } from "react-redux"
import striptags from "striptags"

const NewsItem = props => {
  let renderComponent
  let news = props.newsItem
  let language = getCurrentLanguageString(props.languages)
  // let item;
  if (news.has_link) {
    renderComponent = (
      <NewsItemContainer>
        <NewsItemLink to={createPath(language, `news/${news.slug}`)}>
          <p> {news[language].news_title}</p>
          <p> {news[language].news_subtitle}</p>
          <NewsText
            dangerouslySetInnerHTML={{ __html: truncateText(striptags(news[language].news_text), 20)}}
          />
          <span hidden={news[language].news_text.length === 0}> ... more </span>
        </NewsItemLink>
      </NewsItemContainer>
    )
  } else {
    renderComponent = (
      <>
        <p> {news[language].news_title}</p>
        <p> {news[language].news_subtitle}</p>
        <div
          dangerouslySetInnerHTML={{ __html: news[language].news_text }}
        />
      </>
    )
  }

  return <NewsItemWrapper> {renderComponent}</NewsItemWrapper>
}

NewsItem.propTypes = {
  newsItem: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
  }
}

export default connect(mapStateToProps, null)(NewsItem)
