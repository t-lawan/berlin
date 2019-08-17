import styled from "styled-components";

export const DateCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.05em solid black;
  border-right: 0.05em solid black;
  min-height: 400px;
  /* width: auto; */
  height: auto;
  background-color: ${props => (props.addColour ? "#ADEBAD" : "inherit")};
`

export const CurrentDate = styled.div`
  border-bottom: 0.05em solid black;
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