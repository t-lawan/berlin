import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { PageWrapper, TwoColumnPageWrapper } from "../../templates/page.styles"
import AudioResource from "../../partials/AudioResource"
import DocumentationNavigator from "./documentation-navigator";
import styled from 'styled-components'
import { documentationContent } from "./documentation-video";

const AudioBlock = styled(PageWrapper)`
  padding: 1em;
`
const DocumentationAudio = props => {
  let language = getCurrentLanguageString(props.languages);
  let exhibitions = props.exhibitions.filter((exhibition) => {
    return exhibition.experience == props.documentation.experience[0];
  })

  return (
    <div>
      <DocumentationNavigator id={props.documentation.id} />    
      <AudioBlock>
        <AudioResource id={props.documentation.audio} withCaption={true} />
      </AudioBlock>  
      <TwoColumnPageWrapper>
        <div>
          <p> {documentationContent[language].documentation}</p>
          <p>
            {" "}
            {documentationContent[language].language}:{" "}
            {documentationContent[language][props.documentation.language]}{" "}
          </p>
          <p>
            {exhibitions[0][language].title}
          </p>
        </div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: props.documentation[language].title,
            }}
          />
        </div>
      </TwoColumnPageWrapper>
    </div>
  )
}

DocumentationAudio.propTypes = {
  documentation: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
    exhibitions: state.exhibitions
  }
}
export default connect(
  mapStateToProps,
  null
)(DocumentationAudio)
