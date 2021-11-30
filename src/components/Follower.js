import React from 'react';

class Follower extends React.Component {
  render() {
    return(
    <div className="card">
        <img src={this.props.follower.avatar_url} className="img-thumbnail"/>
        <div className="card-body">
            <h5 className="card-title">{this.props.follower.login}</h5>
        <a href= {this.props.follower.html_url} target="_blank">Profile</a>
        </div>
    </div>
    )
  }
}

export default Follower;