import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Color, size } from "../../index.styles"
import { Link } from "gatsby";
export const EventNavigatorWrapper = styled.section`
  display: flex;
  flex-direction: row;
  background: white;
  @media (max-width: ${size.mobileM}) {
    display:block;
    padding: 0.5em 0 0 0.7em;
    width:100%;
    :after {
      content:"";
      clear:both;
      display:table;
    }
  }
  @media (min-width: ${size.mobileL}) {
    padding: 0.5em 0 0 0.7em;
  }
  @media (min-width: ${size.tablet}) {
    padding: 0.7em 0 0 0.7em;
  }
  @media (min-width: ${size.laptop}) {
    padding: 0.15em 0.7em 1.5em 1em;
  }
  @media (min-width: ${size.laptopM}) {
    padding: 0.35em 0.7em 1.8em 1em;
  }
  @media (min-width: ${size.laptopL}) {
    padding: 0.5em 0.7em 1.9em 1em;
  }
`

export const EventNavigatorButton = styled(Link)`
  font-size: 1em;
  line-height:1;
  padding: 0.5em 0 0 1em;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  :hover {
    color: ${Color.red};
  }
  @media (max-width: ${size.mobileM}) {
    margin-bottom: 0.6em;
    margin-top: -0.5em;
    font-size: 1.35em;
    padding: 0 1.05em 0 0;
  }
  @media (min-width: ${size.mobileL}) {
    margin-bottom: 0.6em;
    margin-top: 0em;
    font-size: 1.35em;
    padding: 0 1em 0 0;
  }
  @media (min-width: ${size.tablet}) {
    margin-bottom: 0em;
    margin-top: 0em;
    font-size: 1.1em;
    padding: 0 0.9em 1em 0;
  }
  @media (min-width: ${size.laptop}) {
  font-size: 1.0em;
  line-height: 1;
  padding: 0.4em 1em 0 0em;
  }
  @media (min-width: ${size.laptop}) {
  font-size: 1.1em;
  padding: 0.1em 1em 0 0em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.2em;
    padding: 0.2em 1em 0 0em;
  }
`

export const EventNavigatorIcon = styled(FontAwesomeIcon)`
  :hover {
    cursor: pointer;
  }
`