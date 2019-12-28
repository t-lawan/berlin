import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import {
  PageWrapper,
  TwoColumnPageWrapper,
  ResourcePublisherLink,
} from "../../templates/page.styles"
import ResourceNavigator from "./resource-navigator"
import { Color } from "../../index.styles"
import PropTypes from "prop-types";
import { connect } from "react-redux"
import RelatedResources from "./related-resources"
import styled from 'styled-components';

const ResourceTextDiv = styled.div`
  a {
    font-size: 1rem;
    border-bottom: solid thin;
    border-color: ${Color.red};
  }
`

const ResourceTitle = styled.p`
  font-size: 1.8em;
  line-height: 1.2;
`
const ResourceText = props => {
  const language = getCurrentLanguageString(props.languages)
  const r = props.resource
  let resourceIds = []
  if (props.resources.length !== 0) {
    resourceIds = props.resources.map(res => {
      return res.id
    })
  } else {
    resourceIds = getRandomIds(props.resources, 4)
  }
  return (
    <PageWrapper colour={Color.yellow}>
      <ResourceNavigator id={r.id} />
      <TwoColumnPageWrapper>
        <div>
          {/* <ImageResource id={r.thumbnail_image} withCaption={false} /> */}
          {/* <ExternalLink id={r.text_based_resource[0].document_upload}>
          <PressArrowDown icon={faLongArrowAltDown} />
          <span> Download</span>{" "}
        </ExternalLink> */}
          <p hidden={r.text_based_resource[0].document_language.length === 0}> Language: {r.text_based_resource[0].document_language}</p>
        </div>
        <div>
          <ResourceTitle> {r.title}</ResourceTitle>
          <p> {r.author}</p>
          <p>
            In:{" "}
            <ResourcePublisherLink
              target="_blank"
              href={r.publisher.external_url}
            >
              {r.publisher.title}
            </ResourcePublisherLink>
          </p>
          <p> {r[language].year}</p>
          <ResourceTextDiv
            dangerouslySetInnerHTML={{
              __html: r.text_based_resource[0].free_text_entry,
            }}
          />
        </div>
      </TwoColumnPageWrapper>
      <RelatedResources ids={resourceIds} />
    </PageWrapper>
  )
}

const getRandomIds = (resources, numberOfIds) => {
  let ints = []
  for (let i = 0; i < numberOfIds; i++) {
    ints.push(resources[Math.floor(Math.random() * resources.length)].id)
  }
  return ints
}

ResourceText.propTypes = {
  resource: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
    resources: state.resources,
  }
}

export default connect(
  mapStateToProps,
  null
)(ResourceText)
