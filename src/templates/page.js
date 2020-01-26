import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { PageWrapper,PageTitle,PageSubTitle } from "./page.styles"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import SEO from "../components/seo/seo"
import NewsList from "../components/news/newslist";

const Page = props => {
  const language = getCurrentLanguageString(props.languages)
  let content = props.pageContext;
  const renderComponent = (
    <PageWrapper>
      <SEO
        title={`${props.pageContext.slug}`}
        description={`${props.pageContext.slug}`}
        lang={props.pageContext.language}
      />

      <PageTitle> {content.title} </PageTitle>
      
      <div
        dangerouslySetInnerHTML={{
          __html: props.pageContext.acf[language].content,
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
)(Page)
