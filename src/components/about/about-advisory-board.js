import React from "react"
import { getCurrentLanguageString, createProperty } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { UnderlinedText, size } from "../../index.styles";
import { TextBlock, PageTitle } from "../../templates/page.styles";
import styled from 'styled-components';
const AboutTextBlock = styled(TextBlock)`
padding-top: 0;
> p {
  line-height: 1.3;
  padding-left: 1em;
    @media (max-width: ${size.mobileM}) {
      line-height:1.4 !important;
    }
    @media (min-width: ${size.laptop}) {
    font-size: 1.1em;
    }
}
`
const TitleTextBlock = styled(TextBlock)`
padding: 0;
padding-top: 0em;
> p {
  font-size:1.1em;
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
