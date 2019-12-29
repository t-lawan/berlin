import styled from "styled-components"
import { changeGridToOneRow, Color, size } from "../index.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PageWrapper = styled.div`
  padding: 2.5em 1em 2em;
  background: ${props => props.colour !== 0 ? props.colour : 'inherit'};
  @media (max-width: ${size.tablet}) {
    padding: 1em 0.2em;
  }
`

export const TwoColumnPageWrapper = styled.div`
  padding: 2.5em 1em 2em;
  
  display: grid;
  grid-template-columns: 3fr 6fr;
  grid-column-gap: 1em;
  @media (max-width: ${size.tablet}) {
    padding: 1em 0.2em;
  }
  ${changeGridToOneRow}
`

export const PressWrapper = styled.div`
  padding: 2.5em 1em 2em;
  display: grid;
  grid-template-columns: 3fr 6fr;
  @media (max-width: ${size.tablet}) {
    padding: 1em 0.2em;
  }
  div > p {
  margin-bottom: 0.5em;
  }
  div > div > p {
  margin-bottom: 0.0em;
  }
  div > div{
  margin-bottom: 0.5em;
  }
  ${changeGridToOneRow};
`

export const ResourceImageWrapper = styled.div`
  padding: 1em;
`

export const PressFormInput = styled.input`
  /* font-size: 1em; */
  border-radius: 0;
  border: 1px solid black;
   padding: 0.5em 0.5em;
   width: 19rem;
`

export const CenterColumn = styled.div`
  text-align: center;
  align-content: center;
  margin: auto;
`
export const PressReleaseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 0em;
`
export const PressReleaseText = styled.span`
  margin-right: 2.5em;
  /* font-size: 1.1em; */
`

export const PressReleaseParagraphBlock = styled.div`
  margin: 0;
  padding: 0;
  
  p {
    margin: inherit;
    padding: inherit;
  }
`

export const PressReleaseLink = styled.a`
  text-decoration: none;
  color: inherit;
  /* font-size: 1em; */
  display: grid;
  grid-template-columns: 1fr 17fr;
  &:hover {
    color: ${Color.red};
  }
  /* p {
    font-size: 1.1em;
  } */
  /* ${changeGridToOneRow}; */

`

export const PressArrowContainer = styled.div`
  width: 13px;
  padding-top: 0.3em;
`
export const PressForm = styled.div`
  padding: 1em 0em;
`

export const PressReleaseFormError = styled.p`
  padding: 0.5rem 0rem;
  color: ${Color.red};
`

export const PressArrowDown = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  width: 0.4em;
  opacity: 0.5;
  /* display: inline; */
`

export const ResourcePublisherLink = styled.a`
  text-decoration: none;
  border-bottom: solid thin;
  border-color: ${Color.red};
  /* font-size: 1.15em; */
`

export const TextBlock = styled.div`
  > p {
    padding: 0;
    line-height:1.4;
    margin: 0;
  }
  p {
    font-size:1rem;
  }
  > h1,h2,h3,h4,h5,h6 {
    padding-bottom: 0.1rem;

  }
  padding: 1em 0em;
`
