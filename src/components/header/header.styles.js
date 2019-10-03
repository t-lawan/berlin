import styled from "styled-components"
import { hideDisplayForTablet, changeGridToOneRow, showDisplayForTablet, hideDisplayForMobile } from "../../index.styles"
import { Link } from "gatsby";

export const HeaderWrapper = styled.header`
  /* opacity: 1; */
  transition: opacity 0.5s;
  border-bottom: 1px solid black;
  padding: 0.5em 1em;

  align-items: start;
  justify-items: center;
  background: white;

  :hover {
    /* opacity: 0.01; */
  }
  ${hideDisplayForMobile};
`
export const Left = styled.div`
  justify-self: start;
  align-self: flex-start;
  justify-content: flex-end;
`

export const Right = styled.div`
  justify-self: end;
  align-self: flex-end;
  text-align: right;
`

export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const DateContainer = styled.div`
  ${showDisplayForTablet};
`

export const Heading = styled.p`
  font-size: 2rem;
`

export const HeaderLink = styled(Link)`
  text-decoration: none;
  display: grid;
  grid-template-columns:1fr 1fr;
  ${changeGridToOneRow};

`
