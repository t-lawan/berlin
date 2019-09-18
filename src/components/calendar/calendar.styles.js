import styled from "styled-components"
import {
  changeGridToThreeEqualRows,
  changeGridToTwoEqualColumns,
} from "../../index.styles"

export const CalendarWrapper = styled.div`
display: grid;
grid-template-columns: 1fr;
/* grid-template-columns: 1fr 1fr 1fr 1fr;
${changeGridToThreeEqualRows};
${changeGridToTwoEqualColumns}; */
`
