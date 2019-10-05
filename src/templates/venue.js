import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import Layout from "../components/layout/layout"
import UpcomingEvents from "../components/events/upcomingevents"
import { Convert } from "../utility/convert"
import SEO from "../components/seo/seo"
import { PageWrapper, TextBlock } from "./page.styles"
import ImageResource from "../partials/ImageResource"
import { Color } from "../index.styles"
const VenueLink = styled.a`
  :hover {
    color: ${Color.red};
  }
  padding-bottom: 1em;
`

const VenueTitle = styled.div`
  margin-bottom: 1em;

  font-size: 1.3em;
`
const Venue = props => {
  const language = getCurrentLanguageString(props.languages)
  const venuePageInfo = props.pageContext
  const venue = Convert.toVenueModel(props.pageContext)

  const renderComponent = (
    <PageWrapper colour={Color.yellow}>
      <SEO
        title={`${venuePageInfo.slug}`}
        description={`${venuePageInfo.slug}`}
        lang={venuePageInfo.language}
      />
      <VenueTitle
        dangerouslySetInnerHTML={{
          __html: venue[language].venue_name,
        }}
      />
      <ImageResource
        id={venue.thumbnail_image ? venue.thumbnail_image : 411}
        withCaption={true}
      />
      <TextBlock>
        {venue.address.map((address, index) => (
          <p key={index}> {address.address_line}</p>
        ))}
        <p> {venue.city}</p>
        <p> {venue.venue_plz}</p>
      </TextBlock>
      <p>Directions </p>
      <TextBlock>
        {venue.public_transit.map((direction, index) => (
          <p key={index}> {direction.transit_option}</p>
        ))}
      </TextBlock>
      <TextBlock>
        <p hidden={!venue.wheelchair_access}> Wheelchair access</p>
      </TextBlock>
      <TextBlock>
        <VenueLink href={venue.google_map_link} target="_blank">Link to map </VenueLink>
      </TextBlock>
    </PageWrapper>
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
)(Venue)
