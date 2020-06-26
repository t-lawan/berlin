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
@media (max-width: ${size.mobileM}) {
    background:#FFF;
    }
    transform: translate3d(0px, 0px,0px);
/* grid-template-columns: 1fr 1fr 1fr 1fr;
${changeGridToThreeEqualRows};
${changeGridToTwoEqualColumns}; */
`

export const CalendarScrollArea = styled.div`

`


export const CalendarFilter = styled.div`
  background: ${Color.yellow};
  border-bottom: 1px solid black;
  text-align: center;
  padding: 1rem;
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
`

export const CalendarFilterDates = styled.div`
  display: ${props => props.show ? 'block': 'none'};
  background: ${Color.yellow};
  border: 1px solid black !important;
  border-top: 0 !important;
  width: 7.5%;
  position: absolute;
  margin-left: 5%;
  text-align: center;
`