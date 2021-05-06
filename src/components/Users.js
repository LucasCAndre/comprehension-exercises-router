// arquivo Users.js
import React from 'react';

class Users extends React.Component {

  render() {
    return (
  <div>
    <h2> Users </h2>
    <p> { this.props.greetingMessage }, this is my awesome Users component { this.props.match.params.id } </p>
  </div>
    )
  }
}

export default Users;
