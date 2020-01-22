import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import Calendar from "../components/calendar/calendar"
import ResourcesList from "../components/resources/resources-list"
import SEO from "../components/seo/seo"
import { PageTitle } from "./page.styles";

const CalendarTemplate = props => {
  const language = getCurrentLanguageString(props.languages)
  let title = props.pageContext.language === "en" ? "Calendar" : "Kalender"
  const renderComponent = (
    <div>
      <SEO title={title} description={title} />
      <PageTitle> {content[language].title} </PageTitle>
      <Calendar />
    </div>
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
    title: "Calendar",
  },
  DE: {
    title: "Kalender",
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
