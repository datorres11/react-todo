import { useEffect, useRef, useState } from "react"
import IconMoon from "./icons/IconMoon"
import IconSun from "./icons/IconSun"

const initialStateDarkMode = localStorage.getItem("theme")==="dark"
const Header=()=>{

const [darkMode, setDarkMode]=useState(initialStateDarkMode)

//const refHeader = useRef(null)

useEffect(()=>{
   if(darkMode){
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme","dark")
    //refHeader.current.classList.add("bg-gray-800")
   }else{
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme","light")
    //refHeader.current.classList.remove("bg-gray-800")
   }
},[darkMode])

const handkeClickToggleTheme=()=>{

}

    return( <header className="container mx-auto px-4 pt-8" /*ref={refHeader}*/>
                <div className="flex justify-between">
                <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">TODO</h1>
                <button onClick={()=>{setDarkMode(!darkMode)}}>{darkMode ?<IconSun/>:<IconMoon />}</button>
                </div>
            </header>)
}
export default Header 