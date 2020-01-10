import styled from "styled-components";
import { Color, size } from "../../index.styles";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ImageResource from "../../partials/ImageResource";
export const AboutSideNavbar = styled.nav`
  padding: 0.25em 1em 0 0;
  display: flex;
  flex-direction: column;
  line-height: 1;
  @media (max-width: ${size.tablet}) {
    flex-direction: row;
    padding: 0;
    width:100%;
  }
`

export const AboutNavItem = styled.p`
  color: ${props => (props.current ? Color.red : "inherit")};
  padding: 0em;
  margin:0 0 0.5em;
  transition: all 0.2s ease-in-out;
  :hover {
      cursor: pointer;
      color: ${Color.red};
  }
  @media (max-width: ${size.tablet}) {
  padding: 0.5em 0.5em;
  }
  @media (max-width: ${size.mobileL}) {
  display:none;
  }
`

export const AboutNavItemLink = styled(AniLink)`
    text-decoration: none;
`

export const AboutPageContent = styled.div`
    p {
        margin-bottom: 1em;
        line-height:1.4;
      }
    p > a {
        border-bottom: solid 1px ${Color.red};
          :hover {
          color: ${Color.red};
          }
      }
    
`
export const AboutComponentWrapper = styled.section``

export const AboutFundingHeader = styled.p`
    text-decoration: none;
    padding-bottom: 1rem;
`

export const AboutFundingBlock = styled.article`
    padding-bottom: 1rem;
`

export const AboutImageBlock = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0;
    margin: 0;
    /* flex-direction: row; */
`

export const AboutPartnerImage = styled(ImageResource)`
    width: 30%;
    max-width: 50%;
    height: auto;
`

export const AboutTeamSectionHeader = styled.p`
    text-decoration: underline;
    padding: 0.5em 0em;
`


export const AboutCorporateImageItem = styled.section`
  /* padding: 1em; */
  width: 25%;
`