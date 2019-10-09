import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getCurrentLanguageString } from "../../utility/helper"
import ResourceImage from "./resource-image";
import ResourceImageGallery from "./resource-image-gallery";
import ResourceText from "./resource-text";
import ResourceAudio from "./resource-audio";

const ResourcesComponent = props => {
  let renderComponent
  const r = props.resource;
  const language = getCurrentLanguageString(props.languages)
  switch (r.type) {
    case "image":
      renderComponent = <ResourceImage resource={r} />
      break
    case "imagegallery":
      r.image_gallery = r.image_gallery.map(image => {
        return image.wordpress_id
      })
      renderComponent = <ResourceImageGallery resource={r} />
      break
    case "text":
      renderComponent = <ResourceText resource={r} />
      break
    case "mp3":
      renderComponent = <ResourceAudio resource={r} />
      break
    default:
      renderComponent = (
        <TwoColumnPageWrapper>
          <div>
            <p>Hello </p>
          </div>
          <div></div>
        </TwoColumnPageWrapper>
      )
  }

  return <section> {renderComponent}</section>

}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

AboutComponents.propTypes = {
  resource: PropTypes.object,
}

export default connect(
  mapStateToProps,
  null
)(ResourcesComponent)
