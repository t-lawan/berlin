import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import SEO from "../components/seo/seo"
import { TwoColumnPageWrapper } from "./page.styles"

const About = props => {
  const language = getCurrentLanguageString(props.languages)
  console.log("about", props.pageContext)
  const renderComponent = (
    <TwoColumnPageWrapper>
      <SEO
        title={`${exhibition.slug}`}
        description={`${exhibition.slug}`}
        lang={props.pageContext.language}
      />
      <div>
        <h4>Hello </h4>
        <h4>Hello </h4>
        <h4>Hello </h4>
        <h4>Hello </h4>
        <h4>Hello </h4>
      </div>
      <div></div>
    </TwoColumnPageWrapper>
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
    documents: state.documents,
  }
}

export default connect(
  mapStateToProps,
  null
)(About)
