import styled from "styled-components"

export const ModalWrapper = styled.div`
  padding: 1em 2em;
  z-index: 1000;
  background: white;
  position: fixed;
  margin: 10% 30%;
  border: 1px solid black;
  width: 40%;
  display: ${props => (props.show ? "inherit" : "none")};
`

export const FormInput = styled.input`
  font-size: 1em;
  border-radius: 0;
  border: 1px solid black;
  padding: 0.5em 0.5em;
  margin: 0 0.5em;
`

export const BackDropWrapper = styled.div`
  z-index: 700;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  display: ${props => (props.show ? "inherit" : "none")};
`

export const FormButton = styled.button`
  margin: 0.5em 0.25em;
  font-size: 1em;
  color: white;
  display: block;
  border-radius: 0;
  background: black;
  border: 1px solid black;
  margin-top: 1em;
  padding: 0.5em 2.5em;
  /* margin-left: 0.25em; */
`

export const FormLabel = styled.label`
  display: block;
  margin-top: 1em;
`
