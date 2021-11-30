import React from 'react';

import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';

class App extends React.Component {
  state = {
    user:'',
    userInfo:{},
    followers: []
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/sheebahashmi")
    .then(res => {
      this.setState({
        ...this.state,
        user:res.data.login,
        userInfo:res.data
      },

      () => axios.get("https://api.github.com/users/sheebahashmi/followers")
        .then(res => {
          this.setState({
            ...this.state,
            followers: res.data
          })
          // console.log("Folowers => ",res.data)
        })
        .catch(err => console.log(err))

      )
    }) // end of response 
    
    .catch(err => console.log(err))
  }
 

  render() {
    return(
    <div>
      <h1>Github Info</h1>
      <form>
        <input type="text" placeholder="Github Handle"/>
        <button>Search</button>
      </form>
      <User user={this.state.user} userInfo={this.state.userInfo}/>
      <FollowerList followers={this.state.followers}/>
    </div>);
  }
}

export default App;
