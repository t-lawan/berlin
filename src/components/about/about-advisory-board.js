import React from "react"
import { getCurrentLanguageString, createProperty } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { UnderlinedText } from "../../index.styles";
import { TextBlock } from "../../templates/page.styles";
import styled from 'styled-components';
const AboutTextBlock = styled(TextBlock)`
p{
  line-height: 1.2em;
}
`

const AboutAdvisoryBoard = props => {
  const language = getCurrentLanguageString(props.languages)
  const teamBlock = props.team_block
  console.log(teamBlock);
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
