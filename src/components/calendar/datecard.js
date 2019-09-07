import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { DateManager } from "../../utility/date"
import EventCard from "./eventcard";
import { DateCardWrapper, CurrentDate, DateText, DayMonthText, MonthHeading } from "./datecard.styles";


const DateCard = props => {
  let renderComponents;
  if (props.containsEvents) {
    const monthDay = DateManager.createMonthDayString(props.day, props.month);
    const date = DateManager.createDatetring(props.day, props.month, props.year);
    // const events = props.events.sort((a,b) => {
    //   console.log('a', a);
    //   return a.start_time.charAt(0) - b.start_time.charAt(0);
    // });
    const events = props.events;
    renderComponents = (
      <DateCardWrapper id={`date-${DateManager.createDateClass(props.day, props.month, props.year)}`}>
        <CurrentDate>
          <DateText>{date}</DateText>
          <DayMonthText> {monthDay.toLocaleLowerCase()} </DayMonthText>
        </CurrentDate>
        {events.map(event => (
          <EventCard key={event.id} event={event}/>
        ))}
      </DateCardWrapper>
    )
  } else {

    renderComponents = (
      <DateCardWrapper addColour>
        <MonthHeading> {DateManager.getMonthText(props.month, props.year)}</MonthHeading>
      </DateCardWrapper>
    )
  }
  return renderComponents
}

DateCard.propTypes = {
  containsEvents: PropTypes.bool.isRequired,
  events: PropTypes.array,
  month: PropTypes.string,
  day: PropTypes.string,
  year: PropTypes.string
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}

export default connect(
  mapStateToProps,
  null
)(DateCard)
