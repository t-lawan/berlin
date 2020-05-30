import React from "react"
import striptags from "striptags"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { TwoColumnPageWrapper } from "./page.styles"
import { connect } from "react-redux"
import {
  getCurrentLanguageString,
  pageMap,
  truncateText,
} from "../utility/helper"
import SEO from "../components/seo/seo"
import NewsList from "../components/news/newslist"
import { Convert } from "../utility/convert"
import { ExternalLink, Color } from "../index.styles";
import styled from 'styled-components';
import PublicationList from "../components/publications/publication-list";

const PublicationExternalLink = styled(ExternalLink)`
    text-decoration: underline;
    text-decoration-color: ${Color.red};
`
const Publications = props => {
  const language = getCurrentLanguageString(props.languages)
  // let publication = Convert.toPublicationModel(props.pageContext)
  // let title = publication[props.pageContext.language.toUpperCase()]
  //   ? truncateText(
  //       striptags(publication[props.pageContext.language.toUpperCase()].title)
  //     )
  //   : ""
  // let description = publication[props.pageContext.language.toUpperCase()]
  //   ? truncateText(
  //       striptags(
  //         publication[props.pageContext.language.toUpperCase()].description
  //       )
  //     )
  //   : ""
  let title = 'Publications'
  let description = "Publication"
  let path = pageMap.find(pg => {
    return pg["EN"] == "publications"
  })
  const renderComponent = (
    <>
      <SEO
        title={title}
        description={description}
        lang={props.pageContext.language}
        // pathname={`${path[props.pageContext.language.toUpperCase()]}/${
        //   publication.slug
        // }`}
      />
      <PublicationList />
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

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(mapStateToProps, null)(Publications)
