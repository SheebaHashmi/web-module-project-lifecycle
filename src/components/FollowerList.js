import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
  render() {
    return(
    <div>
       <h2>Followers:</h2>
       <div className="followers-container">
       {
           this.props.followers.map(follower => <Follower follower={follower} key ={follower.id}/>)
       }
       </div>
       
    </div>);
  }
}

export default FollowerList;