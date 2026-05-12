import { useState } from 'react'

export default function App() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (!task.trim()) return

    setTodos([...todos, { text: task, completed: false }])
    setTask('')
  }

  const toggleTodo = (index) => {
    const updated = [...todos]
    updated[index].completed = !updated[index].completed
    setTodos(updated)
  }

  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index)
    setTodos(updated)
  }

  return (
    <div className="container">
      <h1>React Todo App</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleTodo(index)}>
              {todo.text}
            </span>
            <button className="delete-btn" onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
