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
    margin-top: ${props => props.isCurrent ? '0' : '-1.7em'};
    padding-bottom:0px;
  }
  @media (min-width: ${size.laptopM}) {
    padding-bottom:150px;
  }
`

export const EventItem = styled.div`
  color: black;
  background-color:#FFF;
  position:relative;
  &:first-of-type {
    border: ${props => props.isActive ? `4px solid ${Color.yellow}` : ''};
    @media (max-width: ${size.mobileL}) {
      border: ${props => props.isCurrent ? `4px solid ${Color.yellow}` : ''};
    } 
    @media (min-width: ${size.tablet}) {
    padding: ${props => props.isActive ? `1em 0.7em` : ''};
    border-bottom: 4px solid ${Color.yellow} !important;
    }
    @media (min-width: ${size.laptop}) {
      padding: ${props => props.isActive ? `1.1em 1em` : ''};
    }
    @media (min-width: ${size.laptopM}) {
      padding: ${props => props.isActive ? `1.3em 2em` : ''};
    }
  };
  
  &:first-of-type:after {
    content:" ";
    position:absolute;
    display:block;
    bottom:-4px;
    height:1px;
    left:-4px;
    width:calc(100% + 8px);
    background:#000;
  };
  :last-child {
    border-bottom:none;
  }
  p{
    margin-bottom:0;
    line-height: 1.3;
  }
  border-bottom: 1px solid black;
  @media (max-width: ${size.mobileM}) {
    padding: 1em 1em;
    p{
    font-size: 1em;
    }
  }
  @media (min-width: ${size.mobileL}) {
    padding: 1em 1em;
    p {
    font-size: 0.85em;
    }
  }
  @media (min-width: ${size.tablet}) {
    padding: 1em 1em;
    p{
    font-size: 0.95em;
    }
  }
  @media (min-width: ${size.laptop}) {
    padding: 1.2em 1.3em;
    p{
    font-size: 1em;
    line-height: 1.3;
    }
  }
  @media (min-width: ${size.laptopM}) {
    padding: 1.3em 2.3em;
    p{
    font-size: 1em;
    line-height: 1.35;
    }
  }
`

export const EventLink = styled(UnderlineSectionLink)`
  :hover > div {
    color: ${Color.red}
  }
  > p {
    font-size: 1em;
  }
  @media (max-width: ${size.mobileM}) {
    
    line-height: 1.3;
  }
  /* padding: 1rem; */
  /* div:first-child {
  background: white;
  } */
`

export const EventTitle = styled.div`
transition:all 0.2s ease-in-out;
> p {
  line-height: 1.3;
  font-size: 1em;
  }
`
