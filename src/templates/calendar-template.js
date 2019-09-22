import React from "react"
import UpcomingEvents from "../components/events/upcomingevents"
import Layout from "../components/layout/layout";
import {connect} from 'react-redux';
import { getCurrentLanguageString } from "../utility/helper";
import Calendar from "../components/calendar/calendar";
import ResourcesList from "../components/resources/resources-list";

const CalendarTemplate = (props) => {
  const language = getCurrentLanguageString(props.languages);
    const renderComponent = (
        <Calendar />
    )

  return (
    <Layout
      firstColumn={renderComponent}
      numberOfColumnsIsTwo={false}
      thirdColumn={<ResourcesList />}
    />
  )
}

const mapStateToProps = state => {
    return {
        languages: state.languages
    }
  }
  
  export default connect(mapStateToProps, null)(CalendarTemplate);