import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import ResourcesList from "../components/resources/resources-list"
import { getCurrentLanguageString, pageMap } from "../utility/helper"
import { PageTitle, TextBlock, PageWrapper } from "./page.styles"
import SEO from "../components/seo/seo";
import DocumentationList from "../components/documentation/documentation-list";

const Media = props => {
  let language = getCurrentLanguageString(props.languages)
  let path = pageMap.find((pg) => {
    return pg[props.pageContext.language.toUpperCase()] == props.pageContext.slug
  })

  let renderComponent = (
    <PageWrapper>
      <SEO title={path[props.pageContext.language.toUpperCase()]} lang={props.pageContext.language} pathname={path ? path[props.pageContext.language.toUpperCase()] : null} />
      <TextBlock>
        <PageTitle> {content[language].title} </PageTitle>
      </TextBlock>
      <DocumentationList />
    </PageWrapper>
  )
  let thirdColumn = (
    <>
      <ResourcesList />
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
    title: "media",
  },
  DE: {
    title: "mediathek",
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(
  mapStateToProps,
  null
)(Media)
