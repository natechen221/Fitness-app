import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import app from "./base";
import Profile from "./Profile"
import Edit from "./Edit"
import "./styles/Home.css"
import WorkoutTracker from "./WorkoutTracker"
import "./styles/nav.css"
import VideoDemonstration from './VideoDemonstration';
import loginPhoto from "./assets/woman.jpg";


const Homepage = () => (
  <div className="homeContainer">
      
      <div className="leftSideHome">
      <div className="content">
          <div className="textContainer">
          <h1 className="homeHeader"> WeFit </h1>
          <p className="welcomeText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor a libero vel ultricies. Donec mollis tellus id consequat ultrices. Nullam a pretium sem, a venenatis mi. Proin maximus, velit vel tincidunt aliquet, sem lacus tempor sapien, non porta risus libero at nulla. Integer scelerisque nisl non fermentum eleifend. Ut condimentum nunc a ligula 
          </p>
        </div>
        <button className="homeButton"> <Link className="homeLink" to = "WorkoutTracker.js"> Let's Begin </Link></button>
        </div>
        </div>
      <div className="rightSideHome">
        <img src={loginPhoto} alt="" className="homePhoto"/>
      </div>
      </div>
)

class Home extends Component{
  constructor(props){
    super(props);
    this.state = ({
      link: false,
      route: false
    })
  }
  componentDidMount(){
    var email = app.auth().currentUser.email

    app
    .firestore()
    .collection('users')
    .doc(email)
    .get()
    .then(doc => {
        if (!doc.exists) {
          this.setState({
            link: false,
            route: false
          })
        }
        var val = doc.get("premium");
        if(val == null){
          this.setState({
            link: false,
            route: false
          })
        }
        else{
          if(val == "no"){
            this.setState({
              link: false,
              route: false
            })
          }

          else{
            this.setState({
              link: true,
              route: true
            })
          }
        }
      })

      console.log(this.state)
  }


  render(){
    return(
      <Router>
            <div className="App">
              <div className="containerForNav">
                <nav className="navBar">
                  <ul>
                    <li><Link class="a" to="/">Home</Link></li>
                    <li><Link class="a" to="Profile.js">Profile</Link></li>
                    <li><Link class="a" to = "WorkoutTracker.js">Workout Tracker</Link></li>
                    {this.state.link ? <li><Link class="a" to = "VideoDemonstration.js">Video Demonstrations</Link></li> : null}
                    <li>
                      <button  className="signOutButton" onClick={() => app.auth().signOut()}>Sign out</button>
                    </li>
                  </ul>
                {this.state.route ? <Route path="/VideoDemonstration.js" component={VideoDemonstration}></Route> : null}
                </nav>
              </div>
              <Route path="/" exact component={Homepage}></Route>
                <Route path="/Profile.js" component={Profile}></Route>
                <Route path="/Edit.js" component={Edit}></Route>
                <Route path="/WorkoutTracker.js" component={WorkoutTracker}></Route>
          </div>
      </Router>
    )
  }
}

export default Home;
