import styled from "styled-components"
import {
  changeGridToThreeEqualRows,
  changeGridToTwoEqualColumns,
  size,
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