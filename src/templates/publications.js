import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { PageWrapper } from "./page.styles"
import { connect } from "react-redux"
import {
  getCurrentLanguageString,
  pageMap
} from "../utility/helper"
import SEO from "../components/seo/seo"
import NewsList from "../components/news/newslist"
import { ExternalLink, Color } from "../index.styles";
import styled from 'styled-components';
import PublicationList from "../components/publications/publication-list";

const PublicationExternalLink = styled(ExternalLink)`
    text-decoration: underline;
    text-decoration-color: ${Color.red};
`
const Publications = props => {
  const language = getCurrentLanguageString(props.languages)

  let path = pageMap.find(pg => {
    return pg["EN"] == "publications"
  })
  const renderComponent = (
    <PageWrapper>
      <SEO
        title={content[props.pageContext.language.toUpperCase()].title}
        description={content[props.pageContext.language.toUpperCase()].title}
        lang={props.pageContext.language}
        // pathname={`${path[props.pageContext.language.toUpperCase()]}/${
        //   publication.slug
        // }`}
      />
      <PublicationList />
    </PageWrapper>
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
    title: "Publications",
  },
  DE: {
    title: "Publikationen",
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(mapStateToProps, null)(Publications)
