import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  size,
} from "../index.styles"
import styled from "styled-components"
import { getDocument } from "../store/selector"
import { getCurrentLanguageString } from "../utility/helper"

const AudioResourceWrapper = styled.section`
  /* display: flex;
  flex-direction: row; */
  padding: 1em 0;
  @media (min-width: ${size.laptopM}) {
    padding: 0.7em 0 0.3em;
  }
  @media (min-width: ${size.laptopM}) {
    padding: 0.6em 0 0.2em;
  }
  > span {
    @media (min-width: ${size.laptopM}) {
    font-size: 1.2em;
    }
  }
`

const PlayIcon = styled.div`
  margin-right: 1em;
  transition: all .2s ease-in-out;
  background: rgba(200, 200, 200, 0);
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
    height: 40px;
    border-radius: 50%;
  :hover {
    cursor: pointer;
  }
  > div {
    content: '';
    justify-content: center;
    width: 0;
    height: 0;
    margin-left: 2px;
    border-top: 7px solid transparent;
    border-right: none;
    border-bottom: 7px solid transparent;
    border-left: 12px solid #000000 !important;
  }
  > div.active {
    content: '';
    margin-left: 0px;
    display:flex;
    justify-content:space-between;
    width:12px;
    border-top:none;
    border-left:none !important;
    height:14px;
    border-bottom:none;
  }
  > div.active:before, div.active:after {
    content: '';
    width: 4px;
    background-color:#000;
    height: 14px;
  }
  @media (max-width: ${size.mobileM}) {
    margin-right: 0.3em;
  }
`
const VolumeIcon = styled.div`
  display: flex;
    align-items: center;
    width: 24px;
    height: 24px;
    cursor: pointer;
  :hover {
    cursor: pointer;
  }
  > div {
    display: flex;
    width: 6px;
    height: 8px;
    background-color: #000;
    position: relative;
    :before {
      width: 0;
      content: '';
      position: absolute;
      height: 0;
      border-top: 8px solid transparent;
      border-right: 9px solid #000;
      border-bottom: 8px solid transparent;
      border-left: none;
      top: -4px;
    }
    :after {
    left: 9px;
    content: '';
    position: absolute;
    top: -4px;
    width: 10px;
    height: 10px;
    border: 6px double #000;
    border-width: 6px 6px 0 0;
    border-radius: 0 12px 0 0;
    transform: rotate(45deg);
    }
  }
  > div.active {
    display: flex;
    width: 6px;
    height: 8px;
    background-color: #000;
    position: relative;
    :before {
      width: 0;
      content: '';
      position: absolute;
      height: 0;
      border-top: 8px solid transparent;
      border-right: 9px solid #000;
      border-bottom: 8px solid transparent;
      border-left: none;
      top: -4px;
    }
    :after {
    left: 9px;
    content: '';
    position: absolute;
    top: -4px;
    width: 10px;
    height: 10px;
    border: 0px double #000;
    border-width: 0px 0px 0 0;
    border-radius: 0 12px 0 0;
    transform: rotate(45deg);
    }
  }
`

const AudioPlayerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.0rem;
  justify-content: space-between;
  align-items: center;
`

const TimeProgressBar = styled.progress`
  width: 55%;
  position:relative;
  background-color: rgba(0,0,0,0.4);
  &[value] {
    -webkit-appearance: none;
    appearance: none;
    background-color: rgba(0, 0, 0, 0.4);
    color: black;
    height: 0.3rem;
    border: 0;
    /* height: 5px; */
  }
  &[value]::-webkit-progress-bar {
    background-color: rgba(0, 0, 0, 0.2);
    border: 0;
    color: black;
  }

  &::-moz-progress-bar {
    background: #000;
    border: 0;
    color: black;
  }

  &::-webkit-progress-value {
    color: black;
    background-color: #000;
    ::after {
      border: 2px solid #000;
      display: flex;
    position: absolute;
    content: '';
    box-sizing: border-box;
    top: -5px;
    right: -1px;
    margin-right: -5px;
    width: 15px;
    height: 15px;
    background-color: #000;
    border-radius: 50%;
    }
  }
  @media (max-width: ${size.mobileM}) {
    width: 35%;
  }
`

const VolumeProgressBar = styled(TimeProgressBar)`
  width: 10%;
  @media (max-width: ${size.mobileM}) {
    width: 8%;
  }
`
class AudioResource extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    withCaption: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.audio_tag = React.createRef()
    this.time_progress_ref = React.createRef()
    this.volume_progress_ref = React.createRef()
    this.state = {
      isPlaying: false,
      currentTime: 0,
      length: 0,
      volume: 1,
      prevVolume: 0
    }
  }
  audio
  language
  skipPercentage = 0.02
  changeVolume = 0.1

  setAudioInfo = () => {
    let audio = this.audio_tag.current
    this.setState({
      currentTime: audio.currentTime,
      length: audio.duration,
      volume: audio.volume,
    })
  }
  initProgressBar = () => {
    let audio = this.audio_tag.current
    this.setState({
      currentTime: audio.currentTime,
      length: audio.duration,
    })

    this.reset()
  }

  play = () => {
    this.audio_tag.current.play()
    this.setState({
      isPlaying: true,
    })
  }

  pause = () => {
    this.audio_tag.current.pause()
    this.setState({
      isPlaying: false,
    })
  }

  reset = () => {
    if (this.audio_tag.current.currentTime === this.state.length) {
      this.audio_tag.current.currentTime = 0
    }
  }

  increaseVolume = () => {
    if (this.audio_tag.current.volume !== 1) {
      this.audio_tag.current.volume =
        this.audio_tag.current.volume + this.changeVolume
      this.setState({
        volume: this.audio_tag.current.volume,
      })
    }
  }

  calculateTotalValue = length => {
    let hours = Math.floor(length / 3600)
    let minutes = Math.floor(length / 60),
      seconds_int = length - minutes * 60,
      seconds_str = seconds_int.toString(),
      seconds = seconds_str.substr(0, 2)

    let time =
      hours > 0
        ? `${hours}:${this.showProperTime(
            minutes - hours * 60
          )}:${this.showProperTime(seconds)}`
        : `${this.showProperTime(minutes)}:${this.showProperTime(seconds)}`

    return time
  }

  showProperTime = value => {
    let time = value < 10 ? "0" + value : value
    return time
  }

  seekTime = event => {
    if (this.state.isPlaying) {
      let rect = this.time_progress_ref.current.getBoundingClientRect()
      const percent = (event.clientX - rect.left) / rect.width
      this.audio_tag.current.currentTime = percent * this.state.length
    }
  }

  seekVolume = event => {
      let rect = this.volume_progress_ref.current.getBoundingClientRect()
      const percent = (event.clientX - rect.left) / rect.width;
      this.audio_tag.current.volume = percent;
      this.setState({
        volume: percent
      })
  }

  toggleMute = () => {
    if(this.audio_tag.current.volume > 0) {
      let prevVolume = this.audio_tag.current.volume 
      this.audio_tag.current.volume = 0;
      this.setState({
        volume: 0,
        prevVolume: prevVolume
      })
    } else {
      this.audio_tag.current.volume = this.state.prevVolume;
      this.setState({
        volume: this.state.prevVolume
      })
    }

  }

  calculateCurrentValue = currentTime => {
    let current_hour = Math.floor(currentTime / 3600),
      current_minute = Math.floor(currentTime / 60),
      current_seconds_int = currentTime - current_minute * 60,
      current_seconds_str = current_seconds_int.toString(),
      current_seconds = current_seconds_str.substr(0, 2)

    let current_time =
      current_hour > 0
        ? `${current_hour}:${this.showProperTime(
            current_minute - current_hour * 60
          )}:${this.showProperTime(current_seconds)}`
        : `${this.showProperTime(current_minute)}:${this.showProperTime(
            current_seconds
          )}`

    return current_time
  }

  // calculateCurrentValue = currentTime => {
  //   let current_hour = parseInt(currentTime / 3600) % 24,
  //     current_minute = parseInt(currentTime / 60) % 60,
  //     current_seconds_long = currentTime % 60,
  //     current_seconds = current_seconds_long.toFixed()

  //   let current_time =
  //     current_hour > 0 ?
  //     `${this.showProperTime(current_minute)}:${this.showProperTime(current_seconds)}`
  //     : `${current_hour}:${this.showProperTime(current_minute)}:${this.showProperTime(current_seconds)}`;

  //   return current_time
  // }

  // UNSAFE_componentWillMount() {
  //   this.audio = getDocument(this.props.documents, this.props.id)
  // }

  UNSAFE_componentWillMount() {
    this.audio = getDocument(this.props.documents, this.props.id)
  }

  render() {
    this.language = getCurrentLanguageString(this.props.languages)
    return (
      <AudioResourceWrapper>
        <audio
          preload="metadata"
          ref={this.audio_tag}
          controls
          hidden={true}
          onTimeUpdate={() => this.initProgressBar()}
          onLoadedMetadata={() => this.setAudioInfo()}
        >
          <source src={this.audio.url} />
        </audio>
        <AudioPlayerWrapper>
          <PlayIcon>
            <div
            className={
                this.state.isPlaying ? 'active' : ''
            }
            onClick={() => (this.state.isPlaying ? this.pause() : this.play())}
            />
          </PlayIcon>
          <span>{this.calculateCurrentValue(this.state.currentTime)}</span>
          <TimeProgressBar
            onClick={event => {
              this.seekTime(event)
            }}
            ref={this.time_progress_ref}
            value={this.state.currentTime}
            max={this.state.length}
          />
          <span> {this.calculateTotalValue(this.state.length)}</span>
          <VolumeIcon>
            <div
            className={
                this.state.volume === 0 ? 'active' : ''
            }
            onClick={() => this.toggleMute()}
            />
          </VolumeIcon>
          
          <VolumeProgressBar
            onClick={event => {
              this.seekVolume(event)
            }}
            ref={this.volume_progress_ref}
            value={this.state.volume}
            max={1}
          />
        </AudioPlayerWrapper>
      </AudioResourceWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    languages: state.languages,
    documents: state.documents,
  }
}
export default connect(
  mapStateToProps,
  null
)(AudioResource)
