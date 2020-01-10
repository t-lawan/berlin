import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import styled from "styled-components"
import * as actionTypes from "../../store/action"
import { getCurrentLanguageString, createPath, transitionBackground } from "../../utility/helper"
import { UnderlineTransitionLink, LargeButton, Section } from "../../index.styles";
export const DataPrivacyWrapper = styled(Section)`
  display: ${props => (props.show ? "grid" : "none")};
  grid-template-columns: 8fr 1fr;
  color: white;
  background: black;

  > p > a {
    font-size: 0.8rem;
  }
`

export const DataPrivacyBlock = styled.div`
    > p > a {
    font-size: 1rem;
  }
`

const text = {
  EN: {
    text: "By using this website you agree to the use of cookies in accordance with our ",
    link: "data privacy policy"
  },
  DE: {
    text: "Mit der Nutzung dieser Website erklären Sie sich mit der Verwendung von Cookies gemäß unserer Datenschutzerklärung einverstanden ",
    link: "Datenschutzerklärung einverstanden"
  }
}

const DataPrivacy = props => {
  const language = getCurrentLanguageString(props.languages);
  return (
    <DataPrivacyWrapper show={props.show}>
      <DataPrivacyBlock>
        <p>
          {text[language].text}
          <UnderlineTransitionLink colour="white" bg={transitionBackground} to={createPath(language, 'data-privacy')}>
            {text[language].link}
          </UnderlineTransitionLink>
          .
        </p>
      </DataPrivacyBlock>
      <div>
        <LargeButton bgColour="white" onClick={() => props.setAgreedToTrue()}>
          {" "}
          OK{" "}
        </LargeButton>
      </div>
    </DataPrivacyWrapper>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    agreed_to_terms: state.agreed_to_terms,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAgreedToTrue: () => dispatch({ type: actionTypes.HAS_AGREED_TO_TERMS }),
  }
}

DataPrivacy.propTypes = {
  show: PropTypes.bool,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataPrivacy)
