import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString, truncateText } from "../utility/helper"
import SEO from "../components/seo/seo"
import { TwoColumnPageWrapper } from "./page.styles"
import styled from "styled-components"
import AboutNavbar from "../components/about/about-navbar";
import AboutComponents from "../components/about/about-components";
import NewsList from "../components/news/newslist";
import striptags from 'striptags';


const ComponentWrapper = styled.section``
const About = props => {
  const language = getCurrentLanguageString(props.languages)
  const content = props.pageContext;
  let description = content.acf[`${content.language.toUpperCase()}_row`] ? truncateText(striptags(content.acf[`${content.language.toUpperCase()}_row`].description)) : "";
  const renderComponent = (
    <TwoColumnPageWrapper>
      <SEO
        title={`${props.pageContext.slug}`}
        description={`${description}`}
        lang={props.pageContext.language}
      />
      <AboutNavbar currentPage={content.slug} />
      <AboutComponents content={content} />
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
    documents: state.documents,
  }
}

export default connect(
  mapStateToProps,
  null
)(About)
