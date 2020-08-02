import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { getCurrentLanguageString, pageMap } from "../utility/helper"
import Layout from "../components/layout/layout"
import UpcomingEvents from "../components/events/upcomingevents"
import { Convert } from "../utility/convert"
import SEO from "../components/seo/seo"
import NewsList from "../components/news/newslist"
import { TwoColumnPageWrapper } from "./page.styles"
import ParticipantSingle from "../components/participant/participant-single";

const Participant = props => {
  const language = getCurrentLanguageString(props.languages)
  const participant = Convert.toParticipantModel(props.pageContext)
  console.log('PROPS', participant)
  let path = pageMap.find(pg => {
    return pg["EN"] == "participant"
  })
  const renderComponent = (
    <TwoColumnPageWrapper>
      <SEO
        title = {participant.group
          ? `${participant[language].participant_group_name}`
          : `${participant.firstname} ${participant.lastname}`}
        description={`${participant.slug}`}
        lang={props.pageContext.language}
        image={participant.social_media_image}
        pathname={`${path[props.pageContext.language.toUpperCase()]}/${
          participant.slug
            }`}
      />
      <ParticipantSingle participant={participant} />
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
