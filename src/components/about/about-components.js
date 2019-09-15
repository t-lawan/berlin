import React from "react"
import { getCurrentLanguageString, createProperty } from "../../utility/helper"
import { connect } from "react-redux"
import styled from "styled-components"
import PropTypes from "prop-types"
import { AboutComponentWrapper } from "./about.styles"
import AboutFunding from "./about-funding"
import AboutTeamBlock from "./about-team-block";

const AboutComponents = props => {
  const content = props.content
  let renderComponent
  const language = getCurrentLanguageString(props.languages)

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
    case "advisory-board":
      renderComponent = (
        <div>
          {content.acf.team_block.map((item, index) => (
            <p key={index}>
              {" "}
              {item[createProperty("position_title", language)]}
            </p>
          ))}
        </div>
      )
      break
    case "support":
      renderComponent = <AboutFunding funding={content.acf.funding} />
      break
    case "team":
      renderComponent = (
          <AboutTeamBlock team={content.acf.team_block} />
      )
      break
    default:
      renderComponent = (
        <div>
          <p> Hello </p>
        </div>
      )
  }

  return <AboutComponentWrapper>{renderComponent}</AboutComponentWrapper>
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
