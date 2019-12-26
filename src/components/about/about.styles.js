import styled from "styled-components";
import { Color, size } from "../../index.styles";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ImageResource from "../../partials/ImageResource";
export const AboutSideNavbar = styled.nav`
  padding: 0.25em 1em;
  display: flex;
  flex-direction: column;
  line-height: 1em;
  @media (max-width: ${size.tablet}) {
    flex-direction: row;
    padding: 0;
    width:100%;
  }
`

export const AboutNavItem = styled.p`
  color: ${props => (props.current ? Color.red : "inherit")};
  padding: 0em 0.5em;
  :hover {
      cursor: pointer;
  }
  @media (max-width: ${size.tablet}) {
  padding: 0.5em 0.5em;
  }
`

export const AboutNavItemLink = styled(AniLink)`
    text-decoration: none;
`

export const AboutPageContent = styled.div`
    p{
        padding-bottom: 1em;
    }
    a {
        text-decoration-color: ${Color.red}
    }
`
export const AboutComponentWrapper = styled.section``

export const AboutFundingHeader = styled.p`
    text-decoration: underline;
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