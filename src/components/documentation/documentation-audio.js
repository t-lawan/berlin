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
import striptags from "striptags"
import { MarginBottomText, NoMarginText, DocDesc, DocTitle, DocSubTitle } from "./documentation.styles";

const AudioBlock = styled.div`
  padding: 0em !important;
`
const MargTop = styled.div`
margin:0em 0 0em;
@media (max-width: ${size.mobileM}) {
    margin:1em 0 0em;
  }
`

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
          <MarginBottomText> {documentationContent[language].documentation}</MarginBottomText>
          {/* <p style={NoMarg}>
            {" "}
            {documentationContent[language].language}:{" "}
            {documentationContent[language][props.documentation.language]}{" "}
          </p> */}
          <NoMarginText><em>
            {exhibitions[0][language].title}</em>
          </NoMarginText>
        </div>
        <MargTop>

          <DocTitle
              dangerouslySetInnerHTML={{
                __html: striptags(props.documentation[language].title, ["em"]),
              }}
            />
            
            {documentation[language].subtitle ? (
              <DocSubTitle
                dangerouslySetInnerHTML={{
                  __html: striptags(props.documentation[language].subtitle, ["em"]),
                }}
              />
            ) : null}

            {documentation[language].description ? (
              <DocDesc
                dangerouslySetInnerHTML={{
                  __html: props.documentation[language].description,
                }}
              />
            ) : null}
            <div
            dangerouslySetInnerHTML={{
              __html: documentation[language].doc_credits,
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
