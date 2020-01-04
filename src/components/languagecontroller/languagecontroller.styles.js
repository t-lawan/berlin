import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { size } from "../../index.styles";

export const LanguageControllerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  align-items: center;
  justify-content: center;
  padding: 0.3em;
  background: white;
  z-index: 5000;
  @media (max-width: ${size.tablet}) {
    border: 0;
    flex-direction: row;
    padding: 0;
  }
  @media (max-width: ${size.mobileL}) {
    padding: 0.25em;

  }
`

export const LanguageButton = styled(AniLink)`
  text-decoration: none;
  color: black;
  opacity: ${props => props.selected ? 0.3 : 1};
  margin-bottom: 0.05em;
  line-height:1.1;
  font-size: 1.15rem;
  font-weight: ${props => (props.selected ? "bold" : "lighter")};
  :hover {
    cursor: "pointer";
  }
  @media (max-width: ${size.tablet}) {
    font-size: 1.4rem;
    margin: 0;
    margin-left: 0.5em;
  }

  @media (max-width: ${size.mobileL}) {
    font-size: 1.3rem;
    margin: 0;
    margin-left: 0.5em;
  }

`
