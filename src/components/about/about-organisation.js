import React from "react"
import { getCurrentLanguageString, createProperty } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { size } from "../../index.styles";
import { TextBlock, PageTitle } from "../../templates/page.styles";
import styled from 'styled-components';
const AboutTextBlock = styled(TextBlock)`
padding: 0 0 1em !important;
@media (max-width: ${size.mobileM}) {
padding-bottom: 0.3em !important;
}
> p {
  padding-left: 1em;
  @media (max-width: ${size.mobileM}) {
      line-height:1.4 !important;
    }
    @media (min-width: ${size.mobileSL}) {
    padding-left: 1.2em !important;
    }
    @media (min-width: ${size.tablet}) {
    padding-left: 1.05em !important;
    }
    @media (min-width: ${size.laptop}) {
    padding-left: 1em !important;
    }
}
`

const TitleTextBlock = styled(TextBlock)`
padding-left: 1em !important;
padding-top: 1em;
padding-bottom: 0 !important;
margin-bottom: 0.2em;
:first-of-type {
    padding-left: 0em !important;
    padding-bottom: 1em !important;
    @media (max-width: ${size.mobileM}) {
      padding-top: 0em;
      padding-bottom: 0em !important;
    }
  }
@media (min-width: ${size.mobileSL}) {
padding-top: 0em;
  }
@media (min-width: ${size.tablet}) {
padding-top: 1em;
  }
@media (min-width: ${size.laptop}) {
padding-top: 0em;
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
    title: "organization"
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
