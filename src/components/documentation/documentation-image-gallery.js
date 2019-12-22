import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { PageWrapper, TwoColumnPageWrapper } from "../../templates/page.styles"
import ImageGalleryResource from "../../partials/ImageGalleryResource"

const DocumentationImageGallery = props => {
  let language = getCurrentLanguageString(props.languages)
  let documentation = props.documentation
  documentation.image_gallery = documentation.image_gallery.map(image => {
    return image.wordpress_id
  })

  return (
    <PageWrapper>
      <ImageGalleryResource ids={documentation.image_gallery} />
      <TwoColumnPageWrapper>
        <div>
          <p> {content[language].documentation}</p>
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

let content = {
  EN: {
    language: "Language",
    documentation: "Documentation",
    en: "English",
    de: "German",
    other: "Other",
  },
  DE: {
    language: "Language",
    documentation: "Dokumentation",
    en: "English",
    de: "Deutsch",
    other: "Other",
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
    exhibitions: state.exhibitions,
  }
}
export default connect(
  mapStateToProps,
  null
)(DocumentationImageGallery)
