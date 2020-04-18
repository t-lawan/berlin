import React from "react"
import { getCurrentLanguageString, createProperty } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { size } from "../../index.styles";
import { TextBlock, PageTitle } from "../../templates/page.styles";
import styled from 'styled-components';
const AboutTextBlock = styled(TextBlock)`
padding-top: 0px;
padding-bottom: 0px !important;
> p {
  line-height: 1.3;
  font-size: 1em;
  padding-left: 1em;
    @media (max-width: ${size.mobileM}) {
      line-height:1.4 !important;
    }
    @media (min-width: ${size.mobileSL}) {
    font-size: 0.85em;
    }
    @media (min-width: ${size.tablet}) {
    font-size: 0.95em;
    }
    @media (min-width: ${size.laptop}) {
    font-size: 1em;
    }
    @media (min-width: ${size.laptopM}) {
    font-size: 1.05em;
    }
    @media (min-width: ${size.laptopL}) {
    font-size: 1.1em;
    }
}
:nth-of-type(2) {
    padding-bottom: 1em !important;
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
}
@media (min-width: ${size.mobileSL}) {
padding-top: 0em;
  }
@media (min-width: ${size.tablet}) {
padding-top: 1em;
  }
`
const AboutAdvisoryBoard = props => {
  const language = getCurrentLanguageString(props.languages)
  const teamBlock = props.team_block;
  const generateSection = (teamBlockItem, index) => {
    let renderComponent;
    
    <PageTitle
              dangerouslySetInnerHTML={{
                __html: advisepage[language].title,
              }}
            />
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
            <AboutTextBlock key={index}>
            <p> {teamBlockItem[createProperty("section_title", language)]}</p>
          </AboutTextBlock>
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
    <PageTitle> {advisepage[language].title}</PageTitle>
    <div>{teamBlock.map((item, index) => generateSection(item, index))}</div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

AboutAdvisoryBoard.propTypes = {
  team_block: PropTypes.array,
}
const advisepage = {
  EN: {
    title: 'advisory board',
  },
  DE: {
    title: 'beirat',
  },
}
export default connect(
  mapStateToProps,
  null
)(AboutAdvisoryBoard)
