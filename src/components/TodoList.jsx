import TodoITem from "./TodoITem"
import { Draggable,Droppable } from "@hello-pangea/dnd"

const TodoList=({todos, removeTodo,updateTodo})=>{
    return(
        <Droppable droppableId="todos">
            {
      (droppableProvider)=>(
        <div ref={droppableProvider.innerRef}{...droppableProvider.droppableProps} className=" mt-8 rounded-t-md overflow-hidden bg-white [&>article]:p-4" >
            {todos.map((todo,index)=>(
                <Draggable index={index} draggableId={`${todo.id}`} key={todo.id}>
                    {
                (draggableProvider)=>(
                    <TodoITem draggableProvider={draggableProvider} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
                )
                }
            </Draggable>
            ))}
            {droppableProvider.placeholder}
        </div>
      )}
        </Droppable>
    )
}
export default TodoList