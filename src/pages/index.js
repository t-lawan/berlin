import React from "react"
import styled from "styled-components"
import NewsList from "../components/news/newslist"
import Layout from "../components/layout/layout"
import UpcomingEvents from "../components/events/upcomingevents"
import ResourcesList from "../components/resources/resources-list"
import { IndexPageWrapper } from "./de"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper";

const IndexPage = props => {
  const exhibitions = props.exhibitions.filter(exhibition => {
    return exhibition.experience === props.experience.toString()
  });
  const language = getCurrentLanguageString(props.languages);
  const renderComponent = (
    <IndexPageWrapper>
      {exhibitions.length !== 0 ? (
        <div
          dangerouslySetInnerHTML={{
            __html: exhibitions[0][language].description
          }}
        />
      ) : (
        ""
      )}
    </IndexPageWrapper>
  )
  return (
    <Layout
      firstColumn={<ResourcesList />}
      secondColumn={renderComponent}
      numberOfColumnsIsTwo={true}
      thirdColumn={<UpcomingEvents />}
    />
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    exhibitions: state.exhibitions,
  }
}

export default connect(
  mapStateToProps,
  null
)(IndexPage)
