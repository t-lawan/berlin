import styled from "styled-components"
import {
  changeGridToThreeEqualRows,
  changeGridToTwoEqualColumns,
  size,
  Color,
} from "../../index.styles"

export const CalendarWrapper = styled.div`
display: grid;
grid-template-columns: 1fr;
overflow-y: scroll;
padding-top: ${props => props.isExp4 ? '100px' : '100px'};
margin-top: ${props => props.isExp4 ? '-100px' : '-100px'};
@media (max-width: ${size.mobileM}) {
    background:#FFF;
    }
    transform: translate3d(0px, 0px,0px);
/* grid-template-columns: 1fr 1fr 1fr 1fr;
${changeGridToThreeEqualRows};
${changeGridToTwoEqualColumns}; */
`

export const CalendarScrollArea = styled.div``

export const CalendarFilter = styled.div`
  background: ${Color.yellow};
  border-bottom: 1px solid black;
  text-align: left;
  padding: 0.85em 0;
  position: relative;
`

export const CalendarFilterWrapper = styled.div`
  z-index: 250;
  position: fixed;
  width: 100%;
  /* top: 0; */
`

export const CalendarFilterButton = styled.p`
  margin: 0;
  cursor: pointer;
  :hover {
    color: ${Color.red};
  }
  @media (min-width: ${size.laptop}) {
    margin-left: calc(20% + 1em);
  }
`

export const CalendarFilterMonthsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const CalendarFilterDates = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  background: ${Color.yellow};
  border: 1px solid black !important;
  border-top: 0 !important;
  width: auto;
  position: absolute;
  margin-left: 5%;
  text-align: center;
  padding: 0.5rem;
  @media (min-width: ${size.laptop}) {
    margin-left: calc(20% - 0.05em);
    padding: 0.85em 0.85em 0.30em 0.85em;
  }
`

export const CalendarFilterMonth = styled.p`
  display: inline-flex;
  padding: 0 0.85em 0 0.25em;
  margin-bottom: 0.85em;
  cursor: pointer;
  color: ${props => (props.isMonth ? Color.red : "black")};
  :hover {
    color: ${Color.red};
  }
`

export const SmallCalendarWrapper = styled.div`
  display: grid;
  grid-column-gap: 0.75rem;
  grid-template-columns: repeat(7, 1fr);
`

export const SmallCalendarDates = styled.p`
  color: ${props => (props.isDate ? Color.red : "black")};
  opacity: ${props => (props.isValid ? 1 : 0.4)};
  display: inline-block;
  cursor: ${props => (props.isValid ? 'pointer' : 'default')};
  :hover {
    color: ${props => (props.isValid ? Color.red : "black")};
  }
  margin-bottom: 0.5em;
`
