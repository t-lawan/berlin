import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import {
  PageWrapperRes,
  TwoColumnPageWrapperInternalDoc,
  ResourceImageWrapper
} from "../../templates/page.styles"
import ResourceNavigator from "./resource-navigator"
import { Color, size } from "../../index.styles"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import RelatedResources from "./related-resources"
import ImageGalleryResource from "../../partials/ImageGalleryResource";
import styled from 'styled-components';
import striptags from 'striptags';

const ResourceTitle = styled.h1`
 line-height: 1.4;
  @media (max-width: ${size.tablet}) {
    font-size: 1.2em;
    margin: 0.3em 0 1.0em;
  }
  @media (min-width: ${size.laptop}) {
    font-size: 1.0em;
    margin: 0em 0 0.5em;
  }
  @media (min-width: ${size.laptopM}) {
    font-size: 1.05em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.1em;
  }
`
const Author = styled.p`
  margin-bottom:0;
  @media (min-width: ${size.laptop}) {
    line-height: 1.4;
    margin-top: -0.5em;
    margin-bottom:0.9em;
  }
`
const Year = styled.p`
  margin-bottom:0;
  @media (min-width: ${size.laptop}) {
    line-height: 1.4;
    margin-top: 0em;
  }
`

const ResLink = styled.div`
  > a {
    transition: all 0.2s ease-in-out;
    border-bottom: solid thin;
    border-color: ${Color.red};
    :hover {
      color: ${Color.red};
    }
  }
`
const ResourceTextDiv = styled.div`
  a {
    border-bottom: solid thin;
    font-size: 1em;
    border-color: ${Color.red};
    word-break: break-all;
    transition: all 0.2s ease-in-out;
    :hover {
      color: ${Color.red};
    }
  }
`
const ResourceImageGallery = props => {
  const language = getCurrentLanguageString(props.languages)
  const r = props.resource
  return (
    <PageWrapperRes colour={Color.yellow}>
      <ResourceNavigator hidden={!r.id} id={r.id} />
      <ResourceImageWrapper>
        <ImageGalleryResource ids={r.image_gallery} />
      </ResourceImageWrapper>
      <TwoColumnPageWrapperInternalDoc>
        <div>
          <ResourceTitle
              dangerouslySetInnerHTML={{
                __html: striptags(r.title, ['em']),
              }}
            />
          {r.author.length > 0 ? <Author> {r.author} </Author> : ""}
          <Year> {r[language].year}</Year>
          {r.external_url.length > 0 ? <ResLink> <a target="_blank" rel="noopener noreferrer" href={r.external_url}> {r.external_url_label}</a> </ResLink> : ""}
          
        </div>
        <div>
          <ResourceTextDiv
            dangerouslySetInnerHTML={{
              __html: r.description,
            }}
          />
        </div>
      </TwoColumnPageWrapperInternalDoc>
      <RelatedResources showRelated={true} border={true} ids={[r.id]} id={r.id} />
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
