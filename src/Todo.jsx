import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';



 const Todo = () => {
  const [first, setfirst] = useState("")

  const [todos, settodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos")
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  const [finist, setfinist] = useState(true)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
 

  const HeandelEdit = (id) => {
    let t = todos.filter(i => i.id === id)
    setfirst(t[0].first)
    settodos(todos.filter(item => item.id !== id))
    
  }

  const HeandelDelete = (id) => {
    console.log(`This is the ${id}`)
    settodos(todos.filter(item => item.id !== id))
    console.log(id);
  

  }

  const HeandelAdd = () => {
    const newTodo = {
      id: uuidv4(),
      first,
      isCompleted: false


    }

    console.log("New Todo:", newTodo)

    settodos([...todos, newTodo])
    setfirst("")
    

  }

  const HeandelChange = (e) => {
    setfirst(e.target.value)
  }


  const HeandelCheckbox = (id) => {
    settodos(
      todos.map(item =>
        item.id === id
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      )
    )
   

  }
  return (
    <>
      {/* Navbar */}
      <div className="nav flex bg-amber-500 justify-between items-center p-5 text-white mb-13">

        <span className="logo">
          <h1 className="cursor-pointer hover:font-bold transition duration-500 text-red-600 text-3xl">
            iTitle
          </h1>
        </span>

        <ul className="flex gap-8">
          <li className="cursor-pointer hover:font-bold transition duration-500 text-2xl">
            Home
          </li>

          <li className="cursor-pointer hover:font-bold transition duration-500 text-2xl">
            About
          </li>

          <li className="cursor-pointer hover:font-bold transition duration-500 text-2xl">
            Contact Us
          </li>
        </ul>

      </div>


      {/* Todo Container */}
      <div className="mx-auto max-w-4xl bg-violet-200 rounded-2xl px-8 py-8 min-h-screen">
        <div className="font-bold text-xl mb-4">
          Add Todo's
        </div>

        {/* Input + Add */}
        <div className="flex justify-center items-center gap-3 my-9">

          <input
            name="todo"
            type="text"
            value={first}
            onChange={HeandelChange}
            placeholder="Enter your todo..."
            className="bg-white px-7 py-2 rounded-full w-96 outline-none"
          />

          <button
            onClick={HeandelAdd}
            disabled={first.trim() === ""}
            className="bg-green-600 text-white px-5 py-2 rounded-md font-bold hover:bg-green-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Add
          </button>

        </div>
        <input
          type="checkbox"
          checked={finist}
          onChange={(e) => setfinist(e.target.checked)}
        />
        <span className="font-bold text-xl ml-2 mb-3.5">
          Show's Finished
        </span>

        {/* Your Todos */}
        <div className="font-bold text-xl mb-4">
          Your's Todos
        </div>


        {/* Todo List */}
        {todos.map((item, index) => (


          <div
            className="flex items-center justify-between bg-white hover:bg-cyan-50 transition duration-300 rounded-lg px-5 py-3 mb-3"
            key={item.id}
          >
            <input
              type="checkbox"
              checked={item.isCompleted}
              onChange={() => HeandelCheckbox(item.id)}
            />

            {/* Todo Text */}
            <span className={item.isCompleted ? "line-through text-gray-500" : ""}>
              {item.first}
            </span>


            {/* Buttons */}
            <div className="buttons py-4">

              <button
                onClick={() => HeandelEdit(item.id)}
                className="bg-green-600 text-white px-3 py-1 rounded-md text-sm font-bold"
              >
                Edit
              </button>

              <button
                onClick={() => HeandelDelete(item.id)}
                className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold mx-1.5 hover:bg-red-700 transition duration-300"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>
    </>
  )
}

export default Todo