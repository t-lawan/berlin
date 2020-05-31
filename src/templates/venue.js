import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import Layout from "../components/layout/layout"
import UpcomingEvents from "../components/events/upcomingevents"
import { Convert } from "../utility/convert"
import SEO from "../components/seo/seo"
import { PageWrapper } from "./page.styles"
import { Color, ExternalLink } from "../index.styles"
import NewsList from "../components/news/newslist";
import VenueItem from "../components/venues/venue-item";

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
      <VenueItem venue={venue} />
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
