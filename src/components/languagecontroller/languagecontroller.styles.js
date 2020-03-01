import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { size, Color } from "../../index.styles";

export const LanguageControllerWrapper = styled.div`
  display: flex;
  z-index: 5000;
  @media (min-width: ${size.mobileL}) {
    border: 0;
    flex-direction: row;
    padding: 0;
  }
  @media (min-width: ${size.laptop}) {
  flex-direction: column;
  border-bottom: 1px solid black;
  align-items: center;
  justify-content: center;
  padding: 0.5em 0;
  background: white;
  }
  @media (min-width: ${size.laptopM}) {
    padding: 0.6em 0;
  }
  @media (max-width: ${size.mobileM}) {
    padding: 0.2em 0 0em;
    text-align:right;
    display:block;
    border-bottom: 0px solid black;
  }
`

export const LanguageButton = styled(AniLink)`
  text-decoration: none;
  color: black;
  opacity: ${props => props.selected ? 1 : 0.3};
  margin-bottom: 0.1em;
  line-height:1.1;
  font-size: 1.2rem;
  font-weight: ${props => (props.selected ? "normal" : "normal")};
  :hover {
    cursor: "pointer";
    color: ${Color.red};
  }
  @media (min-width: ${size.mobileL}) {
    font-size: 1.15rem;
    margin: 0;
    padding-top:0.2em;
    margin-left: 0.0em;
    margin-right: 0.7em;
  }
  @media (min-width: ${size.laptop}) {
    display: block;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    line-height: 1.0;
    font-size: 1.2em;
  }
  @media (min-width: ${size.laptopM}) {
    font-size: 1.4em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.5em;
  }
  @media (max-width: ${size.mobileM}) {
    font-size: 1.65em;
    margin-top:0.3em;
    margin-bottom:0;
    line-height: 1;
    margin-left: 0.5em;
  }

`
