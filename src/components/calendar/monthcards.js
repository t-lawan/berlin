import React from "react";
import PropTypes from "prop-types";
import DateCard from './datecard';

const MonthCards = props => {
  const days = Object.keys(props.month);
  return (
    <>
        <DateCard containsEvents={false} month={props.title} />
      {days.map(day => (
        <DateCard key={day} containsEvents={true} events={props.month[day]} month={props.title} day={day} />
      ))}
    </>
  )
}

MonthCards.propTypes = {
  month: PropTypes.any,
  title: PropTypes.string
}
export default MonthCards;