import React from "react"
import { NewsItemWrapper, NewsItemLink } from "./news-item.styles"
import PropTypes from "prop-types"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import { connect } from "react-redux"

const NewsItem = props => {
  let renderComponent;
  let news = props.newsItem;
  let language = getCurrentLanguageString(props.languages);
  let item;
  if (news.has_link) {
    renderComponent = (
      <NewsItemLink to={createPath(language, `news/${news.slug}`)}>
        <p> {news[language].news_title}</p>
        <p> {news[language].news_subtitle}</p>
        <div ref={c => (item = c)} dangerouslySetInnerHTML={{ __html: news[language].news_text.split('<p>')[0] }} />
      </NewsItemLink>
    )
  } else {
    renderComponent = (
      <>
        <p> {news[language].news_title}</p>
        <p> {news[language].news_subtitle}</p>
        <div ref={c => (item = c)} dangerouslySetInnerHTML={{ __html: news[language].news_text.split('<p>')[0] }} />
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

export default connect(
  mapStateToProps,
  null
)(NewsItem)
