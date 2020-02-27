import styled from "styled-components";
import { Color, size } from "../../index.styles";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ImageResource from "../../partials/ImageResource";
export const AboutSideNavbar = styled.nav`
  padding: 0em 1em 0 0;
  display: flex;
  flex-direction: column;
  line-height: 1;
  @media (max-width: ${size.tablet}) {
    display:none;
  }
  @media (max-width: ${size.mobileM}) {
    display:none
  }
`

export const AboutNavItem = styled.p`
  color: ${props => (props.current ? Color.red : "inherit")};
  padding: 0em;
  margin:0 0 0.5em;
  line-height: 1.2;
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
    > p {
      font-size:1em;
    }
`

export const AboutPageContent = styled.div`
    p {
        margin-bottom: 1em;
        line-height:1.4;
        :first-child {
          margin-top:0em;
        }
      }
    p > a {
        border-bottom: solid 1px ${Color.red};
        font-size: 1em;
          :hover {
          color: ${Color.red};
          }
      }
    
`
export const AboutComponentWrapper = styled.section`
  p.team_title {
    margin-top: 1.5em;
    margin-bottom: 0em;
    :first-child {
      margin-top:0;
    }
  }
  > div:first-child {
    margin-top:0em;
  }
  @media (min-width: ${size.laptop}) {
  padding-bottom:115px;
  }
`

export const AboutFundingHeader = styled.p`
    text-decoration: none;
    padding-bottom: 0rem;
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
  width: 15%;
`

export const AboutPrimaryImageContainer = styled(AboutCorporateImageItem)`
  width: 40%;
`