import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import { changeGridToOneRow, size, Color, showDisplayForMobile, hideDisplayForMobile } from "../../index.styles"
import ImageResource from "../../partials/ImageResource"
import * as actionTypes from '../../store/action';
import { Link } from "gatsby";

const FooterWrapper = styled.footer`
  display: grid;
  transform: translateZ(0);
  grid-template-columns: 1fr 3.8fr 7.5fr 2fr;
  grid-column-gap: 0.5rem;
  color: black;
  background: white;
  padding: 0.7em 1em 1.5em;
  border-top: 1px solid black;
  ${changeGridToOneRow};
  @media (max-width: ${size.mobileM}) {
  padding: 1em !important;
  }
  @media (max-width: ${size.tablet}) {
    border-right: 0px solid black;
    padding: 0.7em 0.7em;
    padding-bottom: 1em;
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
  @media (min-width: ${size.laptopM}) {
    grid-template-columns: 1fr 3.8fr 7.7fr 1.8fr;
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
  /* justify-content: space-between; */
   @media (max-width: ${size.mobileM}) {
    padding-top: 0.8rem;
    margin-bottom: 0.8rem;
   }
`

const ImageWrapper = styled.div`
  @media (max-width: ${size.mobileM}) {
    margin-top: 0.3em;
    width: 40%;
    margin-bottom: 1.2em;
  }
  @media (max-width: ${size.tablet}) {
    width: 30%;
  }
`

const FooterText = styled.p`
  margin: 0;
  -webkit-font-smoothing: antialiased;
  @media (max-width: ${size.mobileM}) {
    font-size: 0.9rem
  }

  ${hideDisplayForMobile};
`

const FooterOuterLink = styled.a`
  margin: 0;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  transition: all 0.2 ease-in-out;
  display: block;
  :hover {
    cursor: pointer;
    color: ${Color.red};
  }
  @media (max-width: ${size.mobileM}) {
    font-size: 0.9rem
  }

  ${showDisplayForMobile};
`

const FooterLink = styled(Link)`
  margin: 0;
  padding-right: 1rem;
  -webkit-font-smoothing: antialiased;
  transition: all 0.2 ease-in-out;
  :hover {
    cursor: pointer;
    color: ${Color.red};
  }
  @media (max-width: ${size.mobileL}) {
    font-size: 0.9em;
  }
  @media (min-width: ${size.laptopM}) {
    padding-right: 1.5em;
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
        <FooterOuterLink target="__blank" rel="noopener noreferrer" href={`mailto:${content.email}`}>{content.email}</FooterOuterLink>
        <FooterOuterLink showInMobile itemprop="telephone" target="__blank" rel="noopener noreferrer" href={`tel:${content.tel_phone_number}`}>{content.tel_phone_number_display}</FooterOuterLink>
        <FooterText hideInMobile> {content.tel_phone_number_display}</FooterText>
        <FooterText> {content.fax_phone_number}</FooterText>
      </div>
      <DoubleDecker>
        <FooterText>{content[language].description}</FooterText>
        <BottomRow>
          <FooterLink onClick={() => props.startTransition()} to={createPath(language, 'imprint')}>{content[language].imprint}</FooterLink>
          <FooterLink onClick={() => props.startTransition()} to={createPath(language, 'data-privacy')} >{content[language].dataPrivacy}</FooterLink>
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
  tel_phone_number_display: "T +49 (0)30 24 34 59 70",
  tel_phone_number: "+493024345970",
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

const mapDispatchToProps = dispatch => {
  return {
    startTransition: () =>
      dispatch({ type: actionTypes.START_TRANSITION}),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterComponent)
