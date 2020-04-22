import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { truncateText, pageMap } from "../utility/helper"
import SEO from "../components/seo/seo"
import UpcomingEvents from "../components/events/upcomingevents"
import { Convert } from "../utility/convert"
import DocumentationVideo from "../components/documentation/documentation-video"
import DocumentationAudio from "../components/documentation/documentation-audio"
import DocumentationImageGallery from "../components/documentation/documentation-image-gallery"
import DocumentationText from "../components/documentation/documentation-text"
import NewsList from "../components/news/newslist"
import striptags from "striptags"
import * as actionTypes from "../store/action"
class Documentation extends React.Component {
  documentationObject
  renderComponent
  title
  description
  path = pageMap.find(pg => {
    return pg["EN"] == "documentation"
  })
  exp
  componentDidMount() {
    let exp = parseInt(this.documentationObject.experience[0])
    if (exp !== this.props.experience) {
      this.props.changeExperience(exp)
    }
  }

  thirdColumn = (
    <>
      <NewsList />
      <UpcomingEvents />
    </>
  )

  render() {
    this.documentationObject = Convert.toDocumentationModel(
      this.props.pageContext
    )
    let title = this.documentationObject[this.props.pageContext.lang.toUpperCase()]
      ? truncateText(
          striptags(
            this.documentationObject[this.props.pageContext.lang.toUpperCase()].title
          )
        )
      : ""
    let description = this.documentationObject[this.props.pageContext.lang.toUpperCase()]
      ? truncateText(
          striptags(
            this.documentationObject[this.props.pageContext.lang.toUpperCase()]
              .social_media_description
          )
        )
      : ""

    if(this.documentationObject) {
      switch (this.documentationObject.type) {
        case "video":
          this.renderComponent = (
            <DocumentationVideo documentation={this.documentationObject} />
          )
          break
        case "mp3":
          this.renderComponent = (
            <DocumentationAudio documentation={this.documentationObject} />
          )
          break
        case "imagegallery":
          this.renderComponent = (
            <DocumentationImageGallery documentation={this.documentationObject} />
          )
          break
        case "text":
          this.renderComponent = (
            <DocumentationText documentation={this.documentationObject} />
          )
          break
        default:
          this.renderComponent = <p></p>
      }
    }

    return (
      <>
        <SEO
          title={title}
          description={description}
          lang={this.props.pageContext.lang}
          pathname={`${this.path[this.props.pageContext.lang.toUpperCase()]}/${
            this.documentationObject.slug
          }`}
          image={this.documentationObject.thumbnail}
        />
        <Layout
          firstColumn={this.renderComponent}
          numberOfColumnsIsTwo={false}
          thirdColumn={this.thirdColumn}
        />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
    experience: state.experience,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeExperience: experience =>
      dispatch({ type: actionTypes.CHANGE_EXPERIENCE, experience: experience }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Documentation)
