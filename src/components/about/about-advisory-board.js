import React from "react"
import { getCurrentLanguageString, createProperty } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"


const AboutAdvisoryBoard = props => {
  const language = getCurrentLanguageString(props.languages)
  const teamBlock = props.team_block
  const generateSection = (teamBlockItem, index) => {
    let renderComponent;
    switch (teamBlockItem.team_block_type) {
      case "section":
        renderComponent = (
            <p key={index}> {teamBlockItem[createProperty("section_title", language)]}</p>
        )
        break
      case "section_content":
        renderComponent = (
            <p key={index}> {teamBlockItem[createProperty("section_title", language)]}</p>
        )
        break
      case "position":
        renderComponent = (
            <p key={index}> {teamBlockItem[createProperty("section_title", language)]}</p>
        )
        break
      default:
        renderComponent = <p key={index}></p>
        break
    }

    return renderComponent
  }

  return <div>{teamBlock.map((item, index) => generateSection(item, index))}</div>
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

AboutAdvisoryBoard.propTypes = {
  team_block: PropTypes.array,
}

export default connect(
  mapStateToProps,
  null
)(AboutAdvisoryBoard)
