import React from "react"
import { getCurrentLanguageString, createProperty } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { UnderlinedText } from "../../index.styles";
import { TextBlock, PageTitle } from "../../templates/page.styles";
import styled from 'styled-components';
const AboutTextBlock = styled(TextBlock)`
padding: 0;
> p {
  padding-left: 1em;
  font-size:1.1em;
}
`

const TitleTextBlock = styled(TextBlock)`
padding: 0;
padding-top: 1em;
> p {
  font-size:1.1em;
}
`

const AboutOrganisation = props => {
  const language = getCurrentLanguageString(props.languages)
  const teamBlock = props.team_block;
  const generateSection = (teamBlockItem, index) => {
    let renderComponent;
    switch (teamBlockItem.team_block_type) {
      case "section":
        renderComponent = (
          <TitleTextBlock key={index}>
            <p> {teamBlockItem[createProperty("section_title", language)]}</p>
          </TitleTextBlock>
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
          <TitleTextBlock key={index}>
            <p key={index}> {teamBlockItem[createProperty("position_title", language)]}</p>
          </TitleTextBlock>
        )
        break
      default:
        renderComponent = <p key={index}></p>
        break
    }

    return renderComponent
  }

  return (
  <>
    <PageTitle> {content[language].title}</PageTitle>
    <div>{teamBlock.map((item, index) => generateSection(item, index))}</div>

  </>
  
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

let content = {
  EN: {
    title: "organisation"
  },
  DE: {
    title: "verein"
  },
}

AboutOrganisation.propTypes = {
  team_block: PropTypes.array,
}

export default connect(
  mapStateToProps,
  null
)(AboutOrganisation)
