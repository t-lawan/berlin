import React from "react"
import styled from 'styled-components';
import PropTypes from "prop-types"

const LanguageControllerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid black;
    align-items: center;
    justify-content: center;
    /* padding: auto; */
    height: 7.5%;
`;

const LanguageButton = styled.span`

`;

const LanguageController = (props) => (
    <LanguageControllerWrapper>
        {props.languages.map(language => (
            <LanguageButton key={language}> {language} </LanguageButton>
        ))}
    </LanguageControllerWrapper>
)

LanguageController.propTypes = {
    languages: PropTypes.array.isRequired
}

export default LanguageController;