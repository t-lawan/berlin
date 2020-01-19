import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString, truncateText } from "../utility/helper"
import SEO from "../components/seo/seo"
import {
  TwoColumnPageWrapper,
  TextBlock,
  ResourcePublisherLink,
  PageTitle,
} from "./page.styles"
import ImageResource from "../partials/ImageResource"
import NewsList from "../components/news/newslist";
import striptags from 'striptags';

const PracticalInformation = props => {
  const language = getCurrentLanguageString(props.languages)
  const pageInfo = props.pageContext;
  // let title = truncateText(striptags(pageInfo.acf[`${pageInfo.language.toUpperCase()}`]))
  let description = truncateText(striptags(pageInfo.acf[`${pageInfo.language.toUpperCase()}`].venue_description));
  const renderComponent = (
    <TwoColumnPageWrapper>
      <SEO
        title={`${pageInfo.title}`}
        description={description}
        lang={pageInfo.language}
      />
      <div>
      <PageTitle
              dangerouslySetInnerHTML={{
                __html: content[language].title,
              }}
            />
        <TextBlock>
          {pageInfo.acf[language].address_info.map((address, index) => (
            <p key={index}> {address.address_line} </p>
          ))}
        </TextBlock>
        <TextBlock>
          <p>{content[language].opening_hours}</p>
          {pageInfo.acf[language].opening_times.map((time, index) => (
            <p key={index}> {time.opening_time_line} </p>
          ))}
        </TextBlock>
        <TextBlock>
          <p>{content[language].access}</p>
          {pageInfo.acf.directions.map((directions, index) => (
            <p key={index}> {directions.directions_line} </p>
          ))}
          <ResourcePublisherLink hidden={content[language].directions} target="_blank" href={pageInfo.acf.google_map_venue_link}> {content[language].directions}</ResourcePublisherLink>
        </TextBlock>
        <TextBlock>
          {pageInfo.acf[language].access_block.map((item, index) => (
            <p key={index}> {item.access_line} </p>
          ))}
        </TextBlock>
      </div>

      <div>
        <ImageResource id={pageInfo.acf.thumbnail_image} withCaption={true} />
        <TextBlock
          dangerouslySetInnerHTML={{
            __html: pageInfo.acf[language].venue_description,
          }}
        />
      </div>
    </TwoColumnPageWrapper>
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
const content = {
  EN: {
    opening_hours: 'Opening hours',
    access: 'Access',
    title: 'practical information',
    directions: 'Directions'
  },
  DE: {
    opening_hours: 'Öffnungszeiten',
    title: 'praktische information',
    access: 'Anfahrt',
    directions: 'Karte'

  },
}
const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
  }
}

export default connect(
  mapStateToProps,
  null
)(PracticalInformation)
