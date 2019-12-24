import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { PageWrapper, TwoColumnPageWrapper } from "../../templates/page.styles"
import ImageGalleryResource from "../../partials/ImageGalleryResource"
import DocumentationNavigator from "./documentation-navigator";
import { documentationContent } from "./documentation-video";

const DocumentationImageGallery = props => {
  let language = getCurrentLanguageString(props.languages);
  let exhibitions = props.exhibitions.filter((exhibition) => {
    return exhibition.experience == props.documentation.experience[0];
  })
  let documentation = props.documentation
  documentation.image_gallery = documentation.image_gallery.map(image => {
    return image.wordpress_id
  })
  return (
    <PageWrapper>
      <DocumentationNavigator id={documentation.id}/>
      <ImageGalleryResource ids={documentation.image_gallery} />
      <TwoColumnPageWrapper>
        <div>
          <p> {documentationContent[language].documentation}</p>
          <p>
            {exhibitions[0][language].title}
          </p>
        </div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: documentation[language].title,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: documentation[language].doc_credits,
            }}
          />
        </div>
      </TwoColumnPageWrapper>
    </PageWrapper>
  )
}

DocumentationImageGallery.propTypes = {
  documentation: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documentations: state.documentation,
    exhibitions: state.exhibitions,
  }
}
export default connect(
  mapStateToProps,
  null
)(DocumentationImageGallery)
