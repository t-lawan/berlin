import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import {
  PageWrapper,
  TwoColumnPageWrapper,
  ResourcePublisherLink,
  ResourceImageWrapper
} from "../../templates/page.styles"
import ResourceNavigator from "./resource-navigator"
import { Color } from "../../index.styles"
import PropTypes from "prop-types"
import ImageResource from "../../partials/ImageResource"
import { connect } from "react-redux"
import RelatedResources from "./related-resources"
import ImageGalleryResource from "../../partials/ImageGalleryResource";

const ResourceImageGallery = props => {
  const language = getCurrentLanguageString(props.languages)
  const r = props.resource
  let resourceIds = []
  if (props.resources.length !== 0) {
    resourceIds = props.resources.map(res => {
      return res.id
    })
    resourceIds = getRandomIds(props.resources, 4)
  }
  return (
    <PageWrapper colour={Color.yellow}>
      <ResourceNavigator id={r.id} />
      <ResourceImageWrapper>
        <ImageGalleryResource ids={r.image_gallery} />
      </ResourceImageWrapper>
      <TwoColumnPageWrapper>
        <div>
          <p> {r.title}</p>
          <p> {r.author}</p>
          <p> {r[language].year}</p>
        </div>
        <div>
          <p
            dangerouslySetInnerHTML={{
              __html: r.description,
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

ResourceImageGallery.propTypes = {
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
)(ResourceImageGallery)
