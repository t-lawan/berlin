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
import ParticipantSingle from "../components/participant/participant-single"
import ParticipantRelatedMaterial from "../components/participant/participant-related-material";
import ParticipantNavigator from "../components/participant/participant-navigator";

const ParticipantText = {
  EN: {
    related_documentation: "Related Documentation",
    related_resources: "Related Resources"
  },
  DE: {
    related_documentation: "Related Documentation",
    related_resources: "Related Resources"
  },
}

const RelatedTitle = styled.p`
  padding: 0 1rem;
`

const ParticipantWrapper = styled.div`
  padding: 1rem 0;
`

const Participant = props => {
  const language = getCurrentLanguageString(props.languages)
  const participant = Convert.toParticipantModel(props.pageContext)
  let path = pageMap.find(pg => {
    return pg["EN"] == "participant"
  })
    console.log("PA", participant)
  // console.log("RESO", resources)
  const renderComponent = (
    <ParticipantWrapper>
      <ParticipantNavigator id={participant.id} />
      <TwoColumnPageWrapper>
        <SEO
          title={
            participant.group
              ? `${participant[language].participant_group_name}`
              : `${participant.firstname} ${participant.lastname}`
          }
          description={`${participant.slug}`}
          lang={props.pageContext.language}
          image={participant.social_media_image}
          pathname={`${path[props.pageContext.language.toUpperCase()]}/${
            participant.slug
          }`}
        />
        <ParticipantSingle participant={participant} />
      </TwoColumnPageWrapper>
      {participant.related_documentation ? (
        <>
          <ParticipantRelatedMaterial doc_ids={participant.related_documentation} res_ids={participant.related_resources} />
        </>
      ) : null}
    </ParticipantWrapper>
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
