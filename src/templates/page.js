import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout"
import { PageWrapper } from "./page.styles"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import SEO from "../components/seo/seo"

const Page = props => {
  const language = getCurrentLanguageString(props.languages)
  const renderComponent = (
    <PageWrapper>
      <SEO
        title={`${props.pageContext.slug}`}
        description={`${props.pageContext.slug}`}
        lang={props.pageContext.language}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: props.pageContext.acf[language].content,
        }}
      />
    </PageWrapper>
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
  }
}

export default connect(
  mapStateToProps,
  null
)(Page)
