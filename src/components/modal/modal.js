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
import axios from "axios"

class Modal extends React.Component {
  language

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      berlin_biennalle: false,
      kw_institute: false,
      hasSubmitted: false,
    }
  }

  sendPostRequest = async () => {
    const url =
      "https://api.newsletter2go.com/forms/submit/rimnoamr-wo3ma3nb-18l9?type=subscribe"
    let data = {
      recipient: {
        BB_Subscribe_Website: this.state.berlin_biennalle ? 1 : 0,
        KW_Subscribe_Website: this.state.kw_institute ? 1 : 0,
        email: this.state.email
      },
    }

    data = JSON.stringify(data);
    console.log(data);
    await axios.post(url, data).then((response) => {
      console.log('response', response);
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.sendPostRequest().then(() => {
      this.setState({
        hasSubmitted: true
      })
    })
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name
    console.log(value, name)

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
          onClick={this.props.hideModal}
        ></BackDropWrapper>
        <ModalWrapper show={this.props.show}>
          <div hidden={this.state.hasSubmitted}>
            <p>{modalText[this.language].description}</p>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <p>{modalText[this.language].checkbox_description}</p>

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
                Email:
                <FormInput
                  type="email"
                  name="email"
                  onChange={this.handleInputChange.bind(this)}
                />
              </FormLabel>

              <FormButton> {modalText[this.language].button} </FormButton>
            </form>
          </div>
          <div hidden={!this.state.hasSubmitted}>
            <p>{modalText[this.language].thank_you}</p>
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
  },
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
