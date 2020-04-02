import React from "react"
import { connect } from "react-redux"
import Layout from "../components/layout/layout"
import { Convert } from "../utility/convert"
import {
  truncateText,
  pageMap,
} from "../utility/helper"
import UpcomingEvents from "../components/events/upcomingevents"
import SEO from "../components/seo/seo"
import ExhibitionContent from "../components/exhibition/exhibition-content"
import NewsList from "../components/news/newslist"
import striptags from "striptags"
import { isViewing } from "../store/action"
import { getDocument } from "../store/selector"

const Exhibition = props => {
  const exhibition = Convert.toExhibitionModel(props.pageContext)
  let description = exhibition[props.pageContext.language.toUpperCase()]
    ? truncateText(
        striptags(
          exhibition[props.pageContext.language.toUpperCase()].description
        )
      )
    : ""
  let title = exhibition[props.pageContext.language.toUpperCase()]
    ? truncateText(
        striptags(exhibition[props.pageContext.language.toUpperCase()].title)
      )
    : ""
  let image = getDocument(props.documents, exhibition.floor_plan)
  let path = pageMap.find(pg => {
    return pg["EN"] == "exhibition"
  })

  const renderComponent = (
    <>
      <SEO
        title={title}
        description={description}
        lang={props.pageContext.language}
        image={image ? image.url : null}
        pathname={`${path[props.pageContext.language.toUpperCase()]}/${
          exhibition.slug
        }`}
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

  props.isViewing()
  return (
    <Layout
      firstColumn={renderComponent}
      numberOfColumnsIsTwo={false}
      thirdColumn={thirdColumn}
      isHome={true}
      experience={exhibition.experience}
    />
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isViewing: () => dispatch(isViewing()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exhibition)
