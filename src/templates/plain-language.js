import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { PageWrapper,PageTitle } from "./page.styles"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import SEO from "../components/seo/seo"
import NewsList from "../components/news/newslist";


const plainLanguage = props => {
  const language = getCurrentLanguageString(props.languages)
  let content = props.pageContext;
  let title = content.title ? content.title : '';
  const renderComponent = (
    <PageWrapper>
      <SEO
        title={title}
        description={`${props.pageContext.slug}`}
        lang={props.pageContext.language}
      />

      <PageTitle>Template Test</PageTitle>
        
      <div
        dangerouslySetInnerHTML={{
          __html: content.acf[language].plain_language,
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
)(plainLanguage)
