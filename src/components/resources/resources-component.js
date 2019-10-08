import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getCurrentLanguageString } from "../../utility/helper"

const ResourcesComponent = props => {
  const content = props.content
  let renderComponent
  const language = getCurrentLanguageString(props.languages)
  switch (content.type) {
    case "image":
      renderComponent = <p></p>
      break
    case "imagegallery":
      renderComponent = <p></p>
      break
    case "video":
      renderComponent = <p></p>
      break
    case "text":
      renderComponent = <p></p>
      break
    case "url":
      renderComponent = <p></p>
      break
    case "mp3":
      renderComponent = <p></p>
      break
    default:
      renderComponent = (
        <div>
          <p> Hello </p>
        </div>
      )
      break;
  }

  return <section> {renderComponent}</section>

}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

AboutComponents.propTypes = {
  content: PropTypes.object,
}

export default connect(
  mapStateToProps,
  null
)(ResourcesComponent)
