import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { PageWrapper, TwoColumnPageWrapperNoPad } from "../../templates/page.styles"
import AudioResource from "../../partials/AudioResource"
import { size } from "../../index.styles"
import DocumentationNavigator from "./documentation-navigator";
import styled from 'styled-components'
import { documentationContent } from "./documentation-video";

const AudioBlock = styled.div`
  padding: 0em !important;
`
const NoMarg = {
margin:"0",
}
const MargTop = styled.div`
margin:0em 0 0em;
@media (max-width: ${size.mobileM}) {
    margin:1em 0 0em;
  }
`
const MargBottom = {
margin:"0 0 0.7em"
}
const DocumentationAudio = props => {
  let language = getCurrentLanguageString(props.languages);
  let exhibitions = props.exhibitions.filter((exhibition) => {
    return exhibition.experience == props.documentation.experience[0];
  })

  return (
    <PageWrapper>
      <DocumentationNavigator id={props.documentation.id} />    
      <AudioBlock>
        <AudioResource id={props.documentation.audio} withCaption={true} />
      </AudioBlock>  
      <TwoColumnPageWrapperNoPad>
        <div>
          <p style={MargBottom}> {documentationContent[language].documentation}</p>
          <p style={NoMarg}>
            {" "}
            {documentationContent[language].language}:{" "}
            {documentationContent[language][props.documentation.language]}{" "}
          </p>
          <p style={NoMarg}><em>
            {exhibitions[0][language].title}</em>
          </p>
        </div>
        <MargTop>
          <div
            dangerouslySetInnerHTML={{
              __html: props.documentation[language].title,
            }}
          />
        </MargTop>
      </TwoColumnPageWrapperNoPad>
    </PageWrapper>
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
