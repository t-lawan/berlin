import styled from "styled-components"
import { changeGridToOneRow, Color, size } from "../index.styles";
import { RelatedResourcesWrapper } from "../components/resources/related-resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TwoColumnPageWrapper = styled.div`
  padding: 2em 1em 2em;
  display: grid;
  grid-template-columns: 33fr 66fr;
  grid-column-gap: 2em;
  @media (max-width: ${size.tabletL}) {
    padding: 1em 0.7em;
  }
  :nth-child(2){
    padding-top:0;
  }
  @media (max-width: ${size.mobileM}) {
    grid-template-columns: 1fr;
    background:#FFF;
  }
  @media (min-width: ${size.mobileL}) {
    grid-template-columns: 33fr 66fr;
  } 
  @media (min-width: ${size.laptop}) {
    grid-template-columns: 3fr 7fr;
    padding: 2.5em 1em 2em;
    } 
  @media (min-width: ${size.laptopM}) {
    grid-template-columns: 3fr 7.2fr;
    padding: 2.6em 1.1em 2em;
    } 
  @media (min-width: ${size.laptopL}) {
    grid-template-columns: 2.9fr 7.0fr;
    grid-column-gap: 2.3em;
  }  
  ${changeGridToOneRow}
`
export const ImagesCont = styled.div`
  > p {
    margin-top: 1em;
  }
`

export const PageWrapper = styled.div`
  padding: 2.0em 1em 2em;
  > div > p {
    max-width: 700px;
  }
  background: ${props => props.colour !== 0 ? props.colour : 'inherit'};
  @media (max-width: ${size.tabletL}) {
    padding: 1em 0.7em;
    background:#FFF;
  }
  @media (min-width: ${size.laptop}) {
    padding-bottom:115px !important;
  }
  > ${TwoColumnPageWrapper} {
    @media (max-width: ${size.mobileM}) {
      padding: 1.0em 0 0 0;
    }
    @media (min-width: ${size.tablet}) {
      padding: 1.0em 0 0 0;
    }
    @media (min-width: ${size.laptop}) {
    padding: 1.5em 0 0 0;
    }
  }
  > div > p > a {
    transition: all 0.2s ease-in-out;
    border-bottom: solid thin;
    font-size: 1em;
    border-color:${Color.red};
    :hover {
      color:${Color.red} 
    }
  }
  > div > ul {
    list-style:none;
    margin: 1em 6em 1em 1em;
    padding: 0;
  }
  > div > ul > li {
    margin-bottom: 1em;
    list-style-type: none;
    text-indent: -10px;
    line-height: 1.4;
    padding-left: 25px;
    :before {
      content: "–";
      display: inline-block;
      width: 10px;
    }
    @media (max-width: ${size.tabletL}) {
      font-size: 0.95em;
    }
    @media (min-width: ${size.laptop}) {
      font-size: 1em;
    }
    @media (min-width: ${size.laptopM}) {
      font-size: 1.1em;
    }
    @media (min-width: ${size.laptopL}) {
      font-size: 1.2em;
    }
  }
  @media (min-width: ${size.laptop}) {
      padding: 2.5em 1em 2em;
    }
  @media (min-width: ${size.laptopM}) {
    }
    @media (min-width: ${size.laptopL}) {
      padding: 3em 1.1em 2em;
    }
`
export const PageWrapperRes = styled.div`
  padding: 2.0em 1em 2em;
  background: ${props => props.colour !== 0 ? props.colour : 'inherit'};
  @media (max-width: ${size.mobileL}) {
    padding: 0.5em;
  }
  @media (min-width: ${size.tablet}) {
    padding: 0.5em 0.7em;
  }
  @media (min-width: ${size.laptop}) {
    padding: 2.0em 1em 2em;
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
  @media (max-width: ${size.tabletL}) {
    padding: 1em 0.2em;
  }
  @media (min-width: ${size.laptopM}) {
  padding-top: 2.4em;
  }
  ${changeGridToOneRow}
`

export const PressWrapper = styled.div`
  padding: 2.5em 1em 2em;
  display: grid !important;
  grid-template-columns: 3fr 6fr;
  @media (max-width: ${size.tabletL}) {
    padding: 1em 0.7em;
    grid-template-columns: 1fr;
  }
  @media (min-width: ${size.tablet}) {
    padding-bottom: 4rem;
  }
  @media (max-width: ${size.mobileM}) {
    border-top:none;
    background:#FFF;
  }
  @media (min-width: ${size.laptop}) {
    grid-template-columns: 2.95fr 7.15fr;
    border-top:solid 1px #000;
    grid-column-gap: 2em;
    padding-bottom: 1em;
  }
  @media (min-width: ${size.laptopM}) {
  padding-top: 3em;
  }
  > div:first-child > div {
    > p {
      line-height: 1.3;
    }
  }
  div > p {
  margin-bottom: 0.5em;
  @media (min-width: ${size.laptopL}) {
    margin-bottom: 0.7em;
  }
  }
  > div:nth-child(2) > div > p {
  margin-bottom: 1em !important;
  }
  div > div {
  margin-bottom: 0.2em;
  > p > a {
    font-size: 1em;
    border-bottom: solid thin;
    border-color: ${Color.red};
    transition: all 0.2s ease-in-out;
    :hover {
      color: ${Color.red};
    }

  }
  > p:first-child {
    @media (max-width: ${size.tabletL}) {
      margin-bottom: 0;
    }
    @media (min-width: ${size.laptop}) {
      margin-bottom: 0;
    }
  }
  }
  ul {
    list-style:none;
    font-size: 1.1em;
    @media (max-width: ${size.tabletL}) {
      font-size: 0.95em;
      line-height: 1.3;
      margin-bottom:0em;
    }
    @media (min-width: ${size.laptop}) {
      font-size: 1.0em;
      line-height: 1.3;
    }
    @media (min-width: ${size.laptopM}) {
      font-size: 1.1em;
    }
    @media (min-width: ${size.laptopL}) {
      font-size: 1.2em;
      line-height: 1.35;
    }
    margin:0.5rem 0;
    padding:0;
    li {
      list-style-type:none;
      font-size: 1.0em;
      > a {
        transition: all 0.2s ease-in-out;
        @media (min-width: ${size.laptop}) {
        font-size: 1.0em;
       }
       @media (min-width: ${size.laptopM}) {
        font-size: 1.0em;
       }
       @media (min-width: ${size.laptopL}) {
        font-size: 1.0em;
       }
       :hover {
        color: ${Color.red};
       }
      }
    }
  }
  ${changeGridToOneRow};
  @media (min-width: ${size.laptop}) {
    padding-bottom:115px;
    border-top: none;
  }
`

export const ResourceImageWrapper = styled.div`
  padding: 0em;
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
  @media (max-width: ${size.tabletL}) {
    grid-template-columns: 1fr 3fr;
    column-gap: 0.7em;
  }
  @media (min-width: ${size.laptopM}) {
    grid-template-columns: 3fr 10fr;
  }
`
export const PressReleaseText = styled.span`
  margin-right: 0em;
  /* font-size: 1.1em; */
  @media (max-width: ${size.tabletL}) {
    font-size: 0.95em;
  }

`

export const PressReleaseParagraphBlock = styled.div`
  margin: 0;
  padding: 0;
  p {
    margin: 0;
    margin-bottom: 0.2em !important;
    padding: inherit;
    @media (min-width: ${size.laptop}) {
    font-size: 1em;
    }
    
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
  > img {
    margin-bottom: 0;
  }
  @media (max-width: ${size.tabletL}) {
    width: 11px;
  }
  @media (min-width: ${size.laptopL}) {
    width: 17px;
    padding-top: 0.3em;
  }
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
  @media (max-width: ${size.tabletL}) {
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
  @media (max-width: ${size.mobileL}) {
    border-top: solid 0px #000;
  }
  @media (max-width: ${size.tabletL}) {
    display:block;
    position:sticky;
    top:0;
    background:#FFF;
    z-index:3;
    padding:0.3em 0.4em;
    border-bottom:solid 1px #000;
    width:100%;
  }
`
export const PageSubTitle = styled.h3`
  font-size: 1em;
  margin: 1em 0 0.5em;
  :first-child {
    margin-top: 0;
  }
   @media (max-width: ${size.tabletL}) {
    font-size: 0.95em;
    margin-top: 2em;
    :first-child {
    margin-top: 2em;
  }
   }
  @media (min-width: ${size.laptop}) {
    font-size: 1.1em;
    margin-top: 1.8em;
    margin-bottom: 0.7em;
   }
  @media (min-width: ${size.laptopL}) {
font-size: 1.2em;
margin-top: 1.5em;
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
  line-height: 1.4;
  transition: all 0.2s ease-in-out;
  border-bottom: solid thin;
  border-color: ${Color.red};
  /* font-size: 1.15em; */
  :hover {
    color:${Color.red};
  }
`

export const TextBlock = styled.div`
  > p {
    padding: 0;
    line-height:1.4;
    margin: 0;
  }
  > p {
    @media (max-width: ${size.mobileM}) {
    line-height:1.4;
    }
    @media (min-width: ${size.mobileL}) {
      line-height:1.3;
    }
    @media (min-width: ${size.laptop}) {
      line-height:1.3;
    }
  }
  > h1,h2,h3,h4,h5,h6 {
    padding-bottom: 0.1rem;

  }
  padding: 0 0 1em 0em;
  @media (min-width: ${size.laptop}) {
    padding: 0 0 0.7em 0em;
  }
`
export const TextBlockTwoColumnPage = styled.div`
  > p {
    padding: 0;
    line-height:1.4;
    margin: 0;
  }
  :first-child {
    > p {
      margin-bottom: 1em;
    }
  }
  > p {
      @media (max-width: ${size.mobileM}) {
      line-height:1.4;
      }
      @media (min-width: ${size.mobileL}) {
        line-height:1.3;
      }
      @media (min-width: ${size.laptop}) {
        line-height:1.4;
      }
      @media (min-width: ${size.laptopM}) {
      }
      @media (min-width: ${size.laptopL}) {
        line-height:1.45;
      }
    > a {
      font-size: 1em;
      border-bottom: solid thin;
      border-color:${Color.red};
      :hover {
      color:${Color.red} 
      } 
    }
  }
  > h1,h2,h3,h4,h5,h6 {
    padding-bottom: 0.1rem;

  }
  @media (min-width: ${size.laptop}) {
    padding: 0 0 0.9em 0em;
  }
`
export const TextBlockSideBarPage = styled.div`
  > p {
    padding: 0;
    line-height:1.4;
    margin: 0;
  }
  > a {
      line-height:1.3;
    }
  > p {
    @media (max-width: ${size.mobileM}) {
    line-height:1.4;
    }
    @media (min-width: ${size.mobileL}) {
      line-height:1.3;
    }
    @media (min-width: ${size.laptop}) {
      line-height:1.3;
    }
    @media (min-width: ${size.laptopM}) {
      line-height:1.3;
    }
    @media (min-width: ${size.laptopL}) {
      line-height:1.35;
    }
  }
  > h1,h2,h3,h4,h5,h6 {
    padding-bottom: 0.1rem;

  }
  padding: 0 0 1em 0em;
  @media (min-width: ${size.laptop}) {
    padding: 0 0 0.7em 0em;
  }
  @media (min-width: ${size.laptopL}) {
    padding: 0 0 1em 0em;
  }
`
export const PaddingDiv = styled.div`
  display: block;
  @media (min-width: ${size.laptop}) {
      margin-bottom: 4em;
    }
`
