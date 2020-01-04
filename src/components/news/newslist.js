import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import { NewsListWrapper } from "./newslist.styles"
import NewsItem from './news-item';
import { DateManager } from "../../utility/date";

const NewsList = props => {
  const filteredNews = props.news.filter(news => {
    return news.experience.includes(props.experience.toString()) && news.show_in_feed && DateManager.getDaysFromCurrentDate(news.dates[0]) < 0; 
  }).reverse();
  return (
    <NewsListWrapper show={filteredNews.length > 0}>
      {filteredNews.map(news => (
        <NewsItem
          key={news.id}
          newsItem={news}
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
