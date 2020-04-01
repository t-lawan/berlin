import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import {
  getCurrentLanguageString,
  truncateText,
  pageMap,
} from "../utility/helper"
import UpcomingEvents from "../components/events/upcomingevents"
import { TwoColumnPageWrapper, TextBlock } from "./page.styles"
import SEO from "../components/seo/seo"
import { Convert } from "../utility/convert"
import ImageResource from "../partials/ImageResource"
import { DateManager } from "../utility/date"
import { size, } from "../index.styles"
import NewsList from "../components/news/newslist"
import striptags from "striptags";
import styled from 'styled-components';
const NewsTitle = styled.h1`
  padding-top: 0rem;
  padding-bottom: 0.5rem;
  font-size: 1.6em;
  @media (min-width: ${size.laptopM}) {
    font-size: 1.7em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.9em;
  }
  line-height: 1.2;
`
const NewsSubTitle = styled.h2`
  padding-top: 0rem;
  padding-bottom: 0.5rem;
  margin-top:-1.2em;
  margin-bottom:0.5em;
  font-size: 1em;
  @media (min-width: ${size.laptopM}) {
    font-size: 1.1em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.2em;
  }
  line-height: 1.4;
`

const News = props => {
  const language = getCurrentLanguageString(props.languages)
  let item = Convert.toNewsModel(props.pageContext)
  let description = item[props.pageContext.language.toUpperCase()]
    ? truncateText(
        striptags(item[props.pageContext.language.toUpperCase()].news_subtitle)
      )
    : ""
  let title = item[props.pageContext.language.toUpperCase()].news_title;
  let path = pageMap.find((pg) => {
    return pg["EN"] == "news"
  })
  let renderComponent = (
    <>
      <TwoColumnPageWrapper>
        <SEO
          title={title}
          description={description}
          lang={props.pageContext.language}
          pathname={`${path[props.pageContext.language.toUpperCase()]}/${item.slug}`}

        />
        <div>
          {item.dates.map((date, index) => (
            <p key={index}>
              {" "}
              {DateManager.createLongDateString(
                date,
                language.toLowerCase()
              )}{" "}
            </p>
          ))}
        </div>

        <div>
          {item.thumbnail_image ? (
            <ImageResource id={item.thumbnail_image} withCaption={false} />
          ) : null}
          <TextBlock>
            <NewsTitle
              dangerouslySetInnerHTML={{
                __html: striptags(item[language].news_title, ["em"]),
              }}
            />
            
            {item[language].news_subtitle ? (
              <NewsSubTitle
                dangerouslySetInnerHTML={{
                  __html: striptags(item[language].news_subtitle, ["em"]),
                }}
              />
            ) : null}

            
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

export default connect(mapStateToProps, null)(News)
