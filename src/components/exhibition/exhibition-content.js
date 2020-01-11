import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getCurrentLanguageString } from "../../utility/helper";
import { Section, size } from "../../index.styles";
const ExhibitionPageWrapper = styled.div`
  padding: 0.7em 1em;
  @media (max-width: ${size.mobileM}) {
    padding: 1em 0.7em;
    border-top:solid 1px #000;
    background:#FFF;
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
