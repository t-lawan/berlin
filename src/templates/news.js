import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString, createPath } from "../utility/helper"
import UpcomingEvents from "../components/events/upcomingevents"
import { TwoColumnPageWrapper, TextBlock } from "./page.styles"
import SEO from "../components/seo/seo"
import { Convert } from "../utility/convert";
import ImageResource from "../partials/ImageResource";
import { DateManager } from "../utility/date";

const News = props => {
  const language = getCurrentLanguageString(props.languages)
  let item = Convert.toNewsModel(props.pageContext);

  let renderComponent = (
    <>
      <TwoColumnPageWrapper>
        <SEO
          title={`hi`}
          description={`hey`}
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
            <h2> {item[language].news_title}</h2>
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
  return (
    <Layout
      firstColumn={renderComponent}
      numberOfColumnsIsTwo={false}
      thirdColumn={<UpcomingEvents />}
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
