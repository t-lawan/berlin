import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString, pageMap } from "../utility/helper"
import Calendar from "../components/calendar/calendar"
import ResourcesList from "../components/resources/resources-list"
import SEO from "../components/seo/seo"
import { PageTitle, PageTitleCalendar } from "./page.styles";

const CalendarTemplate = props => {
  const language = getCurrentLanguageString(props.languages)
  let title = props.pageContext.language === "en" ? "Calendar" : "Kalender"
  let path = pageMap.find((pg) => {
    return pg[props.pageContext.language.toUpperCase()] == props.pageContext.slug
  })  

  const renderComponent = (
    <>
      <SEO title={title} description={title} pathname={path ? path[props.pageContext.language.toUpperCase()] : null} />
      <PageTitleCalendar> {content[language].title} </PageTitleCalendar>
      <Calendar />
    </>
  )
  let thirdColumn = (
    <>
      <ResourcesList />
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
    title: "calendar",
  },
  DE: {
    title: "kalender",
  },
}
const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(
  mapStateToProps,
  null
)(CalendarTemplate)
