import CrossIcon from "./components/CrossIcon"
import MoonIcon from "./components/MoonIcon"

const App =()=>{
  return(
    
  <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-cotain bg-gray-300 min-h-screen">
    <header className="container mx-auto px-4">
      <div className="flex justify-between">
      <h1 className="uppercase text-white pt-8 px-4 text-2xl font-semibold tracking-[0.3em]">TODO</h1>
      <button><MoonIcon className="fill-red-400"/></button>
    </div>
    <form className="bg-white overflow-hidden py-4 px-4 gap-4 rounded-md flex items-center">
      <span className="inline-block rounded-full border-2 h-5 w-5 "></span>
      <input type="text" placeholder="Create a new todo..." className="w-full text-gray-400 outline-none"/>
    </form>
    </header>
    <main className="container mx-auto px-4  mt-8 ">
      <div className="rounded-md bg-white [&>article]:p-4" >
        <article className="flex gap-4  px-4 border-b-gray-400 border-b-[1.5px]">
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600 grow">complete online javascript curse in efef</p>
            <button ><CrossIcon/></button>
          </article>
          <article className="flex gap-4 border-b-gray-400 border-b-[1.5px]">
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600">complete online javascript curse in efef</p>
            <button><CrossIcon/></button>
          </article>
          <article className="flex gap-4 border-b-gray-400 border-b-[1.5px]">
            <button className="inline-block h-5 w-5 rounded-full border-2"></button>
            <p className="text-gray-600">complete online javascript curse in efef</p>
            <button><CrossIcon/></button>
          </article>
          <section className="flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
          <section className=" container mx-auto bg-white mt-8 p-4">
            <div className="flex justify-center rounden-md bg-white gap-4">
              <button className="hover:text-blue-500">All</button>
              <button className="hover:text-blue-500">Active</button>
              <button className="hover:text-blue-500">Completed</button>
            </div>
          </section>
          <section className="text-center">Drag and Drop</section>
        </div>
    </main>
  </div>)
  
}
export default App