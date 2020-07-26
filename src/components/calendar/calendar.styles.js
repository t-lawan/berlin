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
 margin-top: -100px;
 padding-top: ${props => props.isExp4 ? '187px' : '100px'};
@media (max-width: ${size.mobileL}) {
    padding-top: ${props => props.isExp4 ? '192px' : '100px'};

    }
@media (min-width: ${size.laptop}) {
  padding-top: ${props => props.isExp4 ? '147px' : '100px'};
}
@media (min-width: ${size.laptopM}) {
  padding-top: ${props => props.isExp4 ? '151px' : '100px'};
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
  padding: 0.75em 0;
  position: relative;
  @media (max-width: ${size.mobileL}) {
    padding: 0.65em 0;
  }
  @media (min-width: ${size.laptopM}) {
    padding: 0.85em 0;
  }
`

export const CalendarFilterWrapper = styled.div`
  z-index: 250;
  position: fixed;
  width: 100%;
  @media (max-width: ${size.mobileL}) {
    width: 100vw;
    top: 88px;
  }
  @media (min-width: ${size.tablet}) {
    width: calc(66.66vw - 1px);
    margin-top: 43px;
  }
  @media (min-width: ${size.laptop}) {
    width: calc(58.6608vw - 1px);
    margin-top: 0;
  }
  @media (min-width: ${size.laptopM}) {
    width: calc(59.927vw - 1px);
  }
`

export const CalendarFilterButton = styled.p`
  margin: 0;
  cursor: pointer;
  :hover {
    color: ${Color.red};
  }
  @media (max-width: ${size.mobileM}) {
    margin-left: 0.7em;
  }
  @media (min-width: ${size.tablet}) {
    padding-left: 0.8em;
    margin-left: 24.5%;
  }
  @media (min-width: ${size.laptop}) {
    margin-left: calc(18% + 1em);
  }
  @media (min-width: ${size.laptopM}) {
    margin-left: calc(18% + 1.1em);
  }
  @media (min-width: ${size.laptopL}) {
    margin-left: calc(14.5% + 1.2em);
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
  @media (max-width: ${size.mobileL}) {
    margin-left: 0;
    padding: 0.7em;
  }
  @media (min-width: ${size.tablet}) {
    margin-left: calc(24.5% - 1px);
  }
  @media (min-width: ${size.laptop}) {
    margin-left: calc(20% - 1px);
    padding: 0.85em 0.85em 0.30em 0.85em;
  }
  @media (min-width: ${size.laptopL}) {
    margin-left: calc(16.6% - 1px);
  }
`

export const CalendarFilterMonth = styled.p`
  display: inline-flex;
  padding: 0 0.85em 0 0.25em;
  margin-bottom: 0.85em;
  cursor: pointer;
  @media (max-width: ${size.mobileL}) {
    padding: 0 0.85em 0 0em;
  }
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
