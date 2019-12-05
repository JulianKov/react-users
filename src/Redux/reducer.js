const initialState = {
  users: [
    {
      name: 'Rob',
      surName: 'Zombie',
      mail: 'zombie@gmail.com',
      phone: '+375295672224'
    },
    {
      name: 'Freddie',
      surName: 'Merquiry',
      mail: 'fred911@gmail.com',
      phone: '+375445632333'
    }
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
      return {
        users: state.users.filter((user, idx) => idx !== action.payload)
      }
    case 'ADD':
      const newUsers = state.users.concat();
      newUsers.push(state.inputs)
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
    default:
      return state
  }
}