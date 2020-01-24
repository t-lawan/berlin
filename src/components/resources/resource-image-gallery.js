import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import {
  PageWrapperRes,
  TwoColumnPageWrapper,
  ResourcePublisherLink,
  ResourceImageWrapper
} from "../../templates/page.styles"
import ResourceNavigator from "./resource-navigator"
import { Color, size } from "../../index.styles"
import PropTypes from "prop-types"
import ImageResource from "../../partials/ImageResource"
import { connect } from "react-redux"
import RelatedResources from "./related-resources"
import ImageGalleryResource from "../../partials/ImageGalleryResource";
import styled from 'styled-components';
import striptags from 'striptags';

const ResourceTitle = styled.h1`
  line-height: 1.2;
  @media (max-width: ${size.tablet}) {
    font-size: 1.2em;
    margin: 0.3em 0 1.0em;
  }
  @media (min-width: ${size.laptop}) {
    font-size: 1.8em;
  }
`
const Author = styled.p`
  margin-bottom:0;
`

const ResourceImageGallery = props => {
  const language = getCurrentLanguageString(props.languages)
  const r = props.resource
  let resourceIds = []
  return (
    <PageWrapperRes colour={Color.yellow}>
      <ResourceNavigator hidden={!r.id} id={r.id} />
      <ResourceImageWrapper>
        <ImageGalleryResource ids={r.image_gallery} />
      </ResourceImageWrapper>
      <TwoColumnPageWrapper>
        <div>
          <p
              dangerouslySetInnerHTML={{
                __html: striptags(r.title, ['em']),
              }}
            />
          {r.author.length > 0 ? <Author> {r.author} </Author> : ""}
          <p> {r[language].year}</p>
          <a target="_blank" href={r.external_url}> {r.external_url_label}</a>
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


ResourceImageGallery.propTypes = {
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
)(ResourceImageGallery)
