import styled from "styled-components"
import { changeGridToOneRow, Color, size } from "../index.styles";
import { RelatedResourcesWrapper } from "../components/resources/related-resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TwoColumnPageWrapper = styled.div`
  padding: 2em 1em 2em;
  display: grid;
  grid-template-columns: 33fr 66fr;
  grid-column-gap: 2em;
  @media (max-width: ${size.tablet}) {
    padding: 1em 0.7em;
  }
  @media (max-width: ${size.mobileM}) {
    grid-template-columns: 1fr;
    background:#FFF;
  }
  @media (min-width: ${size.mobileL}) {
    grid-template-columns: 33fr 66fr;
  } 
  @media (min-width: ${size.laptopL}) {
    grid-template-columns: 1fr 4fr;
  }  
  ${changeGridToOneRow}
`

export const PageWrapper = styled.div`
  padding: 2.0em 1em 2em;
  background: ${props => props.colour !== 0 ? props.colour : 'inherit'};
  @media (max-width: ${size.tablet}) {
    padding: 1em 0.7em;
    background:#FFF;
  }
  @media (min-width: ${size.laptop}) {
    padding-bottom:115px;
  }
  > ${TwoColumnPageWrapper} {
    padding: 1.5em 0 0 0;
  }
`
export const PageWrapperRes = styled.div`
  padding: 2.0em 1em 2em;
  background: ${props => props.colour !== 0 ? props.colour : 'inherit'};
  @media (max-width: ${size.tablet}) {
    padding: 0em;
  }
  @media (max-width: ${size.mobileM}) {
    > div {
      background: ${Color.yellow};
    }
  }
  > ${TwoColumnPageWrapper} {
    padding: 1.5em 0 0 0;
  }
  > ${RelatedResourcesWrapper} {
    padding: 1.5em 0 0 0;
    margin-left:-0.35em;
    margin-right:-0.35em;
    width:calc(100% + 0.7em);
  }
`


export const TwoColumnPageWrapperNoPad = styled.div`
  padding: 2em 0em 2em;
  
  display: grid;
  grid-template-columns: 3fr 6fr;
  grid-column-gap: 2em;
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
    padding: 1em 0.7em;
    grid-template-columns: 1fr;
  }
  @media (min-width: ${size.tablet}) {
    border-top:solid 1px #000;
  }
  @media (max-width: ${size.mobileM}) {
    border-top:none;
    background:#FFF;
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
  ul {
    list-style:none;
    font-size: 1rem;
    margin:0.5rem 0;
    padding:0;
    li {
      list-style-type:none;
    }
  }
  ${changeGridToOneRow};
  @media (min-width: ${size.laptop}) {
    padding-bottom:115px;
    border-top: none;
  }
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
  display: grid;
  grid-template-columns: 3fr 7fr;
  @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr 3fr;
    column-gap: 0.7em;
  }
`
export const PressReleaseText = styled.span`
  margin-right: 0em;
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
export const PageTitle = styled.h1`
  font-size: 1.55em;
  margin: -0.3em 0 1em;
  text-transform:lowercase;
  display:none;
  @media (max-width: ${size.tablet}) {
    display:block;
  }
  @media (min-width: ${size.mobileL}) {
    font-size:1.2rem;
    margin-bottom:1.5rem;
  }
`
export const PageTitleCalendar = styled.h1`
  font-size: 1.55em;
  margin: 0;
  display:none;
  @media (max-width: ${size.mobileL}) {
    font-size:1.55rem;
    margin-bottom:0 !important;
    background:#FFF;
    padding:0.3em 0.4em;
    border-bottom:solid 1px #000;
    width:100%;
    top:0;
    z-index:3;
    position:sticky;
    margin-bottom:1.0rem;
  }
  @media (max-width: ${size.tablet}) {
    display:block;
    position:sticky;
    top:0;
    background:#FFF;
    z-index:3;
    border-top: solid 1px #000;
    padding:0.3em 0.4em;
    border-bottom:solid 1px #000;
    width:100%;
  }
`
export const PageSubTitle = styled.h3`
  font-size: 1rem;
  margin: 1em 0 0.5em;
  :first-child {
    margin-top:0;
  }
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
    @media (max-width: ${size.mobileM}) {
    font-size:1.1rem;
    line-height:1.4;
  }
  @media (min-width: ${size.mobileL}) {
    font-size:0.95rem;
    line-height:1.3;
  }
  @media (min-width: ${size.laptop}) {
    font-size:1rem;
    line-height:1.4;
  }
  }
  > h1,h2,h3,h4,h5,h6 {
    padding-bottom: 0.1rem;

  }
  padding: 0 0 1em 0em;
`
