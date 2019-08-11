import styled from "styled-components"

export const ColumnLayout = styled.div`
border-right: ${props => props.rightBorder ? "1px solid black" : 0};
height: 100%;
height: 100vh;
overflow-y: auto;
`;