import React from "react"
import { getCurrentLanguageString } from "../../utility/helper"
import { connect } from "react-redux"
import styled from "styled-components"
import PropTypes from "prop-types"
import { AboutComponentWrapper } from "./about.styles"

const AboutComponents = props => {
  const content = props.content
  let renderComponent
  const language = getCurrentLanguageString(props.languages)
  console.log("AboutComponents", content)

  switch (content.slug) {
    case "about":
      renderComponent = (
        <div
          dangerouslySetInnerHTML={{
            __html: content.acf[`${language}_row`].description,
          }}
        />
      )
      break
    default:
      renderComponent = (
        <div
          dangerouslySetInnerHTML={{
            __html: content.acf[`${language}_row`].description,
          }}
        />
      )
  }

  return (
    <AboutComponentWrapper>
        {renderComponent}
    </AboutComponentWrapper>
  )
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
)(AboutComponents)
