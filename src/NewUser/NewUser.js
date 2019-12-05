import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class NewUser extends React.Component {

  submitHandler = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Add User</h2>
        <form onSubmit={this.submitHandler}>
          <input type="text" onChange={(event) => this.props.onChange('name', event)}></input>
          <input type="text" onChange={(event) => this.props.onChange('surName', event)}></input>
          <input type="text" onChange={(event) => this.props.onChange('mail', event)}></input>
          <input type="text" onChange={(event) => this.props.onChange('phone', event)}></input>
          <NavLink to='/users' onClick={this.props.onAdd}>Add</NavLink>
          <NavLink to='/users' onClick={this.props.onCancel}>Cancel</NavLink>
        </form>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onChange: (field, e) => dispatch({ type: 'INP', payload: field, value: e.target.value }),
    onAdd: () => dispatch({ type: 'ADD' }),
    onCancel: () => dispatch({ type: 'CANCEL' })
  }
}

export default connect(null, mapDispatchToProps)(NewUser)