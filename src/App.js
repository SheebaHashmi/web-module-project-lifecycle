import React from 'react';

import User from './components/User';
import FollowerList from './components/FollowerList';
import Follower from './components/Follower';

class App extends React.Component {
  render() {
    return(
    <div>
      <h1>Github Info</h1>
      <form>
        <input type="text" placeholder="Github Handle"/>
        <button>Search</button>
      </form>
      <User/>
      <FollowerList/>
      <Follower/>
    </div>);
  }
}

export default App;
