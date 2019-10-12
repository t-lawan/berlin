import React from "react"
import { getCurrentLanguageString, createProperty } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { UnderlinedText } from "../../index.styles";
import { TextBlock } from "../../templates/page.styles";
import styled from 'styled-components';
const AboutTextBlock = styled(TextBlock)`
padding: 0.5em 0;
`

const AboutOrganisation = props => {
  const language = getCurrentLanguageString(props.languages)
  const teamBlock = props.team_block;
  const generateSection = (teamBlockItem, index) => {
    let renderComponent;
    switch (teamBlockItem.team_block_type) {
      case "section":
        renderComponent = (
          <TextBlock key={index}>
            <UnderlinedText> {teamBlockItem[createProperty("section_title", language)]}</UnderlinedText>
          </TextBlock>
        )
        break
      case "section_content":
        renderComponent = (
          <AboutTextBlock key={index}>
            {teamBlockItem.block_names.map((nameItem, nameIndex) => (
              <p key={nameIndex}> {nameItem.full_name}</p>
            ))}
          </AboutTextBlock>
        )
        break
      case "position":
        renderComponent = (
            <UnderlinedText key={index}> {teamBlockItem[createProperty("position_title", language)]}</UnderlinedText>
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

AboutOrganisation.propTypes = {
  team_block: PropTypes.array,
}

export default connect(
  mapStateToProps,
  null
)(AboutOrganisation)
