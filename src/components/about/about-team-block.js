import React from "react"
import { getCurrentLanguageString, createProperty } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { AboutTeamSectionHeader } from "./about.styles"
import styled from 'styled-components';
import { Section } from "../../index.styles";

const PaddedSection = styled(Section)`
  padding: 0;
  padding-left: 1em;
  /* padding-bottom: 0em; */
`

const PaddedSectionPosition = styled(Section)`
  padding: 0;
  padding-left: 1em;
  padding-top: 1em
`
const AboutTeamBlock = props => {
  const language = getCurrentLanguageString(props.languages);
  const generateSection = (item, index) => {
    let renderComponent
    switch (item.team_block_type) {
      case "section":
        renderComponent = (
          <p key={index}>
            {item[createProperty("section_title", language)]}{" "}
          </p>
        )
        break
      case "section_content":
        renderComponent = (
          <PaddedSection key={index}>
            {item.block_names.map((person, i) => (
              <p key={person.full_name + i}>{person.full_name} </p>
            ))}
          </PaddedSection>
        )
        break
      case "position":
        renderComponent = (
          <PaddedSectionPosition key={index}>
            <p>{item[createProperty("position_title", language)]}</p>
          </PaddedSectionPosition>
        )
        break
      default:
        renderComponent = <p key={index}> </p>
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
