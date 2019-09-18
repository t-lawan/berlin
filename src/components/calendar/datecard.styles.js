import styled, { css } from "styled-components"
import { changeNthChild, mobile, Color } from "../../index.styles"

export const DateCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  border-bottom: 0.05em solid black;
  border-right: 0.05em solid black;
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
`
export const DateText = styled.strong`
  font-size: xx-large;
  padding-right: 0.5em;
`
export const DayMonthText = styled.span`
  font-size: small;
`
export const MonthHeading = styled.h1`
  padding: 0.25em 0.5em;
`
