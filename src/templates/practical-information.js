import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import SEO from "../components/seo/seo"
import {
  TwoColumnPageWrapper,
  TextBlock,
  ResourcePublisherLink,
} from "./page.styles"
import { getDocument } from "../store/selector"
import ImageResource from "../partials/ImageResource"
const PracticalInformation = props => {
  const language = getCurrentLanguageString(props.languages)
  const pageInfo = props.pageContext
  console.log("props", pageInfo)
  const renderComponent = (
    <TwoColumnPageWrapper>
      <SEO
        title={`${pageInfo.slug}`}
        description={`${pageInfo.slug}`}
        lang={pageInfo.language}
      />
      <div>
        <TextBlock>
          {pageInfo.acf[language].address_info.map((address, index) => (
            <p key={index}> {address.address_line} </p>
          ))}
        </TextBlock>
        <TextBlock>
          <p>Opening hours</p>
          {pageInfo.acf[language].opening_times.map((time, index) => (
            <p key={index}> {time.opening_time_line} </p>
          ))}
        </TextBlock>
        <TextBlock>
          <p>Access</p>
          {pageInfo.acf.directions.map((directions, index) => (
            <p key={index}> {directions.directions_line} </p>
          ))}
          <ResourcePublisherLink target="_blank" href={pageInfo.acf.google_map_venue_link}> Direction</ResourcePublisherLink>
        </TextBlock>
      </div>

      <div>
        <ImageResource id={pageInfo.acf.thumbnail_image} withCaption={true} />
        <div
          dangerouslySetInnerHTML={{
            __html: pageInfo.acf[language].venue_description,
          }}
        />
      </div>
    </TwoColumnPageWrapper>
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
    documents: state.documents,
  }
}

export default connect(
  mapStateToProps,
  null
)(PracticalInformation)
