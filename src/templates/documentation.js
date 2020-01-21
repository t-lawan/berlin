import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString, truncateText } from "../utility/helper"
import SEO from "../components/seo/seo"
import UpcomingEvents from "../components/events/upcomingevents"
import { Convert } from "../utility/convert";
import DocumentationVideo from "../components/documentation/documentation-video";
import DocumentationAudio from "../components/documentation/documentation-audio";
import DocumentationImageGallery from "../components/documentation/documentation-image-gallery";
import DocumentationText from "../components/documentation/documentation-text";
import NewsList from "../components/news/newslist";
import striptags from 'striptags';

const Documentation = props => {
  const language = getCurrentLanguageString(props.languages)
  let documentationObject = Convert.toDocumentationModel(props.pageContext)
  let renderComponent;
  let title = documentationObject[props.pageContext.lang.toUpperCase()] ? truncateText(striptags(documentationObject[props.pageContext.lang.toUpperCase()].title)) : ""
  let description = documentationObject[props.pageContext.lang.toUpperCase()] ?  truncateText(striptags(documentationObject[props.pageContext.lang.toUpperCase()].description)) : "";
  let thirdColumn = (
    <>
      <NewsList />
      <UpcomingEvents />
    </>
  )
  switch(documentationObject.type) {
    case 'video': 
      renderComponent = <DocumentationVideo documentation={documentationObject} />
      break;
    case 'mp3': 
      renderComponent = <DocumentationAudio documentation={documentationObject} />
      break;
    case 'imagegallery': 
      renderComponent = <DocumentationImageGallery documentation={documentationObject} />
      break; 
    case 'text': 
      renderComponent = <DocumentationText documentation={documentationObject} />
      break;   
    default: 
      renderComponent = <p></p>
  }
  return (
    <>
      <SEO title={title} description={description} lang={props.pageContext.lang} />
      <Layout
        firstColumn={renderComponent}
        numberOfColumnsIsTwo={false}
        thirdColumn={thirdColumn}
      />
    </>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
  }
}

export default connect(
  mapStateToProps,
  null
)(Documentation)
