import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import styled from "styled-components"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import { changeGridToOneRow } from "../../index.styles";
const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 7fr 1fr;
  grid-column-gap: 1rem;
  color: black;
  background: white;
  padding: 1em;
  border-top: 1px solid black;
  ${changeGridToOneRow};
`
const FooterComponent = props => {
  return (
    <FooterWrapper>
      <div>
        <p> Contact</p>
      </div>
      <div>
        <p> Auguststr. 69, 10117 Berlin</p>
        <p>office@berlinbiennale.de</p>
        <p> T +49 (0)30 24 34 59 70</p>
        <p> F +49 (0)30 24 34 59 99</p>
      </div>
      <div>
        <p>
          The Berlin Biennale is funded by the Kulturstiftung des Bundes (German
          Federal Cultural Foundation) and organized by KUNST-WERKE BERLIN e. V.
        </p>
      </div>
      <div>
        <img src="https://11.berlinbiennale.de/temp/img/ksdb_logo.png" />
      </div>
    </FooterWrapper>
  )
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
