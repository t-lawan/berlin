import React from "react"
import striptags from "striptags"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { TwoColumnPageWrapper, PageWrapper } from "./page.styles"
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
import PublicationItem from "../components/publications/publication-item";

const PublicationExternalLink = styled(ExternalLink)`
    text-decoration: underline;
    text-decoration-color: ${Color.red};
`
const Publication = props => {
  const language = getCurrentLanguageString(props.languages)
  let publication = Convert.toPublicationModel(props.pageContext)
  let title = publication[props.pageContext.language.toUpperCase()]
    ? truncateText(
        striptags(publication[props.pageContext.language.toUpperCase()].title)
      )
    : ""
  let description = publication[props.pageContext.language.toUpperCase()]
    ? truncateText(
        striptags(
          publication[props.pageContext.language.toUpperCase()].description
        )
      )
    : ""

  let path = pageMap.find(pg => {
    return pg["EN"] == "publication"
  })
  const renderComponent = (
    <PageWrapper>
      <SEO
        title={title}
        description={description}
        lang={props.pageContext.language}
        pathname={`${path[props.pageContext.language.toUpperCase()]}/${
          publication.slug
        }`}
        image={publication.social_media_image}
      />
      <PublicationItem publication={publication} />
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

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(mapStateToProps, null)(Publication)
