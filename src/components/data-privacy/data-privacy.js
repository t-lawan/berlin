import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import styled from "styled-components"
import * as actionTypes from "../../store/action"
import { Link } from "gatsby"
import { getCurrentLanguageString, createPath } from "../../utility/helper"

export const DataPrivacyWrapper = styled.div`
  display: ${props => (props.show ? "grid" : "none")};
  grid-template-columns: 8fr 1fr;
  color: white;
  background: black;
  padding: 1em;
`

export const DataPrivacyButton = styled.button`
  margin: 0.5em 0.25em;
  font-size: 1em;
  display: block;
  border-radius: 0;
  background: white;
  border: 1px solid black;
  padding: 1em 2em;
  :hover {
    cursor: pointer;
  }
`

export const DataPrivacyLink = styled(Link)`
  /* text-decoration: none; */
  text-decoration: underline;
  color: white;
`

const DataPrivacy = props => {
  const language = getCurrentLanguageString(props.languages);
    console.log(language);
  return (
    <DataPrivacyWrapper show={props.show}>
      <div>
        <p>
          By using this website you agree to the use of cookies in accordance
          with our{" "}
          <DataPrivacyLink to={createPath(language, 'data-privacy')}>
            data privacy policy
          </DataPrivacyLink>{" "}
          .
        </p>
      </div>
      <div>
        <DataPrivacyButton onClick={() => props.setAgreedToTrue()}>
          {" "}
          OK{" "}
        </DataPrivacyButton>
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
