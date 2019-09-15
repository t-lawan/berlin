import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import Layout from "../components/layout/layout"
import UpcomingEvents from "../components/events/upcomingevents"
import { Convert } from "../utility/convert"
import SEO from "../components/seo/seo"
import { PageWrapper } from "./page.styles"

const Venue = props => {
  const language = getCurrentLanguageString(props.languages)
  const venue = Convert.toVenueModel(props.pageContext)
  const renderComponent = (
    <PageWrapper>
      <SEO
        title={`${props.pageContext.slug}`}
        description={`${props.pageContext.slug}`}
        lang={props.pageContext.language}
      />
      <h2
        dangerouslySetInnerHTML={{
          __html: venue[language].venue_name,
        }}
      />
      <h3> Address </h3>
      {venue.address.map((address, index) => (
        <p key={index}> {address.address_line}</p>
      ))}
      <p> {venue.city}</p>
      <p
        dangerouslySetInnerHTML={{
          __html: venue[language].access_info,
        }}
      />
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
