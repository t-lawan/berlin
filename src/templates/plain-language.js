import React from "react"
import Layout from "../components/layout/layout"
import { PageWrapper,PageTitle } from "./page.styles"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import SEO from "../components/seo/seo"


const plainLanguage = props => {
  const language = getCurrentLanguageString(props.languages)
  let content = props.pageContext;
  let title = content.title ? content.title : '';
  const renderComponent = (
    <PageWrapper>
      <SEO
        title={PlainTitle[language].label}
        description={`${props.pageContext.slug}`}
        lang={props.pageContext.language}
      />

      <PageTitle>{PlainTitle[language].label}</PageTitle>
        
      <div
        dangerouslySetInnerHTML={{
          __html: content.acf[language].plain_language,
        }}
      />
    </PageWrapper>
  )



  let thirdColumn = (
    <>
 
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

const PlainTitle = {
  EN: {
    label: "Plain language",
  },
  DE: {
    label: "Leichte Sprache",
  },
}

export default connect(
  mapStateToProps,
  null
)(plainLanguage)
