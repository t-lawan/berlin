import React from "react"
import PropTypes from "prop-types"
import DateCard from "./datecard"
import { DateManager } from "../../utility/date"
import { connect } from "react-redux"

class MonthCards extends React.Component {
  days = Object.keys(this.props.month)
  currentDate;
  hasBeenRendered;
  

  render() {
    if(this.props.isStart) {
      this.days = this.days.filter((day) => {
        return day >= this.props.startDate.day
      })

      // if(this.props.experience === this.props.active_experience) {
      //   this.days =  this.days.filter((day) => {
      //     return day >= new Date().getDate()
      //   })
      // }
    }


    if(this.props.isEnd) {
      this.days = this.days.filter((day) => {
        return day <= this.props.endDate.day;
      })
    }
    return (
      <>
        <DateCard
          containsEvents={false}
          month={this.props.title}
          year={this.props.year}
        />
        {this.days.map(day => (
          <DateCard
            key={day}
            containsEvents={true}
            events={this.props.month[day]}
            month={this.props.title}
            day={day}
            year={this.props.year}
          />
        ))}
      </>
    )
  }
}

MonthCards.propTypes = {
  month: PropTypes.any,
  title: PropTypes.string,
  year: PropTypes.any,
  isStart: PropTypes.bool,
  isEnd: PropTypes.bool,
  startDate: PropTypes.object,
  endDate: PropTypes.object,
}


const mapStateToProps = state => {
  return {
    languages: state.languages,
    active_experience: state.active_experience,
    experience: state.experience
  }
}

export default connect(
  mapStateToProps,
  null
)(MonthCards)
