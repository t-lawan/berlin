import styled from 'styled-components';

export const LanguageControllerWrapper = styled.div`
display: flex;
flex-direction: column;
border-bottom: 1px solid black;
align-items: center;
justify-content: center;
padding: 0.5em;
`;

export const LanguageButton = styled.span`
margin-bottom: 0.25em;
font-weight: ${props => props.bold ? "bold" : "normal"};
:hover {
  cursor: ${props => (props.hover ? "pointer" : "inherit")};
}
`;