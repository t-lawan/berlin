import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import NewsList from "../components/news/newslist"
import UpcomingEvents from "../components/events/upcomingevents"
import { getCurrentLanguageString, pageMap, capitalise } from "../utility/helper"
import SEO from "../components/seo/seo"
import ParticipantOverview from "../components/participant/participant-overview";


const Participants = props => {
  let language = getCurrentLanguageString(props.languages)

  let path = pageMap.find(pg => {
    return (
      pg[props.pageContext.language.toUpperCase()] == props.pageContext.slug
    )
  })

  let renderComponent = (
    <>
      <SEO
        title={capitalise(path[props.pageContext.language.toUpperCase()])}
        lang={props.pageContext.language}
        pathname={path ? path[props.pageContext.language.toUpperCase()] : null}
      />
    <ParticipantOverview />
    </>
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

let content = {
  EN: {
    title: "Participants",
  },
  DE: {
    title: "Participants",
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(mapStateToProps, null)(Participants)
