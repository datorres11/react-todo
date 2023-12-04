import TodoITem from "./TodoITem"

const TodoList=({todos, removeTodo,updateTodo})=>{
    return(
        <div className=" mt-8 rounded-t-md overflow-hidden bg-white [&>article]:p-4" >
            {todos.map((todo)=>(
            <TodoITem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
            ))}
        </div>

    )
}
export default TodoList