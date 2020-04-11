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
  const exhibitionModel = Convert.toExhibitionModel(props.pageContext)
  let description = exhibitionModel[props.pageContext.language.toUpperCase()]
    ? truncateText(
        striptags(
          exhibitionModel[props.pageContext.language.toUpperCase()].description
        )
      )
    : ""
  let title = exhibitionModel[props.pageContext.language.toUpperCase()]
    ? truncateText(
        striptags(exhibitionModel[props.pageContext.language.toUpperCase()].title)
      )
    : ""
  let path = pageMap.find(pg => {
    return pg["EN"] == "exhibition"
  })

  const renderComponent = (
    <>
      <SEO
        title={title}
        description={description}
        lang={props.pageContext.language}
        image={exhibitionModel.floor_plan}
        pathname={`${path[props.pageContext.language.toUpperCase()]}/${
          exhibitionModel.slug
        }`}
      />
      <ExhibitionContent exhibition={exhibitionModel} />
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
      experience={exhibitionModel.experience}
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
