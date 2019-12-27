import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import styled from "styled-components"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import { changeGridToOneRow, size } from "../../index.styles";
import ImageResource from "../../partials/ImageResource";
const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: 1fr 4fr 7fr 2fr;
  grid-column-gap: 1rem;
  color: black;
  background: white;
  padding: 1em;
  border-top: 1px solid black;
  border-right: 1px solid black;
  ${changeGridToOneRow};
`

const ImageWrapper = styled.div`
    @media (max-width: ${size.tablet}) {
    width: 30%;
  }
`

const FooterText = styled.p`
  /* font-size: 1rem; */
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
      <div>
        <FooterText>
        {content[language].description}
        </FooterText>
      </div>
      <ImageWrapper>
        <ImageResource id={431} withCaption={false} />
      </ImageWrapper>
    </FooterWrapper>
  )
}

const content = {
  address_line: 'Auguststr. 69, 10117 Berlin',
  email: 'office@berlinbiennale.de',
  tel_phone_number: 'T +49 (0)30 24 34 59 70',
  fax_phone_number: 'F +49 (0)30 24 34 59 99',
  EN: {
    title: 'Contact',
    description: `The Berlin Biennale is funded by the Kulturstiftung des Bundes (German Federal Cultural Foundation) and organized by KUNST-WERKE BERLIN e. V.`
  },
  DE: {
    title: 'Kontakt',
    description: `Die Berlin Biennale wird gefördert durch die Kulturstiftung des Bundes und organisiert vom KUNST-WERKE BERLIN e. V.`
  }
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
