import styled from "styled-components"
import { Color, size } from "../../index.styles"

export const DateCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  border-bottom: 1px solid black;
  /* border-right: 1px solid black; */
  background-color: ${props => (props.addColour ? Color.yellow : "inherit")};
  height: auto;
  display: -moz-inline-grid;
  display: inline-grid;
  @media (max-width: ${size.mobileM}) {
    grid-template-columns: 2fr 6fr;
  }
  @media (min-width: ${size.mobileL}) {
    grid-template-columns: 1fr 4fr;
  }
  @media (min-width: ${size.mobileSL}) {
    grid-template-columns: 1.3fr 4fr;
  }
  @media (min-width: ${size.laptop}) {
    grid-template-columns: 1fr 4fr;
    padding-top:92px;
    margin-top:-92px;
    :last-child {
      padding-bottom:45px;
      border-bottom:none;
    }
  }
  @media (min-width: ${size.laptopM}) {
    padding-top:96px;
    margin-top:-96px;
    :last-child {
      padding-bottom:130px;
    }
  }
  @media (min-width: ${size.laptopL}) {
    /* padding-top:106px; */
    padding-top: ${props => props.isExp4 ? '167px' : '106px'};
    margin-top: ${props => props.isExp4 ? '-106px' : '-106px'};
    :last-child {
      padding-bottom:140px;
    }
  }
  @media (min-width: ${size.laptopL}) {
    grid-template-columns: 1fr 5fr;
  }
`
export const MonthCardWrapper = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 5fr; */
  border-bottom: 1px solid black;
  /* border-right: 1px solid black; */
  background-color: ${props => (props.addColour ? Color.yellow : "inherit")};
  height: auto;
  display: -moz-inline-grid;
  display: inline-grid;
  @media (max-width: ${size.mobileM}) {
    /* grid-template-columns: 2fr 6fr; */
  }
  @media (min-width: ${size.mobileL}) {
    /* grid-template-columns: 1fr 4fr; */
  }
  @media (min-width: ${size.laptop}) {
    /* grid-template-columns: 1fr 5fr; */
    padding-top:0px;
    margin-top:0px;
    :last-child {
      padding-bottom:115px;
      border-bottom:none;
    }
  }
`
export const EventCardsWrapper = styled.div`
  display: ${props => props.hideInMobile ? 'flex' : 'none'};
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  /* width: 70%; */
  
  @media (max-width: ${size.mobileM}) {
    flex-direction: column;
    display: ${props => props.hideInMobile ? 'none' : 'flex'};
  }
`

export const ExhibitionCardsWrapper = styled(EventCardsWrapper)`
  display: flex !important;
  justify-content: flex-start;
  flex-direction: row;

  /* width: 30%; */
  @media (max-width: ${size.mobileM}) {
    opacity: 0.4;
  }
`

export const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  grid-column-gap: 1rem;
  @media (max-width: ${size.mobileM}) {
    grid-template-columns: 1fr;

  }
`

export const EventsContainer = styled.div`
  
`
export const CurrentDate = styled.div`
  border-right: 0.05em solid black;
  padding: 0.5em 1em;
  display: flex;
  flex-direction: row;
  align-items: top;
  @media (max-width: ${size.mobileM}) {
    padding: 0.3em 0.5em;
  }
  @media (min-width: ${size.laptopM}) {
    padding: 0.45em 0.5em;
  }
`
export const DateText = styled.strong`
  font-size: xx-large;
  width:55%;
  font-weight:normal;
  text-align:right;
  line-height: 1;
  padding-right: 0.3em;
  @media (max-width: ${size.mobileM}) {
    width:50%;
    font-size: 1.55em;
    padding-right: 0.2em;
  }
  @media (min-width: ${size.mobileSL}) {
    font-size: 1.35em;
  }
  @media (min-width: ${size.tablet}) {
   font-size: 1.5em; 
  }
  @media (min-width: ${size.laptop}) {
   font-size: 1.8em;
   padding-right: 0.5em;
  }
  @media (min-width: ${size.laptopM}) {
   font-size: 1.95em;
  }
`

export const DateString = styled.p`
  font-size: 0.93em;
  text-transform:lowercase;
  margin:0;
  line-height:1.15;
  @media (max-width: ${size.mobileM}) {
    font-size: 0.70em;
    line-height:1.2;
  }
  @media (max-width: ${size.mobileL}) {
    line-height:1.15;
  }
  @media (min-width: ${size.mobileSL}) {
    font-size: 0.73em;
    line-height: 1.0;
  }
  @media (min-width: ${size.tablet}) {
    font-size: 0.93em;
    line-height:1.15;
  }
`

export const DateTextWrapper = styled.div`
  line-height: 1em;
`
export const DayMonthText = styled.span`
  font-size: small;
`
export const MonthHeading = styled.p`
  padding: 0.25em 0.5em;
  line-height: 1;
  margin:0;
  font-size: 2em;
  @media (min-width: ${size.mobileL}) {
    font-size: 1.5em;
    padding: 0.25em 0.4em;
  }
  @media (min-width: ${size.mobileSL}) {
    font-size: 1.35em;
    padding: 0.35em 0.4em;
  }
  @media (min-width: ${size.tablet}) {
    font-size: 1.5em;
    padding: 0.25em 0.4em;
  }
  @media (max-width: ${size.mobileM}) {
    font-size: 1.55em;
    padding: 0.4em 0.4em;
  }
  @media (min-width: ${size.laptop}) {
   font-size: 1.8em;
   padding: 0.25em 0.5em;
  }
  @media (min-width: ${size.laptopM}) {
    font-size: 1.85em;
    padding: 0.33em 0.5em 0.33em;
  }
  @media (min-width: ${size.laptopL}) {
    padding: 0.4em 0.55em;
  }
`
export const ClosedText = styled.p`
  margin: 0.5em 1em;
  text-transform:lowercase;
  @media (min-width: ${size.mobileS}) {
    margin: 0.2em 0.5em 1.1em;
  }
  @media (min-width: ${size.mobileSL}) {
    margin: 0.5em 0.5em;
  }
  @media (min-width: ${size.tablet}) {
    margin: 0.5em 0.7em;
  }
  @media (min-width: ${size.laptop}) {
    margin: 0.35em 1em;
  }
  @media (min-width: ${size.laptopM}) {
    margin: 0.35em 1em 1.25em;
  }
`
