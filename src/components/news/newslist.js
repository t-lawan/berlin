import React from "react"
import { connect } from "react-redux"
import { NewsListWrapper } from "./newslist.styles"
import NewsItem from "./news-item"
import { DateManager } from "../../utility/date"

const NewsList = props => {
  let filteredNews
  if (props.isCurrent) {
    filteredNews = props.news
      .filter(news => {
        return (
          news.experience.includes(props.active_experience.toString()) &&
          news.show_in_feed &&
          DateManager.getDaysFromCurrentDate(news.dates[0]) >= 0
        )
      })
      .reverse()
  } else {
    filteredNews = props.news
      .filter(news => {
        return (
          news.experience.includes(props.experience.toString()) &&
          news.show_in_feed &&
          DateManager.getDaysFromCurrentDate(news.dates[0]) >= 0 &&
          props.experience === props.active_experience
        )
      })
      .reverse()
  }

  return (
    <NewsListWrapper isCurrent={props.isCurrent} show={filteredNews.length > 0} isHome={props.isHome}>
      {filteredNews.map(news => (
        <NewsItem key={news.id} newsItem={news} />
      ))}
    </NewsListWrapper>
  )
}

// NewsList.propTypes = {
//   isHome: PropTypes.boolean,
// }

NewsList.defaultProps = {
  isHome: false,
  isCurrent: false,
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    news: state.news,
    active_experience: state.active_experience,
  }
}

export default connect(mapStateToProps, null)(NewsList)
