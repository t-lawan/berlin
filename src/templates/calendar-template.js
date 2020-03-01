import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import Calendar from "../components/calendar/calendar"
import ResourcesList from "../components/resources/resources-list"
import SEO from "../components/seo/seo"
import { PageTitle, PageTitleCalendar } from "./page.styles";

const CalendarTemplate = props => {
  const language = getCurrentLanguageString(props.languages)
  let title = props.pageContext.language === "en" ? "Calendar" : "Kalender"
  const renderComponent = (
    <>
      <SEO title={title} description={title} />
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
