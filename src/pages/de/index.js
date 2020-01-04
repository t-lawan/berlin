import React from "react"
import styled from "styled-components"
import NewsList from "../../components/news/newslist"
import Layout from "../../components/layout/layout"
import UpcomingEvents from "../../components/events/upcomingevents"
import ResourcesList from "../../components/resources/resources-list"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../../utility/helper"
import { Section, size } from "../../index.styles"
import ExhibitionContent from "../../components/exhibition/exhibition-content"
import SEO from "../../components/seo/seo";
import Logo from "../../components/logo/logo";

export const IndexPageWrapper = styled.div`
  padding: 0em;
  @media (max-width: ${size.mobileM}) {
    padding: 1em 0em;
  }
`


const IndexPage = props => {
  const exhibitions = props.exhibitions.filter(exhibition => {
    return exhibition.experience === props.experience.toString()
  })
  const language = getCurrentLanguageString(props.languages)
  const renderComponent = (
    <IndexPageWrapper>
      <SEO title={`Home`} description={`Home`} lang={'de'} />
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
      <NewsList />
      <UpcomingEvents />
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
