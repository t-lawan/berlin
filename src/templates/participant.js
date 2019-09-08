import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import Layout from "../components/layout/layout"
import UpcomingEvents from "../components/events/upcomingevents"
import { Convert } from "../utility/convert"
import SEO from "../components/seo/seo"
const ParticipantPageWrapper = styled.div`
  padding: 2em 1em;
`
const Participant = props => {
  const language = getCurrentLanguageString(props.languages)
  const participant = Convert.toParticipantModel(props.pageContext)
  const renderComponent = (
    <ParticipantPageWrapper>
      <h3>
        {participant.firstname} {participant.lastname}
      </h3>
      <p
        dangerouslySetInnerHTML={{
          __html: participant[language].project_description
        }}
      />

      <p
        dangerouslySetInnerHTML={{
          __html: participant[language].short_bio
        }}
      />
    </ParticipantPageWrapper>
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
)(Participant)
