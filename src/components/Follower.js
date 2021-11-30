import React from 'react';

class Follower extends React.Component {
  render() {
    return(
    <div>
        <img src={this.props.follower.avatar_url}/>
        <h3>{this.props.follower.login}</h3>
    </div>
    )
  }
}

export default Follower;