const TodoComputed=({computedItemsLeft,clearCompleted})=>{
    return(
        <section className="flex justify-between bg-white rounded-b-md px-4 py-4 dark:bg-gray-800 transition-all duration-1000">
        <span className="text-gray-400">{computedItemsLeft} items left</span>
        <button onClick={clearCompleted}className="text-gray-400">Clear Completed</button>
      </section>
    )
}
export default TodoComputed