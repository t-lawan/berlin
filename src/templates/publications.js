import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { PageWrapper,PageTitle,PageSubTitle } from "./page.styles"
import { connect } from "react-redux"
import { getCurrentLanguageString, pageMap } from "../utility/helper"
import SEO from "../components/seo/seo"
import NewsList from "../components/news/newslist";
import { Convert } from "../utility/convert";

const Publications = props => {
  const language = getCurrentLanguageString(props.languages)
  let publication = Convert.toPublicationModel(props.pageContext);
  let title = publication[props.pageContext.lang.toUpperCase()] ? truncateText(striptags(publication[props.pageContext.lang.toUpperCase()].title)) : ""
  let description = publication[props.pageContext.lang.toUpperCase()] ?  truncateText(striptags(publication[props.pageContext.lang.toUpperCase()].description)) : "";
  let path = pageMap.find((pg) => {
    return pg["EN"] == "publication"
  })  
  const renderComponent = (
    <PageWrapper>
      <SEO title={title} description={description} lang={props.pageContext.lang} pathname={`${path[props.pageContext.lang.toUpperCase()]}/${publication.slug}`} />      
      <div
        dangerouslySetInnerHTML={{
          __html: publication[language].title,
        }}
      />
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

export default connect(
  mapStateToProps,
  null
)(Publications)
