import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getCurrentLanguageString } from "../../utility/helper";
import { size } from "../../index.styles";
const ExhibitionPageWrapper = styled.div`
  padding: 0.7em 1em 140px;
  @media (max-width: ${size.mobileM}) {
    padding: 1em 0.7em;
    border-top:solid 1px #000;
    background:#FFF;
  }
  @media (max-width: ${size.tablet}) {
  padding: 0.7em 0.7em;
  }
  @media (min-width: ${size.laptopM}) {
  padding: 0.7em 1em 160px;
  }
  @media (min-width: ${size.laptopL}) {
  padding: 0.9em 1.2em 180px;
  }
  > div > p > a {
    border-bottom:solid thin rgb(217,81,92);
    transition:all 0.2s ease-in-out;
    font-size: 1em;
    :hover {
      color:rgb(217,81,92);
    }
  }
`

const ExhibitionContent = props => {
  const language = getCurrentLanguageString(props.languages);
  const exhibition = props.exhibition;
  const renderComponent = (
    <ExhibitionPageWrapper>
      
        <div
          dangerouslySetInnerHTML={{
            __html: exhibition[language].description,
          }}
        />
      
        <p hidden={!exhibition[language].participant_list}> {content[language].works_and_contributions}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: exhibition[language].participant_list,
          }}
        />
      
    </ExhibitionPageWrapper>
  )
  return renderComponent;
}

const content = {
  EN: {
    works_and_contributions : 'With works and contributions by:'
  },
  DE: {
    works_and_contributions : 'Mit Arbeiten und Beiträgen von:'
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

ExhibitionContent.propTypes = {
    exhibition: PropTypes.object,
  }
  
export default connect(
  mapStateToProps,
  null
)(ExhibitionContent)