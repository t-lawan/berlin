import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Column from "./column"
import LanguageController from "./languagecontroller"
import Header from "./header"
import Navbar from "./navbar"

const ColumnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* flex-wrap: nowrap; */
  background-color: #fff;
  min-width: 100%;
  min-height: 100vh;
  /* align-items: stretch; */
  /* justify-content: space-evenly; */
  border: 1px solid black;
`

const languages = ["en", "de"]

const Columns = props => (
  <ColumnsWrapper>
    <Column width="5%" padding={false}>
      <LanguageController languages={languages} />
    </Column>

    <Column width="50%" padding={false}>
      <Header>
        <p> bornemannstraße 9, berlin / wedding</p>
      </Header>
      {/* <Navbar></Navbar> */}
    </Column>

    <Column width="40%" padding={true}>
      {props.children}
    </Column>
    
    <Column width="5%" padding={false}></Column>
  </ColumnsWrapper>
)

export default Columns

Columns.propTypes = {
  children: PropTypes.node.isRequired,
}
