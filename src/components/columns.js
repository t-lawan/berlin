import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Column from "./column"
import LanguageController from "./languagecontroller"
import Header from "./header";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import UpcomingEvents from "./upcomingevents";

const ColumnsWrapper = styled.div`
  /* display: flex;
  flex-direction: row; */
  /* flex-wrap: nowrap; */
  background-color: #fff;
  /* min-width: 100%;
  min-height: 100vh; */
  /* align-items: stretch; */
  /* justify-content: space-evenly; */
  /* border: 1px solid black; */
`

const languages = ["en", "de"]

const Columns = props => (
  <ColumnsWrapper className="row">
    <Column className="col-1" rightBorder={true}>
      <LanguageController languages={languages} />
    </Column>

    <Column className="col-6" rightBorder={true}>
      <Header className="row">
        <p> bornemannstraße 9, berlin / wedding</p>
      </Header>
      <Navbar className="row"></Navbar>
      {props.children}
    </Column>

    <Column className="col-4" rightBorder={true}>
      <Jumbotron className="row"></Jumbotron>
      <UpcomingEvents></UpcomingEvents>
    </Column>
    
    <Column className="col-1" rightBorder={false}>
    </Column>
  </ColumnsWrapper>
)

export default Columns

Columns.propTypes = {
  children: PropTypes.node.isRequired,
}
