import React from 'react'
import Task from './Task'

class TasksList extends React.Component {
  render() {
    const sortedTasks = [...this.props.tasks].sort((a, b) => a.done - b.done)
    return (
      <>
        <ul className="list">
          {sortedTasks.map((task) => {
            return (
              <Task
                key={task.id}
                {...task}
                onChange={this.props.onChange}
                onClick={this.props.onClick}
              />
            )
          })}
        </ul>
      </>
    )
  }
}

export default TasksList
