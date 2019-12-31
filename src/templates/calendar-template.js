import React from "react"
import Layout from "../components/layout/layout";
import {connect} from 'react-redux';
import { getCurrentLanguageString } from "../utility/helper";
import Calendar from "../components/calendar/calendar";
import ResourcesList from "../components/resources/resources-list";
import NewsList from "../components/news/newslist";

const CalendarTemplate = (props) => {
  const language = getCurrentLanguageString(props.languages);
    const renderComponent = (
        <Calendar />
    )
    let thirdColumn = (
      <>
        <NewsList />
        <ResourcesList />
      </>
    )

  return (
    <Layout
      firstColumn={renderComponent}
      numberOfColumnsIsTwo={false}
      thirdColumn={thirdColumn}
    />
  )
}

const mapStateToProps = state => {
    return {
        languages: state.languages
    }
  }
  
  export default connect(mapStateToProps, null)(CalendarTemplate);