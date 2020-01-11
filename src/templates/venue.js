import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { getCurrentLanguageString, truncateText } from "../utility/helper"
import Layout from "../components/layout/layout"
import UpcomingEvents from "../components/events/upcomingevents"
import { Convert } from "../utility/convert"
import SEO from "../components/seo/seo"
import { PageWrapper, TextBlock } from "./page.styles"
import ImageResource from "../partials/ImageResource"
import { Color, ExternalLink } from "../index.styles"
import NewsList from "../components/news/newslist";
import striptags from 'striptags';

const VenueLink = styled(ExternalLink)`
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
        title={venue[venuePageInfo.language.toUpperCase()].venue_name}
        description={venue[venuePageInfo.language.toUpperCase()].venue_name}
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
        <VenueLink colour={Color.red} href={venue.google_map_link} target="_blank">Link to map </VenueLink>
      </TextBlock>
    </PageWrapper>
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
)(Venue)
