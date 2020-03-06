import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import Layout from "../components/layout/layout"
import { Convert } from "../utility/convert"
import { getCurrentLanguageString, truncateText, pageMap } from "../utility/helper"
import UpcomingEvents from "../components/events/upcomingevents"
import SEO from "../components/seo/seo"
import ExhibitionContent from "../components/exhibition/exhibition-content"
import NewsList from "../components/news/newslist";
import striptags from 'striptags';
import { isViewing } from "../store/action";
import { getDocument } from "../store/selector";

const ExhibitionPageWrapper = styled.div`
  padding: 2em 1em;
`

const Exhibition = props => {
  const language = getCurrentLanguageString(props.languages)
  const exhibition = Convert.toExhibitionModel(props.pageContext);
  let description = exhibition[props.pageContext.language.toUpperCase()] ? truncateText(striptags(exhibition[props.pageContext.language.toUpperCase()].description)) : '';
  let title = exhibition[props.pageContext.language.toUpperCase()] ? truncateText(striptags(exhibition[props.pageContext.language.toUpperCase()].title)) : '';
  let image = getDocument(props.documents, exhibition.floor_plan);
  let path = pageMap.find((pg) => {
    return pg["EN"] == "exhibition"
  })

  const renderComponent = (
    <>
      <SEO
        title={title}
        description={description}
        lang={props.pageContext.language}
        image={image ? image.url: null}
        pathname={`${path[props.pageContext.language.toUpperCase()]}/${exhibition.slug}`}
      />
      <ExhibitionContent  exhibition={exhibition} />
    </>
  )

  let thirdColumn = (
    <>
      <NewsList />
      <UpcomingEvents />
    </>
  )
  props.isViewing()
  return (
    <Layout
      firstColumn={renderComponent}
      numberOfColumnsIsTwo={false}
      thirdColumn={thirdColumn}
      isHome={true}
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
    documents: state.documents
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isViewing: () =>
      dispatch(isViewing()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Exhibition)
