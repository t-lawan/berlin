import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import * as actionTypes from "../../store/action"
import {
  BackDropWrapper,
  ModalWrapper,
  FormInput,
  FormButton,
  FormLabel,
  ModalHeader,
  CloseImage,
  FormText,
} from "./modal.styles"
import axios from "axios"
import { Link } from "gatsby";

class Modal extends React.Component {
  language

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      berlin_biennalle: false,
      kw_institute: false,
      hasSubmitted: false,
      agreed: false,
    }
  }

  closeModal = () => {
    this.clearState()
    this.props.hideModal()
  }

  sendPostRequest = async () => {
    const url =
      "https://api.newsletter2go.com/forms/submit/rimnoamr-wo3ma3nb-18l9?type=subscribe"
    let data = {
      recipient: {
        BB_Subscribe_Website: this.state.berlin_biennalle ? 1 : 0,
        KW_Subscribe_Website: this.state.kw_institute ? 1 : 0,
        email: this.state.email,
      },
    }

    data = JSON.stringify(data)
    await axios.post(url, data)
  }

  handleSubmit = event => {
    if (this.state.agreed) {
      event.preventDefault()
      this.sendPostRequest().then(() => {
        this.setState({
          hasSubmitted: true,
        })
      })
    }
  }

  clearState = () => {
    this.setState({
      email: "",
      berlin_biennalle: false,
      kw_institute: false,
      hasSubmitted: false,
    })
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }
  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    return (
      <>
        <BackDropWrapper
          show={this.props.show}
          onClick={this.closeModal}
        ></BackDropWrapper>
        <ModalWrapper show={this.props.show}>
          <ModalHeader>
            <CloseImage
              onClick={this.closeModal}
              src="https://admin11.berlinbiennale.de/wp-content/themes/bb11-car-trans2/images/close_overlay.svg"
            />
          </ModalHeader>
          <div hidden={this.state.hasSubmitted}>
            <FormText>{modalText[this.language].description}</FormText>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <FormText>{modalText[this.language].checkbox_description}</FormText>

              <FormLabel>
                <FormInput
                  type="checkbox"
                  name="berlin_biennalle"
                  checked={this.state.berlin_biennalle}
                  value={this.state.berlin_biennalle}
                  onChange={this.handleInputChange.bind(this)}
                />
                {modalText[this.language].berlin_biennalle}
              </FormLabel>

              <FormLabel>
                <FormInput
                  type="checkbox"
                  name="kw_institute"
                  checked={this.state.kw_institute}
                  value={this.state.kw_institute}
                  onChange={this.handleInputChange.bind(this)}
                />
                {modalText[this.language].kw_institute}
              </FormLabel>

              <FormLabel>
                {modalText[this.language].email}
                <FormInput
                  text={true}
                  type="email"
                  name="email"
                  onChange={this.handleInputChange.bind(this)}
                />
              </FormLabel>

              <FormLabel>
                <FormInput
                  type="checkbox"
                  name="agreed"
                  checked={this.state.agreed}
                  value={this.state.agreed}
                  onChange={this.handleInputChange.bind(this)}
                  required
                />
                {modalText[this.language].agreement_one} <Link to={createPath(this.language, 'data-privacy')}> {modalText[this.language].agreement_link_word} </Link> {modalText[this.language].agreement_two}
              </FormLabel>

              <FormButton> {modalText[this.language].button} </FormButton>
            </form>
          </div>
          <div hidden={!this.state.hasSubmitted}>
            <FormText>{modalText[this.language].thank_you}</FormText>
          </div>
        </ModalWrapper>
      </>
    )
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
}

const modalText = {
  EN: {
    description:
      "Sign up for our newsletters. You can change the settings or unsubscribe at any time.",
    checkbox_description:
      "I would like to receive the following newsletters (select at least one):",
    agree_checkbox:
      "Ich habe die Datenschutzbestimmungen gelesen und erkenne diese ausdrücklich an",
    button: "Submit",
    berlin_biennalle: "Berlin Biennale for Contemporary Art",
    kw_institute: "KW Institute for Contemporary Art",
    thank_you:
      "Thank you for your subscription. We have sent you an e-mail with a confirmation link.",
    agreement:
      "Ich habe die Datenschutzbestimmungen gelesen und erkenne diese ausdrücklich an.",
    email: "E-mail",
    agreement_one: "Ich habe die",
    agreement_link_word: "Datenschutzbestimmungen",
    agreement_two: "gelesen und erkenne diese ausdrücklich an.",
  },
  DE: {
    description:
      "Melden Sie sich jetzt für unsere Newsletter an. Sie können die Auswahl jederzeit ändern oder abbestellen.",
    checkbox_description:
      "Ich würde gerne folgende Newsletter erhalten (bitte wählen Sie mindestens eine Option aus):",
    agree_checkbox:
      "Ich habe die Datenschutzbestimmungen gelesen und erkenne diese ausdrücklich an",
    button: "Anmeldung",
    berlin_biennalle: "Berlin Biennale für zeitgenössische Kunst",
    kw_institute: "KW Institute for Contemporary Art",
    thank_you:
      "Thank you for your subscription. We have sent you an e-mail with a confirmation link.",
    agreement:
      "Ich habe die Datenschutzbestimmungen gelesen und erkenne diese ausdrücklich an.",
    email: "E-Mail",
    agreement_one: "Ich habe die",
    agreement_link_word: "Datenschutzbestimmungen",
    agreement_two: "gelesen und erkenne diese ausdrücklich an.",
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    experience: state.experience,
    modal: state.modal,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    hideModal: () => dispatch({ type: actionTypes.HIDE_MODAL }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
