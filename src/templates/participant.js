import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import Layout from "../components/layout/layout"
import UpcomingEvents from "../components/events/upcomingevents"
import { Convert } from "../utility/convert"
import SEO from "../components/seo/seo"
import NewsList from "../components/news/newslist"
import { TwoColumnPageWrapper } from "./page.styles"

const Participant = props => {
  const language = getCurrentLanguageString(props.languages)
  const participant = Convert.toParticipantModel(props.pageContext)
  const renderComponent = (
    <TwoColumnPageWrapper>
      <SEO
        title={`${participant.firstname} ${participant.lastname}`}
        description={`${participant.slug}`}
        lang={props.pageContext.language}
      />
      <div></div>
      <div>
        <h3>
          {participant.firstname} {participant.lastname}
        </h3>
        <p
          dangerouslySetInnerHTML={{
            __html: participant[language].project_description,
          }}
        />

        <p
          dangerouslySetInnerHTML={{
            __html: participant[language].short_bio,
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

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(mapStateToProps, null)(Participant)
