import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getCurrentLanguageString } from "../../utility/helper"
import * as actionTypes from "../../store/action"
import {
  BackDropWrapper,
  ModalWrapper,
  FormInput,
  FormButton,
  FormLabel,
} from "./modal.styles"

const Modal = props => {
  const formData = {
    email: "",
    berlin_biennalle: false,
    kw_institute: false,
  }
  const language = getCurrentLanguageString(props.languages)
  const handleSubmit = (event) => {
    event.preventDefault();
    props.hideModal();
  }
  return (
    <>
      <BackDropWrapper show={props.show} onClick={props.hideModal}></BackDropWrapper>
      <ModalWrapper show={props.show}>
        <p>
          {modalText[language].description}
        </p>
        <form onSubmit={handleSubmit}>
          <p>
            {modalText[language].checkbox_description}
          </p>

          <FormLabel>
            <FormInput type="checkbox" name="email" value={formData.berlin_biennalle} />
            {modalText[language].berlin_biennalle}
          </FormLabel>

          <FormLabel>
            <FormInput type="checkbox" name="email" value={formData.kw_institute} />
            {modalText[language].kw_institute}
          </FormLabel>

          <FormLabel>
            Email:
            <FormInput type="email" name="email" />
          </FormLabel>
            
          <FormButton> {modalText[language].button} </FormButton>
        </form>
      </ModalWrapper>
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
}

const modalText = {
    EN: {
        description: "Sign up for our newsletters. You can change the settings or unsubscribe at any time.",
        checkbox_description: "I would like to receive the following newsletters (select at least one):",
        agree_checkbox: "Ich habe die Datenschutzbestimmungen gelesen und erkenne diese ausdrücklich an",
        button: "Submit",
        berlin_biennalle: "Berlin Biennale for Contemporary Art",
        kw_institute: "KW Institute for Contemporary Art"
    },
    DE: {
        description: "Melden Sie sich jetzt für unsere Newsletter an. Sie können die Auswahl jederzeit ändern oder abbestellen.",
        checkbox_description: "Ich würde gerne folgende Newsletter erhalten (bitte wählen Sie mindestens eine Option aus):",
        agree_checkbox: "Ich habe die Datenschutzbestimmungen gelesen und erkenne diese ausdrücklich an",
        button: "Anmeldung",
        berlin_biennalle: "Berlin Biennale für zeitgenössische Kunst",
        kw_institute: "KW Institute for Contemporary Art"
    }
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch({ type: actionTypes.HIDE_MODAL }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
