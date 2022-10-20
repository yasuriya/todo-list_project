import React, { useEffect } from 'react'
import TasksList from './TasksList'
import CreateTaskInput from './CreateTaskInput'
import { connect } from 'react-redux'
import * as tasksAction from '../tasks.actions'
import { tasksListSelector } from '../tasks.selectors'

const TodoList = ({
  getTasksList,
  updateTask,
  createTask,
  deleteTask,
  tasks,
}) => {
  useEffect(() => {
    getTasksList()
  }, [getTasksList])

  return (
    <>
      <h1 className="title">TODO LIST</h1>
      <main className="todo-list">
        <CreateTaskInput onCreate={createTask} />
        <TasksList tasks={tasks} onChange={updateTask} onClick={deleteTask} />
      </main>
    </>
  )
}

const mapState = (state) => ({ tasks: tasksListSelector(state) })

const mapDispatch = {
  getTasksList: tasksAction.getTasksList,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
  createTask: tasksAction.createTask,
}

export default connect(mapState, mapDispatch)(TodoList)
