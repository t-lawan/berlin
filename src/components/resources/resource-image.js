import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { PageWrapperRes, TwoColumnPageWrapperInternalDoc, ResourcePublisherLink, ResourceSingleImageWrapper } from "../../templates/page.styles"
import ResourceNavigator from "./resource-navigator"
import { Color, size } from "../../index.styles"
import PropTypes from "prop-types"
import ImageResource from "../../partials/ImageResource"
import { connect } from "react-redux"
import RelatedResources from "./related-resources";
import styled from 'styled-components';
import striptags from 'striptags';

const ResourceTitle = styled.h1`
  line-height: 1.4;
  @media (max-width: ${size.tabletL}) {
    font-size: 1.2em;
    margin: 0.3em 0 1.0em;
  }
  @media (min-width: ${size.laptop}) {
    font-size: 1.0em;
    margin-bottom: 0.5em;
  }
  @media (min-width: ${size.laptopM}) {
    font-size: 1.05em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.1em;
  }
`
const Author = styled.p`
  margin-bottom: 0.9em;
  margin-top: -0.5em;
`
const Year = styled.p`
  margin-bottom: 0em;
  margin-top: 0em;
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

const ResourceImage = props => {
  const language = getCurrentLanguageString(props.languages)
  const r = props.resource

  return (
    <PageWrapperRes colour={Color.yellow}>
      <ResourceNavigator hidden={!r.id} id={r.id} />
      <ResourceSingleImageWrapper>
        <ImageResource id={r.image} withCaption={false} />
      </ResourceSingleImageWrapper>
      <TwoColumnPageWrapperInternalDoc>
        <div>
          <ResourceTitle
              dangerouslySetInnerHTML={{
                __html: striptags(r.title, ['em']),
              }}
            />
          {r.author.length > 0 ? <Author> {r.author} </Author> : ""}
          <Year> {r[language].year} </Year>
          <ResourcePublisherLink hidden ={!r.external_url_label} target="_blank" rel="noopener noreferrer" href={r.external_url}>
            {" "}
            {r.external_url_label}
          </ResourcePublisherLink>
          
        </div>
        <div>
          <ResourceTextDiv
            dangerouslySetInnerHTML={{
              __html: r.description,
            }}
          />
        </div>
      </TwoColumnPageWrapperInternalDoc>
      <RelatedResources border={true} ids={[r.id]} id={r.id} />
    </PageWrapperRes>
  )
}

ResourceImage.propTypes = {
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
)(ResourceImage)
