import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import {
  PageWrapperRes,
  TwoColumnPageWrapper,
  ResourcePublisherLink,
} from "../../templates/page.styles"
import ResourceNavigator from "./resource-navigator"
import { Color } from "../../index.styles"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import RelatedResources from "./related-resources"
import AudioResource from "../../partials/AudioResource"

const ResourceAudio = props => {
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
    <PageWrapperRes colour={Color.yellow}>
      <ResourceNavigator id={r.id} />
      <AudioResource id={r.audio.file} withCaption={true} />

      <TwoColumnPageWrapper>
        <div>
          <p>
            {r.title} : {r[language].label}
          </p>
          <p> {r.author} </p>
        </div>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: r.description,
            }}
          />
        </div>
      </TwoColumnPageWrapper>

      <RelatedResources ids={resourceIds} />
    </PageWrapperRes>
  )
}

const getRandomIds = (resources, numberOfIds) => {
  let ints = []
  for (let i = 0; i < numberOfIds; i++) {
    ints.push(resources[Math.floor(Math.random() * resources.length)].id)
  }
  return ints
}

ResourceAudio.propTypes = {
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
)(ResourceAudio)
