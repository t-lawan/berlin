import React from "react"
import styled from 'styled-components';
import PropTypes from "prop-types"
import {connect} from 'react-redux';
import * as actionTypes from "../store/action";

const LanguageControllerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid black;
    align-items: center;
    justify-content: center;
    padding: 1em;
`;

const LanguageButton = styled.span`
    margin-bottom: 0.5em;
    font-weight: ${props => props.bold ? "bold" : "normal"};
    :hover {
      cursor: ${props => (props.hover ? "pointer" : "inherit")};
  }
`;

const LanguageController = (props) => {
    const languages = props.languages;
    const languageToFunctionWrapper = {
        EN: () => props.setLanguageToEN(),
        DE: () => props.setLanguageToDE()
    }
    return(
    <LanguageControllerWrapper>    
        {Object.keys(languages).map(language => (
         <LanguageButton key={language} onClick={languageToFunctionWrapper[language]} hover bold={languages[language]}> {language.toLowerCase()}</LanguageButton>
        ))}
    </LanguageControllerWrapper>
)}


const mapStateToProps = state => {
    return {
        languages: state.languages
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setLanguageToEN: () => dispatch({type: actionTypes.SET_LANGUAGE_TO_EN}),
        setLanguageToDE: () => dispatch({type: actionTypes.SET_LANGUAGE_TO_DE})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LanguageController);