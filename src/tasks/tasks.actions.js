import * as tasksGateway from './tasksGateway'
import { tasksListSelector } from './tasks.selectors'

export const TASKSLIST_RECEIVED = 'TASKSLIST_RECEIVED'

export const tasksListReceived = (tasksList) => ({
  type: TASKSLIST_RECEIVED,
  payload: tasksList,
})

export const getTasksList = () => {
  return function (dispatch) {
    tasksGateway
      .fetchTasksList()
      .then((tasksList) => dispatch(tasksListReceived(tasksList)))
  }
}

export const updateTask = (taskId) => {
  return function (dispatch, getState) {
    const state = getState()
    const tasksList = tasksListSelector(state)

    const { done, text } = tasksList.find((task) => task.id === taskId)

    const updatedTasksList = {
      text,
      done: !done,
    }

    tasksGateway
      .updateTask(taskId, updatedTasksList)
      .then(() => dispatch(getTasksList()))
  }
}

export const deleteTask = (taskId) => {
  return function (dispatch) {
    tasksGateway.deleteTask(taskId).then(() => dispatch(getTasksList()))
  }
}

export const createTask = (text) => {
  return function (dispatch) {
    const newTask = {
      done: false,
      text,
    }

    tasksGateway.createTask(newTask).then(() => dispatch(getTasksList()))
  }
}
