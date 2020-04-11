import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { PageWrapper, TwoColumnPageWrapperInternalDoc } from "../../templates/page.styles"
import ImageGalleryResource from "../../partials/ImageGalleryResource"
import DocumentationNavigator from "./documentation-navigator";
import { documentationContent } from "./documentation-video";
import { size } from "../../index.styles"
import styled from 'styled-components';
import striptags from "striptags"
import { NoMarginText, DocDesc, DocTitle, DocSubTitle } from "./documentation.styles";
const MargTop = styled.div`
margin:0em 0 0em;
@media (max-width: ${size.mobileM}) {
    margin:1em 0 0em;
  }
`

const DocumentationImageGallery = props => {
  let language = getCurrentLanguageString(props.languages);
  let exhibitions = props.exhibitions.filter((exhibition) => {
    return exhibition.experience == props.documentation.experience[0];
  })
  let documentation = props.documentation;
  let image_gallery;
  if(documentation.image_gallery) {
    image_gallery = documentation.image_gallery.map(image => {
      return image.wordpress_id
    })
  }


  return (
    <PageWrapper>
      <DocumentationNavigator id={documentation.id}/>
      {image_gallery ? <ImageGalleryResource ids={image_gallery} /> : null }
      <TwoColumnPageWrapperInternalDoc>
        <div>
          <NoMarginText> {documentationContent[language].documentation}</NoMarginText>
          <NoMarginText><em>
            {exhibitions[0][language].title}
            </em>
          </NoMarginText>
        </div>
        <MargTop>
          
          <DocTitle
              dangerouslySetInnerHTML={{
                __html: striptags(documentation[language].title, ["em"]),
              }}
            />
            
            {documentation[language].subtitle ? (
              <DocSubTitle
                dangerouslySetInnerHTML={{
                  __html: striptags(documentation[language].subtitle, ["em"]),
                }}
              />
            ) : null}

            {documentation[language].description ? (
              <DocDesc
                dangerouslySetInnerHTML={{
                  __html: documentation[language].description,
                }}
              />
            ) : null}
          <div
            dangerouslySetInnerHTML={{
              __html: documentation[language].doc_credits,
            }}
          />
        </MargTop>
      </TwoColumnPageWrapperInternalDoc>
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
