import React from 'react';

class Follower extends React.Component {
  render() {
    return(
    <div className="follower-card">
        <img src={this.props.follower.avatar_url}/>
        <a href= {this.props.follower.html_url} target="_blank">{this.props.follower.login}</a>
    </div>
    )
  }
}

export default Follower;