const TodoFilter =({changeFilter,filter})=>{
    return (
        <section className=" container mx-auto mt-8">
        <div className="flex justify-center rounded-md bg-white gap-4 p-4 dark:bg-gray-800 transition-all duration-1000">
          <button onClick={()=>{changeFilter("all")}} className={`${filter==="all"?"text-blue-500 hover:text-gray-500":"hover:text-blue-500 text-gray-500"}`}>All</button>
          <button onClick={()=>{changeFilter("active")}} className={`${filter==="active"?"text-blue-500 hover:text-gray-500":"hover:text-blue-500 text-gray-500"}`}>Active</button>
          <button onClick={()=>{changeFilter("completed")}} className={`${filter==="completed"?"text-blue-500 hover:text-gray-500":"hover:text-blue-500 text-gray-500"}`}>Completed</button>
        </div>
      </section>
    )
}
export default TodoFilter