import React from 'react';

import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';

class App extends React.Component {
  state = {
    username:'sheebahashmi',
    userInfo:{},
    followers: []
  }
  
  componentDidMount(){
    axios.get(`https://api.github.com/users/sheebahashmi`)
    .then(res => {
      this.setState({
        ...this.state,
        userInfo:res.data
      })
    }) // end of response 
    .catch(err => console.log(err))
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.userInfo !== this.state.userInfo){
      axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res => {
        this.setState({
          ...this.state,
          followers: res.data
        })
      })
      .catch(err => console.log(err))
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then(res => {
      this.setState({
        ...this.state,
        userInfo:res.data
      })
    })
    .catch(err => console.log(err))  
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      username:e.target.value
    })
  }
  
  render() {
    return(
    <div>
      <h1>Github Info</h1>
      <form>
        <input type="text"  placeholder="Github Handle" onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Search</button>
      </form>
      <User userInfo={this.state.userInfo}/>
      <FollowerList followers={this.state.followers}/>
    </div>);
  }
}

export default App;
