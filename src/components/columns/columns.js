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
import Logo from "../logo/logo";

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
      <Column rightBorder={true} hideInMobile>
        <ExperienceController left={true} />
      </Column>

      <Column rightBorder={true}>
        <StickyHeader>
          <Jumbotron showInMobile/>
          <Header hideInMobile/>
          <Navbar />
        </StickyHeader>

        {renderedComponents}
      </Column>
      <Column rightBorder={true} hideInMobile>
        <StickyHeader>
          <Jumbotron />
        </StickyHeader>
        <Logo />
        {props.thirdColumn}
        <SocialMedia />
      </Column>
      <Column rightBorder={false} hideInMobile>
        <LanguageController />
        <ExperienceController left={false} />
      </Column>
    </ColumnsWrapper>
  )
}

export default Columns

Columns.propTypes = {
  firstColumn: PropTypes.node.isRequired,
  secondColumn: PropTypes.node,
  thirdColumn: PropTypes.node,
  numberOfColumnsIsTwo: PropTypes.bool,
}
