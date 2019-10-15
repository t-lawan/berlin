import styled from "styled-components"
import { Color } from "../../index.styles"

export const DateCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  border-bottom: 0.05em solid black;
  /* border-right: 0.05em solid black; */
  min-height: 100px;
  background-color: ${props => (props.addColour ? Color.yellow : "inherit")};
  height: auto;
  display: -moz-inline-grid;
  display: inline-grid;
`
export const EventCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const CurrentDate = styled.div`
  border-right: 0.05em solid black;
  padding: 0.15em 0.5em;
  padding-bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const DateText = styled.strong`
  font-size: xx-large;
  padding-right: 0.5em;
`

export const DateString = styled.p`
  font-size: 1em;
`

export const DateTextWrapper = styled.div`
  line-height: 1em;
`
export const DayMonthText = styled.span`
  font-size: small;
`
export const MonthHeading = styled.p`
  padding: 0.25em 0.25em;
  font-size: 2em;
`
export const ClosedText = styled.p`
  margin: 1.5rem;
  opacity: 0.5;
`
