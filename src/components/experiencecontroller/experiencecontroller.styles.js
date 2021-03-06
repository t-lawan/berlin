import styled from "styled-components"
import {
  showDisplayForTabletFunc,
  size,
  Color,
} from "../../index.styles"

export const ExperienceControllerWrapper = styled.div`
  @media (min-width: ${size.laptop}) {
    margin-top: ${props => (props.left ? "6.9em" : "3.9em")};
  }
  @media (min-width: ${size.laptopM}) {
    margin-top: ${props => (props.left ? "6.9em" : "3.95em")};
  }
  @media (min-width: ${size.laptopL}) {
    margin-top: ${props => (props.left ? "6.9em" : "4.75em")};
  }
  @media (min-width: ${size.desktopS}) {
    margin-top: ${props => (props.left ? "6.9em" : "5.85em")};
  }
  @media (min-width: ${size.desktopM}) {
    margin-top: ${props => (props.left ? "6.9em" : "7.85em")};
  }
  align-items: center;
  justify-content: center;
  display: grid;
  text-align: center;
  grid-template-columns: 1fr;
  background: white;
  z-index: 5000;
`

export const ExperienceButton = styled.div`
  line-height: 1.3;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  color: black;
  opacity: ${props => (props.show ? "1" : "1")};
  @media (min-width: ${size.laptop}) {
    font-size: 1.8em;
  }
  @media (min-width: ${size.laptopM}) {
    font-size: xx-large;
  }
  /* transition-timing-function: ease-in;
  transition: 1s; */
  :hover {
    cursor: ${props => (props.hover ? "pointer" : "inherit")};
  }
  img {
    width: 65%;
    margin-bottom: 0;
  }
  :nth-child(2) {
    margin-top: -0.5em;
  }
  :last-child img {
    @media (min-width: ${size.laptop}) {
      max-width: 32px;
      /* opacity: 0.3; */
    }
    @media (min-width: ${size.laptopM}) {
      max-width: 37px;
    }
    margin-top: 0.5em;
    margin-bottom: 0;
  }
  span {
    font-size: 0.55em;
    @media (min-width: ${size.laptop}) {
      font-size: 0.6em;
    }
    @media (min-width: ${size.laptopM}) {
      font-size: 0.6em;
    }
  }
  -webkit-animation: fadeIn 1.5s ease-in-out;
  animation: fadeIn 1.5s ease-in-out;
  :last-of-type {
    margin-top: ${props =>
      props.left ? "" : props.isExperience4 ? "" : "0.4em"};
    border-top: ${props =>
      props.left ? "" : props.isExperience4 ? "" : "solid thin #000"};
  }
  /* :nth-of-type(2) {
      -webkit-animation: fadeIn 5s ease-in-out;
    animation: fadeIn 5s ease-in-out;
    } */
  /* transition: opacity 2s;
  transition-timing-function: ease-in-out */
`
export const ExperienceButtonImage = styled.img`
  :hover {
    cursor: pointer;
    color: ${Color.red};
  }
  visibility: ${props => (props.show ? "visible" : "hidden")};
`


export const ExperienceButtonTitle = styled(ExperienceButton)`
  transition: none;
  animation: none;
  -webkit-animation: none;
`

export const ExperienceControllerMobileWrapper = styled.div`
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 40px;
  background: white;
  border-bottom: 0px solid black;
  ${showDisplayForTabletFunc("grid")};
`

export const ExperienceControllerMobileButton = styled.div`
  padding: 0em;
  height: 40px;

  border-right: 1px solid black;
  border-bottom: ${props => (props.isSelected ? "none" : "solid 1px #000")};
  > p {
    opacity: ${props => (props.isSelected ? "1" : "0.4")};
  }
  :last-child {
    border-right: 0;
  }
  :hover {
    cursor: pointer;
  }
  > p {
    margin: 0;
    font-size: 1.1em;
    line-height: 40px;
    text-align: center;
    @media (min-width: ${size.mobileL}) {
      font-size: 1em;
    }
    @media (min-width: ${size.tablet}) {
      font-size: 1.1em;
    }
  }
  img {
    padding: 0;
    height: 20px;
    width: auto;
    margin-top: 0.6em;
    margin-bottom: 0;
    @media (min-width: ${size.mobileL}) {
      height: 18px;
      margin-top: 0.65em;
    }
  }
`
