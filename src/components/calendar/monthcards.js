import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DateCard from './datecard';
import { connect } from "react-redux"
import { DateManager } from "../../utility/date";

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