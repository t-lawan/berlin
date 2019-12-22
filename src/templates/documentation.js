import React from "react"
import Layout from "../components/layout/layout"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../utility/helper"
import SEO from "../components/seo/seo"
import UpcomingEvents from "../components/events/upcomingevents"
import { Convert } from "../utility/convert";
import DocumentationVideo from "../components/documentation/documentation-video";
import DocumentationAudio from "../components/documentation/documentation-audio";
import DocumentationImageGallery from "../components/documentation/documentation-image-gallery";
import DocumentationText from "../components/documentation/documentation-text";

const Documentation = props => {
  const language = getCurrentLanguageString(props.languages)
  let documentationObject = Convert.toDocumentationModel(props.pageContext)
  let renderComponent = <p> Hello </p>
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
      <SEO title={documentationObject.slug} description="Hello" lang={props.pageContext.lang} />
      <Layout
        firstColumn={renderComponent}
        numberOfColumnsIsTwo={false}
        thirdColumn={<UpcomingEvents />}
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
