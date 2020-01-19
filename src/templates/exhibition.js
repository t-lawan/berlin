import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import Layout from "../components/layout/layout"
import { Convert } from "../utility/convert"
import { getCurrentLanguageString, truncateText } from "../utility/helper"
import UpcomingEvents from "../components/events/upcomingevents"
import SEO from "../components/seo/seo"
import ExhibitionContent from "../components/exhibition/exhibition-content"
import NewsList from "../components/news/newslist";
import striptags from 'striptags';

const ExhibitionPageWrapper = styled.div`
  padding: 2em 1em;
`

const Exhibition = props => {
  const language = getCurrentLanguageString(props.languages)
  const exhibition = Convert.toExhibitionModel(props.pageContext);
  let description = exhibition[props.pageContext.language.toUpperCase()] ? truncateText(striptags(exhibition[props.pageContext.language.toUpperCase()].description)) : '';
  let title = exhibition[props.pageContext.language.toUpperCase()] ? truncateText(striptags(exhibition[props.pageContext.language.toUpperCase()].title)) : '';
  
  const renderComponent = (
    <>
      <SEO
        title={title}
        description={description}
        lang={props.pageContext.language}
      />
      <ExhibitionContent exhibition={exhibition} />
    </>
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

const content = {
  EN: {
    works_and_contributions: "With works and contributions by:",
  },
  DE: {
    works_and_contributions: "Mit Arbeiten und Beiträgen von:",
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
)(Exhibition)
