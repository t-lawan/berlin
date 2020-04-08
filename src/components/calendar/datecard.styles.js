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
  @media (min-width: ${size.laptop}) {
    grid-template-columns: 1fr 4fr;
    padding-top:110px;
    margin-top:-110px;
    :last-child {
      padding-bottom:45px;
      border-bottom:none;
    }
  }
  @media (min-width: ${size.laptopM}) {
    padding-top:111px;
    margin-top:-111px;
    :last-child {
      padding-bottom:70px;
      border-bottom:none;
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
    padding-right: 0.2em;
  }
  @media (max-width: ${size.tablet}) {
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
    font-size: 0.85em;
    line-height:1.2;
  }
  @media (max-width: ${size.mobileL}) {
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
  @media (min-width: ${size.tablet}) {
    font-size: 1.5em;
    padding: 0.25em 0.4em;
  }
  @media (max-width: ${size.mobileM}) {
    font-size: 1.55em;
    padding: 0.3em 0.4em;
  }
  @media (min-width: ${size.laptop}) {
   font-size: 1.8em;
   padding: 0.25em 0.5em;
  }
  @media (min-width: ${size.laptopM}) {
    font-size: 1.85em;
    padding: 0.3em 0.5em 0.3em;
  }
`
export const ClosedText = styled.p`
  margin: 0.5em 1em;
  text-transform:lowercase;
  @media (min-width: ${size.mobileS}) {
    margin: -0.3em 0.5em;
  }
  @media (min-width: ${size.tablet}) {
    margin: 0.5em 0.7em;
  }
  @media (min-width: ${size.laptop}) {
    margin: 0.35em 1em;
  }
`
