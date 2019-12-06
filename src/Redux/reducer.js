const initialState = {
  users: [
  ],
  inputs: {
    name: '',
    surName: '',
    mail: '',
    phone: ''
  }
}

export default function rootReducer(state = initialState, action) {

  switch (action.type) {
    case 'DEL':
      const updatedUsers = state.users.filter((user, idx) => idx !== action.payload);
      localStorage.setItem('state', JSON.stringify(updatedUsers))
      return {
        users: updatedUsers
      }
    case 'ADD':
      console.log(state.users)
      const newUsers = state.users.length > 0 ? state.users.concat() : [];
      newUsers.push(state.inputs);
      localStorage.setItem('state', JSON.stringify(newUsers))
      return {
        users: newUsers,
        inputs: {
          name: '',
          surName: '',
          mail: '',
          phone: ''
        }
      }
    case 'CANCEL':
      return {
        users: state.users,
        inputs: {
          name: '',
          surName: '',
          mail: '',
          phone: ''
        }
      }
    case 'INP':
      const newInputs = Object.assign({}, state.inputs);
      newInputs[action.payload] = action.value;
      return {
        users: state.users,
        inputs: newInputs
      }
    case 'LOAD':
      const loadedUsers = action.users;
      return {
        users: loadedUsers,
        inputs: state.inputs
      }
    default:
      return state
  }
}