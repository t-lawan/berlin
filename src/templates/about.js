import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import SEO from "../components/seo/seo"
import { TwoColumnPageWrapper } from "./page.styles"
import styled from "styled-components"
import AboutNavbar from "../components/about/about-navbar";
import AboutComponents from "../components/about/about-components";


const ComponentWrapper = styled.section``
const About = props => {
  const language = getCurrentLanguageString(props.languages)
  const content = props.pageContext
  console.log("about", content)

  const renderComponent = (
    <TwoColumnPageWrapper>
      <SEO
        title={`${props.pageContext.slug}`}
        description={`${props.pageContext.slug}`}
        lang={props.pageContext.language}
      />
      <AboutNavbar />
      <AboutComponents content={content} />
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
