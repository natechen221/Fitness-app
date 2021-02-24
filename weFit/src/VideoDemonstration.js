import React, { Component } from 'react';
import "./styles/VideoDemonstration.css";
import shoulder from "./VidDemoImgs/shoulderpress-play.png";
import bench from "./VidDemoImgs/benchpress-play.png";
import squat from "./VidDemoImgs/high-bar-squat-play.png";
import lift from "./VidDemoImgs/deadlift1-play.png";
import row from "./VidDemoImgs/one-arm-row-play.png";
import pull from "./VidDemoImgs/pull-up-play.png";
import Video from './Video.js'

const imgs = [shoulder, bench, squat, lift, row, pull];
const links = ["tzZMsrzG_zE", "RsobeWfbBcY", "tVB1q8zkP3o", "a5zhnubunoE", "PgpQ4-jHiq4", "WXMKjV11lAk"];

class VideoDemonstration extends Component{
  constructor(props){
    super(props);

    this.state = ({
      vid : links[0],
      pos : 0
    })

    this.handleImgs = this.handleImgs.bind(this);
  }


  handleImgs(pos, name){
    this.setState({
      vid: links[pos],
      pos: pos
    })
  }

  render(){
    return(
      <div className = "videoContainer">
        <h1 className = "title"> Video Demonstration</h1>
        <div className = "left-exercise">
          <table className = "exercises-table">
            <thead>
              <tr>
                <th scope = "col" className = "exercises">Exercise List</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <button className = "exerciseButton" onClick = {e => this.handleImgs(0, "btn shoulder")}>Shoulder Press</button>
                </td>
              </tr>

              <tr>
                <td>
                  <button className = "exerciseButton"  onClick = {e => this.handleImgs(1, "btn bench")}>Bench Press</button>
                </td>
              </tr>

              <tr>
                <td>
                  <button className = "exerciseButton"  onClick = {e => this.handleImgs(2, "btn squat")}>High Bar Squat</button>
                </td>
              </tr>

              <tr>
                <td>
                  <button className = "exerciseButton" onClick = {e => this.handleImgs(3, "btn lift")}>Deadlifts</button>
                </td>
              </tr>

              <tr>
                <td>
                  <button className = "exerciseButton"  onClick = {e => this.handleImgs(4, "btn row")}>One Arm Row</button>
                </td>
              </tr>

              <tr>
                <td>
                  <button className = "exerciseButton"  onClick = {e => this.handleImgs(5, "btn pull")}>Pull Ups</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className = "right">
          <a href = {this.state.vid} target = "_blank">
           <Video 
           link={this.state.vid}
           />
          </a>
        </div>
      
      </div>

    )
  }


}


export default VideoDemonstration;
