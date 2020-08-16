import React from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import { PageWrapper,PageTitle } from "./page.styles"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getCurrentLanguageString } from "../utility/helper"
import SEO from "../components/seo/seo"

const PlainLangBody = styled.div`
  > p > strong {
    font-family: Arial, sans-serif;
    font-weight: bold;
  }
  > ul {
    margin-top: 0 !important;
    margin-bottom: 1em !important;
    > li {
      list-style: disc inside none !important;
      margin-bottom: 0 !important;
      text-indent: -24px !important;
      padding-left: 20px !important;
      font-size: 1em !important;
      :before {
        content: "" !important;
        width: 0px !important;
      }
      > strong {
        font-family: Arial, sans-serif;
        font-weight: bold;
       }
    }
  }
`

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
        
      <PlainLangBody
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
