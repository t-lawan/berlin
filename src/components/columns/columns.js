import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Column from "./column"
import LanguageController from "../languagecontroller/languagecontroller"
import Header from "../header/header"
import Navbar from "../navbar/navbar"
import Jumbotron from "../jumbotron/jumbotron"
import UpcomingEvents from "../events/upcomingevents"
import ExperienceController from "../experiencecontroller/experiencecontroller"
import {
  ColumnsWrapper,
  FirstColumnWrapper,
  StickyHeader,
} from "./columns.styles"
import SocialMedia from "../socialmedia/socialmedia"

const Columns = props => {
  let renderedComponents
  const numberOfColumnsIsTwo = props.numberOfColumnsIsTwo
  if (numberOfColumnsIsTwo) {
    renderedComponents = (
      <FirstColumnWrapper twoColumns>
        <Column rightBorder={true}>{props.firstColumn} </Column>
        <Column>{props.secondColumn} </Column>
      </FirstColumnWrapper>
    )
  } else {
    renderedComponents = (
      <FirstColumnWrapper twoColumns={false}>
        <Column>{props.firstColumn} </Column>
      </FirstColumnWrapper>
    )
  }
  return (
    <ColumnsWrapper>
      <Column rightBorder={true}></Column>
      <Column rightBorder={true}>
        <StickyHeader>
          <Header />
          <Navbar />
        </StickyHeader>

        {renderedComponents}
      </Column>
      <Column rightBorder={true}>
        <StickyHeader>
          <Jumbotron />
        </StickyHeader>
        {props.thirdColumn}
        <SocialMedia />
      </Column>
      <Column rightBorder={false}>
        <LanguageController />
        <ExperienceController />
      </Column>
    </ColumnsWrapper>
  )
}

export default Columns

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  firstColumn: PropTypes.node.isRequired,
  secondColumn: PropTypes.node,
  thirdColumn: PropTypes.node,
  numberOfColumnsIsTwo: PropTypes.bool,
}
