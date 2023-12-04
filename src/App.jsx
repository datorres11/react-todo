import TodoCreate from "./components/TodoCreate"
import Header from "./components/Header"
import TodoList from "./components/TodoList"
import TodoFilter from "./components/TodoFilter"
import TodoComputed from "./components/TodoComputed"
import { useEffect, useState } from "react"
import { DragDropContext} from "@hello-pangea/dnd"


/*const initalStateTodos=[
  {id:1, title:"open your eyes", completed:false},
  {id:2, title:"C0omplete reactjs", completed:true},
  {id:3, title:"go to de gym", completed:true},
  {id:4, title:"complete app on frontend mentor", completed:false}
]*/
const initalStateTodos = JSON.parse(localStorage.getItem("todos")) || []

const App =()=>{
  const [todos,setTodos]=useState(initalStateTodos)

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  const createTodo =(title)=>{
    const newTodo={
      id: Date.now(),
      title:title.trim(),
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const removeTodo=(id)=>{
    const newArray= todos.filter(todo=>{todo.id !== id})
    setTodos(newArray)
  }

  const updateTodo=(id)=>{
    setTodos(todos.map((todo)=>(
      todo.id===id?{...todo, completed:!todo.completed}:todo
    )))
  }

  const computedItemsLeft=todos.filter(todo=>!todo.completed).length

  const clearCompleted=()=>{
    setTodos(todos.filter(todo=>!todo.completed))
  }

  const [title,setTitle]=useState("all")

  /*const filterTodos=todos.filter((todo)=>{
    if(filter==="all"){
      return true
    }else if(filter==="active"){
      return !todo.completed
    }else if(filter==="completed"){
      return todo.completed
    }
  })*/

  const [filter,setFilter]=useState("")

  const filterTodos=()=>{
    switch(filter){
      case 'all':
        return todos
      case 'active':
        return todos.filter((todo)=>!todo.completed)
      case 'completed':
        return todos.filter((todo)=>todo.completed)
      default:
        return todos
    }
  }

  const changeFilter=(filter)=>setFilter(filter)

  const handleDragEnd=(result)=>{
    if(!result.destination)return
    const starIndex = result.source.index
    const endIndex = result.destination.index

    const  copyArray=[...todos]
    const [reorderItem]= copyArray.splice(starIndex, 1)

    copyArray.splice(endIndex,0,reorderItem)
    setTodos(copyArray)
  }

  return(
    
  <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] transition-all duration-1000 bg-no-repeat bg-contain bg-gray-300 min-h-scree
  dark:bg-gray-800 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
   
    <Header/>
    <main className="container mx-auto px-4  mt-8 md:max-w-xl">
      {/*Todo create*/}
    <TodoCreate createTodo={createTodo} />
    {/*Todo itemList todo update todo delete*/}
    <DragDropContext onDragEnd={handleDragEnd}>
    <TodoList todos={filterTodos()} removeTodo={removeTodo} updateTodo={updateTodo} /> 
    </DragDropContext>
    {/*Todo Computed*/}
    <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted}/>
    {/*Todo Filter*/}
    <TodoFilter changeFilter={changeFilter} filter={filter}/>
    <footer className="mt-8 text-center dark:text-gray-300 transition-all duration-1000">
    Drag and Drop
    </footer>
    </main>
   
  </div>)
  
}
export default App