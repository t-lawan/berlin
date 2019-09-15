import React from "react"
import { getCurrentLanguageString, createProperty } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { AboutTeamSectionHeader } from "./about.styles"

const AboutTeamBlock = props => {
  const language = getCurrentLanguageString(props.languages)
  const generateSection = (item, index) => {
    let renderComponent
    switch (item.team_block_type) {
      case "section":
        renderComponent = (
          <AboutTeamSectionHeader key={index}>
            {item[createProperty("section_title", language)]}{" "}
          </AboutTeamSectionHeader>
        )
        break
      case "section_content":
        renderComponent = (
          <p key={index}> {item[createProperty("section_title", language)]} </p>
        )
        break
      case "position":
        renderComponent = (
          <div key={index}>
            <p>
              {item[createProperty("position_title", language)]}
            </p>
            <p>
              {item[createProperty("section_title", language)]}
            </p>
          </div>
        )
        break
      default:
        renderComponent = <p key={index}> index </p>
        break
    }

    return renderComponent
  }
  return (
    <div>{props.team.map((item, index) => generateSection(item, index))}</div>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

AboutTeamBlock.propTypes = {
  team: PropTypes.array,
}

export default connect(
  mapStateToProps,
  null
)(AboutTeamBlock)
