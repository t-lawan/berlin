import styled from "styled-components"
import { Color, size } from "../../index.styles"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ImageResource from "../../partials/ImageResource"
export const AboutSideNavbar = styled.nav`
  padding: 0em 1em 0 0;
  display: flex;
  flex-direction: column;
  line-height: 1;
  @media (max-width: ${size.mobileM}) {
    flex-direction: row;
    flex-wrap: wrap;
    width: calc(100% + 1.4em);
    margin: -0.2em 0 1.3em -0.7em;
    padding: 0 0 0.2em;
    border-bottom: solid 1px #000;
  }
  @media (min-width: ${size.mobileL}) {
    flex-direction: row;
    flex-wrap: wrap;
    border-bottom: solid 1px #000;
    width: calc(100% + 1.4em);
    padding-left: 0.2em;
    margin: -0.2em 0 1.3em -0.7em;
  }
  @media (min-width: ${size.tablet}) {
    margin-top: -0.7em;
    padding-bottom: 0.25em;
  }
  @media (min-width: ${size.laptop}) {
    display: flex;
    padding-left: 0;
    padding-bottom: 0;
    flex-direction: column;
    margin: 0;
    width: 100%;
    border-bottom: none;
  }
`
export const MobileSub = styled.span`
display: none;
@media (max-width: ${size.mobileL}) {
display: inline-block;
}
`
export const DesktopSub = styled.span`
display: block;
@media (max-width: ${size.mobileL}) {
display: none;
}
`
export const AboutNavItem = styled.p`
  color: ${props => (props.current ? Color.red : "inherit")};
  padding: 0em;
  margin: 0 0 0.6em;
  line-height: 1.2;
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    color: ${Color.red};
  }
  @media (max-width: ${size.mobileM}) {
    padding: 0em 0 0 0.7em !important;
  }
  @media (max-width: ${size.tabletL}) {
    padding: 0.5em 0.5em;
  }
`
export const AboutNavItemMob = styled.p`
  color: ${props => (props.current ? Color.red : "inherit")};
  padding: 0em;
  margin: 0 0 0.6em;
  line-height: 1.2;
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    color: ${Color.red};
  }
  @media (max-width: ${size.mobileM}) {
    padding: 0em 0 0 0.7em !important;
  }
  @media (max-width: ${size.tabletL}) {
    padding: 0.5em 0.5em;
  }
`

export const AboutNavItemLink = styled(AniLink)`
  text-decoration: none;
  > p {
    font-size: 1em;
  }
  @media (min-width: ${size.tablet}) {
    > p {
      margin-bottom: 0;
    }
  }
  @media (min-width: ${size.laptop}) {
    > p {
      margin-bottom: 0.6em;
    }
  }
  @media (max-width: ${size.mobileM}) {
    font-size: 1.1em;
  }
`

export const AboutPageContent = styled.div`
  p {
    margin-bottom: 1em;
    line-height: 1.4;
    :first-child {
      margin-top: 0em;
    }
    @media (max-width: ${size.laptopL}) {
      line-height: 1.45;
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
      margin-top: 0;
    }
  }
  > div:first-child {
    margin-top: 0em;
  }
  @media (min-width: ${size.laptop}) {
  padding-bottom: 115px;
  }
  @media (min-width: ${size.laptopM}) {
  padding-bottom: 130px;
  }
`

export const AboutFundingHeader = styled.p`
  text-decoration: none;
  padding-bottom: 0rem;
`

export const AboutFundingBlock = styled.article`
  padding-bottom: 1.5em;
`

export const AboutImageBlock = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0;
  margin: 0;
  /* flex-direction: row; */
  @media (min-width: ${size.laptopM}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
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
  width: 20%;
  @media (min-width: ${size.laptop}) {
    width: 20%;
    max-width: 90px;
  }

  @media (max-width: ${size.mobileXL}) {
    width: 15%;
  }
`

export const AboutPrimaryImageContainer = styled(AboutCorporateImageItem)`
  width: 40% !important;
  max-width: 140px !important;
  @media (min-width: ${size.laptop}) {
    width: 40% !important;
    max-width: 235px !important;
  }
`
