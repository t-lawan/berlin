import React from "react"
import { connect } from "react-redux"
import {
  PressFormError,
  PressFormWrapper,
  PressFormInput,
} from "./press-form.styles"
import { FormButton, FormLabel } from "../modal/modal.styles"
import { getCurrentLanguageString, createPath } from "../../utility/helper"
import validator from "validator"
import { navigate } from 'gatsby';

class PressForm extends React.Component {
  language

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      name: "",
      media_affliation: "",
      hasSubmitted: false,
      hasTouched: false,
      hasErrors: false,
      errors: {
        name: "",
        email: "",
        media_affliation: "",
      },
    }

  }

  handleSubmit = event => {
    event.preventDefault();
    // this.sendPostRequest().then(() => {
    //   this.setState({
    //     hasSubmitted: true,
    //   })
    // })
    navigate(createPath(this.language, '/press-images'))
  }

  sendPostRequest = async () => {
    const url =
      "https://11.berlinbiennale.de/wp-json/contact-form-7/v1/444"
    let data = {
      recipient: {
        email: this.state.email,
        name: this.state.name,
        media_affliation: this.state.media_affliation,
      },
    }
    data = JSON.stringify(data)
    await axios.post(url, data)
  }

  clearState = () => {
    this.setState({
      email: "",
      name: "",
      media_affliation: "",
    })
  }

  handleInputChange = event => {
    if (!this.state.hasTouched) {
      this.setState({ hasTouched: true })
    }
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name
    let errors = this.state.errors
    switch (name) {
      case "name":
        errors.name =
          !validator.isAlpha(value) || value.length < 3
            ? formText[this.language].errors.name
            : ""
        break
      case "email":
        errors.email = !validator.isEmail(value)
          ? formText[this.language].errors.email
          : ""
        break
      case "media_affliation":
        errors.media_affliation =
          !validator.isAlphanumeric(value) || value.length < 3
            ? formText[this.language].errors.media_affliation
            : ""
        break
      default:
        break
    }
    let errorList = Object.values(errors);

    errorList = errorList.filter((item) => {
        return item.length !== 0;
    });

    const hasErrors = errorList.length > 0 ? true : false;
    this.setState(
      {
        hasErrors: hasErrors,
        errors,
        [name]: value,
      }
    )
  }

  render() {
    this.language = getCurrentLanguageString(this.props.languages)

    return (
      <PressFormWrapper>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <FormLabel>
            <p> {formText[this.language].name}</p>
            <PressFormInput
              type="text"
              name="name"
              onChange={this.handleInputChange.bind(this)}
              required
            />
            <PressFormError hidden={this.state.errors.name === ""}>
              {" "}
              {this.state.errors.name}{" "}
            </PressFormError>
          </FormLabel>
          <FormLabel>
            <p> {formText[this.language].email}</p>
            <PressFormInput
              type="email"
              name="email"
              onChange={this.handleInputChange.bind(this)}
              required
            />
            <PressFormError hidden={this.state.errors.email === ""}>
              {this.state.errors.email}
            </PressFormError>
          </FormLabel>
          <FormLabel>
            <p> {formText[this.language].media_affliation}</p>
            <PressFormInput
              type="text"
              name="media_affliation"
              onChange={this.handleInputChange.bind(this)}
              required
            />
            <PressFormError hidden={this.state.errors.media_affliation === ""}>
              {this.state.errors.name}
            </PressFormError>
          </FormLabel>

          <FormButton disabled={this.state.hasErrors || !this.state.hasTouched}> {formText[this.language].button} </FormButton>
        </form>
      </PressFormWrapper>
    )
  }
}

const formText = {
  EN: {
    email: "Email",
    name: "First and Last Name",
    media_affliation: "Media affliation",
    button: "Submit",
    thank_you:
      "Thank you for your subscription. We have sent you an e-mail with a confirmation link.",
      errors : {
          name: 'This field requires at least 3 characters',
          email: 'This field requires a valid email',
          media_affliation: 'This field requires at least 3 characters'
      }
  },
  DE: {
    email: "Email",
    name: "Vor- und Nachname",
    media_affliation: "Medium",
    thank_you:
      "Thank you for your subscription. We have sent you an e-mail with a confirmation link.",
    button: "Anmeldung",
    errors : {
        name: 'This field requires at least 3 characters',
        email: 'This field requires a valid email',
        media_affliation: 'This field requires at least 3 characters'
    }
  },
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(
  mapStateToProps,
  null
)(PressForm)
