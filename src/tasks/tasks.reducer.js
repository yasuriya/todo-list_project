import { TASKSLIST_RECEIVED } from './tasks.actions'

const initialValue = {
  tasksList: [],
}

function tasksReducer(state = initialValue, action) {
  switch (action.type) {
    case TASKSLIST_RECEIVED:
      return { ...state, tasksList: action.payload }

    default:
      return state
  }
}

export default tasksReducer
