import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import app from "./base.js";
import "./styles/Profile.css";

class Profile extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
            name: '',
            age:'',
            gender:'',
            weight: '',
            height:'',
            premium: 'no',
        };

        this.handleUpgrade = this.handleUpgrade.bind(this);
        this.handleDowngrade = this.handleDowngrade.bind(this);
    }

    componentDidMount(){
        var email = app.auth().currentUser.email
        console.log(email);

        app
        .firestore()
        .collection('users')
        .doc(email)
        .get()
        .then(doc => {
            if (!doc.exists) {
              console.log('No such document!');
              localStorage.setItem("userData", "none");
            } else {
              console.log('Document data:', doc.data())
              {
                  this.setState(
                      {
                            name: doc.data().name,
                            age: doc.data().age,
                            gender: doc.data().gender,
                            weight: doc.data().weight,
                            height: doc.data().height,
                            premium: doc.data().premium
                        }
                  )
              }
            }
          })
        .catch(err => {
            console.log('Error getting document', err);
        });
    }

    handleUpgrade(event) {
        if (localStorage.getItem("userData") === "none"){
            alert("Please Enter your details first!")
        }
        else{
            if (this.state.premium ===  'yes'){
                alert('You are already Premium user');
            }
            else{
                var r= window.confirm("Are you sure you want to upgrade？");
                var email = app.auth().currentUser.email
            }   

            if (r === true){
                app.firestore().collection('users').doc(email).update({premium: 'yes'})
                alert("Succefully upgrade, You are premium user now (refresh page)");
            }
                   
        
        
        event.preventDefault();

        }
    }

    handleDowngrade(event){
        var email = app.auth().currentUser.email
        
        if (this.state.premium ===  'no'){
            alert('You are already normal user');
            
        };
        
        if (this.state.premium ===  'yes'){
            var r= window.confirm("Are you sure you want to downgrade?");
            if( r === true){
                app.firestore().collection('users').doc(email).update({premium: 'no'})
                alert('Succefully downgrade, You are noraml user now (refresh page)');
            }
        }
        event.preventDefault();
    }

    render(){
        return(
        <div id="profileContainer">
            <div className="leftSide">
                <div className="formContainer">
                    <form>
                        <div className="inputContainer">
                            <h1 className="profileHeader">Your Profile </h1>
                            <input className="formInput" name="Name" type="text" placeholder="Name" disabled value={this.state.name}/> 
                            <input className="formInput" name="Age" type="text" placeholder="Age" value={this.state.age} disabled/>
                            <select className="selectInputProfile" name="gender"disabled placeholder="Gender"> 
                                    <option> {this.state.gender}</option>
                                </select>
                            <input className="formInput" name="Weight" type="text" placeholder="Weight(kg)" value={this.state.weight} disabled/>
                            <input className="formInput" name="Height" type="text" paceholder="Height (cm)" value={this.state.height} disabled/>
                            <input className="formInput" name="premium" type="text" placeholder="Premium User?" value={this.state.premium} disabled/> 
                        </div>
                        
                        <div className="editButtonContainer">
                                <Link to="Edit.js">
                                    <button className="EditButton" type="submit" >Edit</button>
                                </Link>
                        </div>
                    </form>
                </div>
                
            </div>

            <div className="rightSide">
                <div className="rightText">
                    <p>"You miss 100% of the shots you don't take"</p>
                    <div className="rightTextAuthor">
                        <p>Wayne Gretzky</p>
                    </div>
                </div>
                <div className="VIPContainer">
                    <button className="upButton" onClick={this.handleUpgrade}>Upgrade to premium</button>
                    <button className="downButton" onClick={this.handleDowngrade}>Downgrade to normal</button>
                </div>
            </div>

        </div>
        )
    }
}

export default Profile;