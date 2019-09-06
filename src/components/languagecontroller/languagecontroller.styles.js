import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from 'gatsby';

export const LanguageControllerWrapper = styled.div`
display: flex;
flex-direction: column;
border-bottom: 1px solid black;
align-items: center;
justify-content: center;
padding: 0.5em;
`;

export const LanguageButton = styled(Link)`
text-decoration: none;
color: black;
margin-bottom: 0.25em;
font-size: xx-large;
font-weight: ${props => props.bold ? "bold" : "lighter"};
:hover {
  cursor: "pointer";
}
`;