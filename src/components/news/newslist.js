import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { generateNewsArticles } from "../../models/NewsModel"
import { connect } from "react-redux"
import { NewsListWrapper } from "./newslist.styles"
import NewsItem from './news-item';
let newsArray = generateNewsArticles(50)

const NewsList = props => {
  const filteredNews = newsArray.filter(news => {
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
  }
}

export default connect(
  mapStateToProps,
  null
)(NewsList)
