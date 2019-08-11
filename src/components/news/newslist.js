import React from "react"
import { getCurrentLanguageString } from "../../utility/helper";
import { generateNewsArticles } from "../../models/NewsModel";
import {connect} from 'react-redux';
import { NewsListWrapper, NewsItem} from "./newslist.styles";

let newsArray = generateNewsArticles(10);

const NewsList = props => {
  const filteredNews = newsArray.filter((news) =>{
    return news.experience === props.experience
  });
  const language = getCurrentLanguageString(props.languages);
  return (
  <NewsListWrapper>
    
      {filteredNews.map(news => (
       <NewsItem key={news.id}>
         <p> {news[language].title}</p>
         <p> {news[language].description}</p>
       </NewsItem>
      ))}
  
    </NewsListWrapper>
  )}

const mapStateToProps = state => {
  return {
      languages: state.languages,
      experience: state.experience
  }
}

export default connect(mapStateToProps, null) (NewsList);
