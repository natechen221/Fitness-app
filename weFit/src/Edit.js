import React, { Component } from 'react';
import {Link} from "react-router-dom";
import app from "./base.js";
import "./styles/Edit.css";

class Edit extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
         name: '',
         age:'',
         gender:'male',
         weight: '',
         height:'',
         premium: 'no'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
              console.log('No such document!');
            } else {
            //   console.log('Document data:', doc.data())
              {
                this.setState(
                    {
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

    handleChange(event) {
        const target = event.target; 
        const value = target.type === 'checkbox' ? target.checked : target.value; 
        const name = target.name; 
        console.log(name + " = " + value);
        this.setState({
          [name]: value 
        });
    }

    handleSubmit(event){
        if( this.state.name === '' ) {
            alert('Please enter name');
            return;
          }
        if( this.state.age === '' ) {
            alert('Please enter age');
            return;
        }
        if( this.state.gender === '' ) {
            alert('Please enter gender');
            return;
        }
        if( this.state.weight === '' ) {
            alert('Please enter weight');
            return;
        }
        if( this.state.height === '' ) {
            alert('Please enter height');
            return;
        }
        event.preventDefault();

        var data = {
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender,
            weight: this.state.weight,
            height: this.state.height,
            premium: this.state.premium
        };
        
        var email = app.auth().currentUser.email

        app
        .firestore()
        .collection('users')
        .doc(email)
        .set(data);
        localStorage.setItem("userData", "notNone");
        alert('Done, you can go back');
    }

    render(){
        return(
            <div id="EditContainer">
            <div className="wholeSide">
                <form className="formChange">
                    <h1 className="formHeader"> Edit Your Profile </h1>
                    <div className="inputContainer">
                        <input className="formInput" name="name" type="text" placeholder="Name" onChange={this.handleChange}/>
                        <input className="formInput" name="age" type="text"  placeholder="Age" onChange={this.handleChange}/>
                        <select className="formInput" name="gender"   placeholder="Gender" onChange={this.handleChange}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        <input className="formInput" name="weight" type="text" placeholder="Weight(kg)" onChange={this.handleChange}/>
                        <input className="formInput" name="height"  placeholder="Height(cm)"type="text" onChange={this.handleChange}/>
                        <input className="formInput" name="premium" placeholder="Premium User?"type="text" placeholder={this.state.premium} disabled/> 
                    

                    <div className="editButtonContainer">
                        <p><button className="changeButton">Clear</button></p>
                        <p><button className="changeButton" type="submit" onClick={this.handleSubmit}>Save</button></p>
                        <p><Link to="Profile.js">
                            <button className="changeButton">Go back</button>
                        </Link></p>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default Edit;