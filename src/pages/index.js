import React from "react"
import NewsList from "../components/news/newslist"
import Layout from "../components/layout/layout"
import UpcomingEvents from "../components/events/upcomingevents"
import ResourcesList from "../components/resources/resources-list"
import { IndexPageWrapper } from "./de"
import { connect } from "react-redux"
import SEO from "../components/seo/seo";
import ExhibitionContent from "../components/exhibition/exhibition-content";
import Logo from "../components/logo/logo";

const IndexPage = props => {
  const exhibitions = props.exhibitions.filter(exhibition => {
    return exhibition.experience === props.experience.toString()
  })
  const renderComponent = (
    <IndexPageWrapper>
      <SEO lang={'en'} />
      {exhibitions.length !== 0 ? (
        <ExhibitionContent exhibition={exhibitions[0]} />
      ) : (
        ""
      )}
    </IndexPageWrapper>
  )

  const thirdColumn = (
    <>
      <Logo />
      <NewsList isHome={true}/>
      <UpcomingEvents isHome={true}/>
    </>
  )
  return (
    <Layout
      firstColumn={<ResourcesList />}
      secondColumn={renderComponent}
      numberOfColumnsIsTwo={true}
      thirdColumn={thirdColumn}
      isHome={true}
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
