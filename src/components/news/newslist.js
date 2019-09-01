import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import { NewsListWrapper } from "./newslist.styles"
import NewsItem from './news-item';

const NewsList = props => {
  const filteredNews = props.news.filter(news => {
    return news.experience === props.experience
  })
  const language = getCurrentLanguageString(props.languages)
  return (
    <NewsListWrapper>
      {filteredNews.map(news => (
        <NewsItem
          key={news.id}
          title={news[language].title}
          description={news[language].description}
        />
      ))}
    </NewsListWrapper>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    news: state.news
  }
}

export default connect(
  mapStateToProps,
  null
)(NewsList)
