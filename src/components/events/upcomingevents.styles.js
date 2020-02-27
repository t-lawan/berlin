import styled from "styled-components";
import { Color, UnderlineSectionLink, size } from "../../index.styles";

export const EventsWrapper = styled.div`
  border-top: ${props => props.isHome ? 'solid 1px #000': 'none'};
  /* padding: 1.5em; */
  padding-bottom:130px;
  /* line-height: 1.4em; */

  @media (max-width: ${size.mobileM}) {
    width: calc(100% + 1.4em);
    margin-left: -0.7em;
    margin-top:-1.5em;
  }
`

export const EventItem = styled.div`
  color: black;
  background-color:#FFF;
  position:relative;
  &:first-of-type {
    border: ${props => props.isActive ? `6px solid ${Color.yellow}` : ''}; 
  };
  
  &:first-of-type:after {
    content:" ";
    position:absolute;
    display:block;
    bottom:-6px;
    height:1px;
    left:-6px;
    width:calc(100% + 12px);
    background:#000;
  };
  :last-child {
    border-bottom:none;
  }
  p{
    margin-bottom:0;
  }
  border-bottom: 1px solid black;
  @media (max-width: ${size.mobileM}) {
    padding: 1em 1em;
    p{
    font-size: 1em;
    }
  }
  @media (min-width: ${size.mobileL}) {
    padding: 1em 1.7em;
  }
  @media (min-width: ${size.tablet}) {
    padding: 1em 1em;
    p{
    font-size: 1em;
    }
  }
  @media (min-width: ${size.laptop}) {
    padding: 1em 2.2em;
    p{
    font-size: 1em;
    line-height: 1.3;
    }
  }
`

export const EventLink = styled(UnderlineSectionLink)`
  :hover > div {
    color: ${Color.red}
  }
  /* padding: 1rem; */
  /* div:first-child {
  background: white;
  } */
`

export const EventTitle = styled.div`
transition:all 0.2s ease-in-out;
`
