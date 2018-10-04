const initialState = {
  user: null,
  countNumber: 1,
  history: []
}

export default function reducers(state = initialState, action) {
  const today = new Date();
  switch(action.type) {
    case 'ADD_NUMBER': {
      return Object.assign({}, state, {
        countNumber: state.countNumber + 1,
        history: state.history.concat(today.getHours() + "時" + today.getMinutes() + "分" + today.getSeconds() + "秒" + "に引いたにゃ")
      })
    }
    case 'REDUCE_NUMBER': {
      return Object.assign({}, state, {
        countNumber: state.countNumber - 1,
        history: state.history.concat(today.getHours() + "時" + today.getMinutes() + "分" + today.getSeconds() + "秒" + "に引いたにゃ")
      })
    }
    case 'UPDATE_USER':
      return Object.assign({}, state, {
        user: action.user
      })
    default:
      return state
  }
}
