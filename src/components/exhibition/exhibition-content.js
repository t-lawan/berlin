import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getCurrentLanguageString } from "../../utility/helper";
import { Convert } from "../../utility/convert";
import UpcomingEvents from "../events/upcomingevents";
import { Section } from "../../index.styles";
import SEO from "../seo/seo";
const ExhibitionPageWrapper = styled.div`
  padding: 2em 1em;
`

const ExhibitionContent = props => {
  const language = getCurrentLanguageString(props.languages);
  const exhibition = props.exhibition;
  const renderComponent = (
    <ExhibitionPageWrapper>
      <Section>
        <div
          dangerouslySetInnerHTML={{
            __html: exhibition[language].description,
          }}
        />
      </Section>

      <Section>
        <p> {content[language].works_and_contributions}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: exhibition[language].participant_list,
          }}
        />
      </Section>
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
