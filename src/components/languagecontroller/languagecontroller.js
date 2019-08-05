import React from "react"
import styled from 'styled-components';
import PropTypes from "prop-types"
import {connect} from 'react-redux';
import * as actionTypes from "../../store/action";
import { LanguageControllerWrapper, LanguageButton } from "./languagecontroller.styles";

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