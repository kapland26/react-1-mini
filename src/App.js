import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      friends: [],
      picture:"",
      name: ""
    }
  }

  updatePicture(e){
    this.setState({
      picture: e.target.value
     });
  }
  
  updateName(e){
    this.setState({
      name: e.target.value
    });
  }

  addFriend(){
    let friend = {
      name: this.state.name,
      picture:this.state.picture
    }
    let newFriend=this.state.friends.slice();
    newFriend.push(friend);
    this.setState({
      friends: newFriend,
      name: "",
      picture: ""
    })
  }

  render() {
    let friendsArr = this.state.friends.map((e, i)=> {
      return (
        // <div key={i}>
        <div key={1}>
          <p>{e.name} </p>
        <img src={e.picture} alt= "Profile" />
        </div>
      )
    })
    return (
      <div className="App">
        <p>Picture: </p>
        <input 
          type="text"
          value={this.state.picture}
          onChange={(x)=>{this.updatePicture(x)}}
        />
        <p>Name:</p>
        <input 
          type="text"
          value={this.state.name}
          onChange={(x)=>{this.updateName(x)}}
        />
        <button onClick={()=>this.addFriend()}>
        Add Friend</button>
        {friendsArr}
      </div>
    );
  }
}

export default App;
