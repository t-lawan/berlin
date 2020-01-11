import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString, createPath, truncateText } from "../utility/helper"
import UpcomingEvents from "../components/events/upcomingevents"
import { TwoColumnPageWrapper, TextBlock } from "./page.styles"
import SEO from "../components/seo/seo"
import { Convert } from "../utility/convert";
import ImageResource from "../partials/ImageResource";
import { DateManager } from "../utility/date";
import NewsList from "../components/news/newslist";
import striptags from 'striptags';
 
const News = props => {
  const language = getCurrentLanguageString(props.languages)
  let item = Convert.toNewsModel(props.pageContext);
  let description = item[props.pageContext.language] ? truncateText(striptags(item[props.pageContext.language].news_subtitle)) : ""

  let renderComponent = (
    <>
      <TwoColumnPageWrapper>
        <SEO
          title={`hi`}
          description={description}
          lang={props.pageContext.language}
        />
        <div>
          {item.dates.map((date, index) => (
              <p key={index}> {DateManager.createLongDateString(date, language.toLowerCase())} </p>
          ))}
        </div>

        <div>
        <ImageResource id={item.thumbnail_image} withCaption={false} />
          <TextBlock>
            <h1> {item[language].news_title}</h1>
            <h2> {item[language].news_subtitle}</h2>
          </TextBlock>
          <TextBlock>
          <div
          dangerouslySetInnerHTML={{
            __html: item[language].news_text,
          }}
        />
          </TextBlock>
        </div>
      </TwoColumnPageWrapper>
    </>
  )
  let thirdColumn = (
    <>
      <NewsList />
      <UpcomingEvents />
    </>
  )
  return (
    <Layout
      firstColumn={renderComponent}
      numberOfColumnsIsTwo={false}
      thirdColumn={thirdColumn}
    />
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(
  mapStateToProps,
  null
)(News)
