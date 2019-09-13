import styled from "styled-components"

export const ExperienceControllerWrapper = styled.div`
  margin-top: ${props => (props.left ? "8.9em" : "5em")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ExperienceButton = styled.h3`
  margin-bottom: 1em;
  text-decoration:none;
  color: black;
  font-size: x-large;

  /* transform: rotate(0deg); */
  transition-timing-function: ease-in;
  transition: 1s;
  :hover {
    cursor: ${props => (props.hover ? "pointer" : "inherit")};
  }
  font-weight: ${props => (props.bold ? "bold" : "normal")};
`

export const ExperienceControllerMobileWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: white;
  border: 1px solid black;
  border-right: 0;
  /* ${showDisplayForTablet}; */
`

export const ExperienceControllerMobileButton = styled.div`
  padding: 0.5em 2em;
  border-right: 1px solid black;

`