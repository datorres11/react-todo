import IconCheck from "./icons/IconCheck"
import IconCross from "./icons/IconCross"
const TodoITem=({todo, removeTodo,updateTodo,draggableProvider})=>{
    const{id,title,completed}=todo
    return(
        <article ref={draggableProvider.innerRef}{...draggableProvider.draggableProps}
        {...draggableProvider.dragHandleProps} className="flex gap-4 border-b-gray-400 border-b transition-all duration-1000 dark:bg-gray-800 ">
            <button onClick={()=>{updateTodo(id)}} className=
            {`h-5 w-5 flex-none  rounded-full border-2${completed?" grid place-items-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            :"inline-block"}`}>
                {
                    completed && <IconCheck />
                }
            </button>
            <p className={`text-gray-600 dark:text-gray-300 grow ${completed && "line-through" }`}>{title}</p>
            <button onClick={()=>{removeTodo(id)}}><IconCross/></button>
        </article>
    )
}
export default TodoITem