import styled from "styled-components"
import { size } from "../../index.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ModalWrapper = styled.div`
  padding: 1em 2em;
  z-index: 1000;
  background: white;
  position: absolute;
  margin: 10% 30%;
  border: 1px solid black;
  width: 40%;
  display: ${props => (props.show ? "inherit" : "none")};
  @media (max-width: ${size.tablet}) {
    width: 80%;
    margin: 10% 10%;
  }
`

export const FormInput = styled.input`
  font-size: 1em;
  border-radius: 0;
  border: 1px solid black;
  padding: 0.5em 0.5em;
  margin: 0 0.5em;
`

export const BackDropWrapper = styled.div`
  z-index: 900;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  display: ${props => (props.show ? "inherit" : "none")};
`

export const ModalHeader = styled.div`
  padding: 0.5em 0;
  text-align: right;
`;

export const ModalCloseIcon = styled(FontAwesomeIcon)`
  width: 0.5em;
  :hover{
    cursor: pointer;
  }
`
export const CloseImage = styled.img`
  width: 8%;
  align-self: flex-end;
  @media (max-width: ${size.tablet}) {
    width: 5%;
  }
  @media (max-width: ${size.mobileM}) {
    width: 7%;
  }
`
export const FormButton = styled.button`
  margin: 0.5em 0.25em;
  font-size: 1em;
  color: white;
  display: block;
  border-radius: 0;
  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
  background: black;
  border: 1px solid black;
  margin-top: 1em;
  padding: 0.5em 2.5em;
  /* margin-left: 0.25em; */
  @media (min-width: ${size.laptop}) {
    font-size: 1.1em;
    margin-left: 0em !important;
  }
  @media (min-width: ${size.laptopM}) {
    font-size: 1.1em;
  }
  @media (min-width: ${size.laptopL}) {
    font-size: 1.2em;
  }
`

export const FormLabel = styled.label`
  display: block;
  margin-top: 1em;
  > p {
    margin-bottom: 0.3em;
    font-size: 1em;
  }
`
