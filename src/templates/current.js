import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import NewsList from "../components/news/newslist"
import UpcomingEvents from "../components/events/upcomingevents"
import ResourcesList from "../components/resources/resources-list"
import { getCurrentLanguageString } from "../utility/helper"
import { PageTitle, TextBlock, PageWrapper } from "./page.styles"

const Current = props => {
  let language = getCurrentLanguageString(props.languages)
  let renderComponent = (
    <PageWrapper>
      <TextBlock>
        <PageTitle> {content[language].title} </PageTitle>
      </TextBlock>
      <NewsList />
      <UpcomingEvents />
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
    title: "current",
  },
  DE: {
    title: "aktuell",
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
)(Current)
