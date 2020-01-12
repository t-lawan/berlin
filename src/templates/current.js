import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import NewsList from "../components/news/newslist";
import UpcomingEvents from "../components/events/upcomingevents";
import ResourcesList from "../components/resources/resources-list";

const Current = props => {
  let renderComponent = (
    <>
      <NewsList />
      <UpcomingEvents />
    </>
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

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(
  mapStateToProps,
  null
)(Current)
