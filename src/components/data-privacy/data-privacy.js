import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import styled from "styled-components"
import * as actionTypes from "../../store/action"
import {
  UnderlineTransitionLink,
  LargeButton,
  Section,
  size,
} from "../../index.styles"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
export const DataPrivacyWrapper = styled(Section)`
  display: ${props => (props.show ? "grid" : "none")};
  grid-template-columns: 8fr 1fr;
  color: white;
  background: black;
  > p > a {
    font-size: 0.8rem;
  }
  > div:last-child {
    text-align: right;
  }
  @media (max-width: ${size.mobileM}) {
  padding-bottom: 0.5em;
  }
`

export const DataPrivacyBlock = styled.div`
  > p {
    max-width: 100%;
    @media (max-width: ${size.mobileM}) {
      font-size: 0.9em !important;
      margin-bottom: 1em !important;
      padding-right: 0.5em !important;
    }
    @media (max-width: ${size.mobileXL}) {
      font-size: 0.85em;
      margin-bottom: 0;
    }
    > a {
      font-size: 1em;
    }
  }
`

const text = {
  EN: {
    text:
      "By using this website you agree to the use of cookies in accordance with our ",
    text_one:
      "By using this website you agree to the use of cookies in accordance with our ",
    text_two: "",
    link: "data privacy policy",
  },
  DE: {
    text:
      "Mit der Nutzung dieser Website erklären Sie sich mit der Verwendung von Cookies gemäß unserer ",
    text_one:
      "Mit der Nutzung dieser Website erklären Sie sich mit der Verwendung von Cookies gemäß unserer ",
    text_two: " einverstanden",
    link: "Datenschutzerklärung",
  },
}

class DataPrivacy extends React.Component {
  language

  componentDidMount() {
    if (typeof window !== `undefined`) {
      if (window.localStorage.getItem("AGREED_TO_PRIVACY")) {
        if(!this.props.agreed_to_terms) {
          this.props.setAgreedToTrue()
        }
      }
    }
  }
  setAgreedToTrue = () => {
    if (!this.props.agreed_to_terms) {
      this.props.setAgreedToTrue()
      if (typeof window !== `undefined`) {
        if (!window.localStorage.getItem("AGREED_TO_PRIVACY")) {
          window.localStorage.setItem("AGREED_TO_PRIVACY", true)
        }
      }
    }
  }

  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    return (
      <DataPrivacyWrapper show={this.props.show}>
        <DataPrivacyBlock>
          <p>
            {text[this.language].text_one}
            <UnderlineTransitionLink
              colour={"white"}
              to={createPath(this.language, "data-privacy")}
            >
              {/* <UnderlineTransitionLink colour="white" cover direction="down" bg={transitionBackground} to={createPath(language, 'data-privacy')}> */}
              {text[this.language].link}
            </UnderlineTransitionLink>
            {text[this.language].text_two}.
          </p>
        </DataPrivacyBlock>
        <div>
          <LargeButton bgColour="white" onClick={() => this.setAgreedToTrue()}>
            {" "}
            OK{" "}
          </LargeButton>
        </div>
      </DataPrivacyWrapper>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(DataPrivacy)
