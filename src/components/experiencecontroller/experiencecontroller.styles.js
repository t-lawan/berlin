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

  :hover {
    cursor: ${props => (props.hover ? "pointer" : "inherit")};
  }
  font-weight: ${props => (props.bold ? "bold" : "normal")};
`
