import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Column from "./column"
import LanguageController from "../languagecontroller/languagecontroller"
import Header from "../header/header"
import Navbar from "../navbar/navbar"
import Jumbotron from "../jumbotron/jumbotron"
import UpcomingEvents from "../events/upcomingevents"
import ExperienceController from "../experiencecontroller/experiencecontroller";
import { ColumnsWrapper } from "./columns.styles";

const Columns = props => (
  <ColumnsWrapper>
    <Column rightBorder={true}>
    </Column>
    <Column rightBorder={true}>
      <Header />
      <Navbar />
      {props.children}
    </Column>

    <Column rightBorder={true}>
      <Jumbotron/>
      <UpcomingEvents />
    </Column>

    <Column rightBorder={false}>
      <LanguageController/>
      <ExperienceController/> 
    </Column>
  </ColumnsWrapper>
)

export default Columns

Columns.propTypes = {
  children: PropTypes.node.isRequired,
}
