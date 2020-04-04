import styled from 'styled-components'

export const NoMarginText = styled.p`
    margin: 0;
`

export const MarginBottomText = styled.p`
    margin: 0 0 0.7em;
`
export const DocDesc = styled.div`
margin:0em 0 0em;
@media (max-width: ${size.mobileM}) {
    margin:1em 0 0em;
  }
> p {
  > a {
    font-size: 1em;
    border-bottom: solid thin;
    border-color: ${Color.red};
    :hover {
    cursor: pointer;
    color: ${Color.red};
    }
  }
}
`
export const DocTitle = styled.h1`
  padding-top: 0rem;
  margin-top: 0;
  padding-bottom: 0.5rem;
  font-size: 1em;
  @media (min-width: ${size.laptopM}) {
    font-size: 1.1em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.2em;
  }
  line-height: 1.4;
`
export const DocSubTitle = styled.h2`
  padding-top: 0rem;
  padding-bottom: 0.5rem;
  margin-top:-1.2em;
  margin-bottom:0.5em;
  font-size: 1em;
  @media (min-width: ${size.laptopM}) {
    font-size: 1.1em;
    margin-top:-1.6em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.2em;
  }
  line-height: 1.4;
`