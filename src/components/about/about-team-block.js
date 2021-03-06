import React from "react"
import { getCurrentLanguageString, createProperty } from "../../utility/helper"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { PageTitle } from "../../templates/page.styles";
import styled from 'styled-components';
import { Section, size } from "../../index.styles";

const PaddedSection = styled(Section)`
  padding: 0 !important;
  > ul {
    list-style: none;
    margin: 0.0em 0 0 0;
    padding: 0;
    > li {
      list-style: none;
      padding-left: 1.2em;
      font-size: 1.05em;
      @media (min-width: ${size.mobileSL}) {
        font-size: 0.85em;
        padding-left: 1.4em;
      }
      @media (min-width: ${size.tablet}) {
        font-size: 0.95em;
        padding-left: 1.25em;
      }
      @media (min-width: ${size.laptop}) {
        font-size: 1em;
        padding-left: 1.2em;
      }
      @media (min-width: ${size.laptopM}) {
        font-size: 1.05em;
      }
      @media (min-width: ${size.laptopL}) {
        font-size: 1.1em;
      }
      line-height: 1.4;
    }
  }
  :first-of-type > ul {
    margin-top: 0.6em;
  }
  :nth-of-type(2) > ul {
    margin-top: 0.6em;
  }
`

const PaddedSectionPosition = styled(Section)`
padding:1em 0 0 1.2em !important;
  >p {
    margin:0;
  }
`
const AboutTeamBlock = props => {
  const language = getCurrentLanguageString(props.languages);
  const generateSection = (item, index) => {
    let renderComponent
    switch (item.team_block_type) {
      case "section":
        renderComponent = (
          <p key={index} className="team_title">
            {item[createProperty("section_title", language)]}{" "}
          </p>
        )
        break
      case "section_content":
        renderComponent = (
          <PaddedSection key={index}><ul>
            {item.block_names.map((person, i) => (
              <li key={person.full_name + i}>{person.full_name} {person[createProperty("additional_info", language)]}</li>
            ))}</ul>
          </PaddedSection>
        )
        break
      case "position":
        renderComponent = (
          <PaddedSectionPosition key={index}>
            <p className="position_title">{item[createProperty("position_title", language)]}</p>
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
    <>
    <PageTitle> {teampage[language].title}</PageTitle>
    <div>{props.team.map((item, index) => generateSection(item, index))}</div>

    </>
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
const teampage = {
  EN: {
    title: 'team',
  },
  DE: {
    title: 'team',
  },
}
export default connect(
  mapStateToProps,
  null
)(AboutTeamBlock)
