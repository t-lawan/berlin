import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import {
  PageWrapperRes,
  TwoColumnPageWrapper,
  ResourcePublisherLink,
} from "../../templates/page.styles"
import ResourceNavigator from "./resource-navigator"
import { Color, size, } from "../../index.styles"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import RelatedResources from "./related-resources"
import styled from 'styled-components';
import AudioResource from "../../partials/AudioResource";
import striptags from "striptags";

const ResourceTitle = styled.h1`
  line-height: 1.2;
  @media (max-width: ${size.tablet}) {
    font-size: 1.2em;
    margin: 0.3em 0 1.0em;
  }
  @media (min-width: ${size.laptop}) {
    font-size: 1.1em;
    margin: 0em;
  }
`
const Author = styled.p`
  margin-bottom:0;
`

const ResourceAudio = props => {
  const language = getCurrentLanguageString(props.languages)
  const r = props.resource

  return (
    <PageWrapperRes colour={Color.yellow}>
      <ResourceNavigator hidden={!r.id} id={r.id} />
      <AudioResource id={r.audio.file} withCaption={true} />

      <TwoColumnPageWrapper>
        <div>
          <ResourceTitle
              dangerouslySetInnerHTML={{
                __html: striptags(r.title, ['em']),
              }}
            />
          
          {r.label.length > 0 ? <Author> {r[language].label} </Author> : ""} 
          {r.author.length > 0 ? <Author> {r.author} </Author> : ""} 
        </div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: r.description,
            }}
          />
        </div>
      </TwoColumnPageWrapper>

      <RelatedResources ids={[r.id]} />
    </PageWrapperRes>
  )
}

ResourceAudio.propTypes = {
  resource: PropTypes.object,
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
)(ResourceAudio)
