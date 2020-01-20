import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import styled from "styled-components"
import { getCurrentLanguageString, createPath, transitionBackground } from "../../utility/helper"
import { changeGridToOneRow, size } from "../../index.styles"
import ImageResource from "../../partials/ImageResource"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: 1fr 3.8fr 7.5fr 2fr;
  grid-column-gap: 0.5rem;
  color: black;
  background: white;
  padding: 0.7em 1em;
  border-top: 1px solid black;
  border-right: 1px solid black;
  ${changeGridToOneRow};
  @media (max-width: ${size.tablet}) {
    border-right: 0px solid black;
    padding: 0.7em 0.7em;
    padding-bottom: 20px;
    > div:nth-child(3) {
      margin-top: 0.8rem;
    }
    > div:first-child {
      margin-bottom: 0.7rem;
    }
  }
  @media (min-width: ${size.mobileL}) {
    grid-template-columns: 1.2fr 3.8fr 5.5fr 2fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: ${size.laptop}) {
    grid-template-columns: 1fr 3.8fr 7.5fr 2fr;
    grid-column-gap: 0.5rem;
  }
`

const DoubleDecker = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${size.mobileL}) {
    margin-top:0 !important;
  }
`

const BottomRow = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  @media (max-width: ${size.tablet}) {
    display:none;
  }
  /* justify-content: space-between; */
`

const ImageWrapper = styled.div`
  @media (max-width: ${size.tablet}) {
    width: 30%;
  }
`

const FooterText = styled.p`
  /* font-size: 1rem; */
  margin: 0;
  @media (max-width: ${size.mobileM}) {
    font-size: 0.9rem;
  }
  @media (min-width: ${size.mobileL}) {
    font-size: 0.80rem;
  }
  @media (min-width: ${size.tablet}) {
    font-size: 0.95em;
  }
  @media (min-width: ${size.laptop}) {
    font-size: 1rem;
  }
`

const FooterLink = styled(AniLink)`
  margin: 0;
  padding-right: 1rem;
  @media (max-width: ${size.mobileM}) {
    font-size: 0.9rem;
  }
`
const FooterComponent = props => {
  const language = getCurrentLanguageString(props.languages)

  return (
    <FooterWrapper>
      <div>
        <FooterText> {content[language].title}</FooterText>
      </div>
      <div>
        <FooterText> {content.address_line}</FooterText>
        <FooterText>{content.email}</FooterText>
        <FooterText> {content.tel_phone_number}</FooterText>
        <FooterText> {content.fax_phone_number}</FooterText>
      </div>
      <DoubleDecker>
        <FooterText>{content[language].description}</FooterText>
        <BottomRow>
          <FooterLink cover direction="down" bg={transitionBackground} to={createPath(language, 'imprint')}>{content[language].imprint}</FooterLink>
          <FooterLink cover direction="down" bg={transitionBackground} to={createPath(language, 'data-privacy')} >{content[language].dataPrivacy}</FooterLink>
        </BottomRow>
      </DoubleDecker>
      <ImageWrapper>
        <ImageResource id={431} withCaption={false} />
      </ImageWrapper>
    </FooterWrapper>
  )
}

const content = {
  address_line: "Auguststr. 69, 10117 Berlin",
  email: "office@berlinbiennale.de",
  tel_phone_number: "T +49 (0)30 24 34 59 70",
  fax_phone_number: "F +49 (0)30 24 34 59 99",
  EN: {
    title: "contact",
    description: `The Berlin Biennale is funded by the Kulturstiftung des Bundes (German Federal Cultural Foundation) and organized by KUNST-WERKE BERLIN e. V.`,
    imprint: 'imprint',
    dataPrivacy: "data privacy"
  },
  DE: {
    title: "kontakt",
    description: `Die Berlin Biennale wird gefördert durch die Kulturstiftung des Bundes und organisiert vom KUNST-WERKE BERLIN e. V.`,
    imprint: 'impressum',
    dataPrivacy: "datenschutz"
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    agreed_to_terms: state.agreed_to_terms,
  }
}

export default connect(
  mapStateToProps,
  null
)(FooterComponent)
