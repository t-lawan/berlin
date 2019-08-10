import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DateCard from './datecard';
import { connect } from "react-redux"

const MonthCards = props => {
  const days = Object.keys(props.month);
  return (
    <>
        <DateCard containsEvents={false} month={props.month} />
      {days.map(day => (
        <DateCard key={day} containsEvents={true} events={props.month[day]} />
      ))}
    </>
  )
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
  }
}
MonthCards.propTypes = {
  month: PropTypes.any,
}
export default MonthCards;