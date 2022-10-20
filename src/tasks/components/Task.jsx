import React from 'react'
import classNames from 'classnames'

const Task = ({ id, done, text, onChange, onClick }) => {
  return (
    <li className={classNames('list-item', { 'list-item_done': done })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      {text}
      <button
        className="list-item__delete-btn"
        onClick={() => onClick(id)}
      ></button>
    </li>
  )
}

export default Task
