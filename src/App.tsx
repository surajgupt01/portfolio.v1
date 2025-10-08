import { useEffect, useState } from 'react'
import './App.css'
import Projects from './Projects'
import About from './About'
import Blogs from './Blogs'
import Contact from './Contact'

function App() {
  const [router, setRouter] = useState<String|null>('About')

  const [menu , setMenu] = useState(false)



  const menuList = ["About" , "Projects" , "Blogs" , "Contact me"]


  useEffect(()=>{

  

    

  },[router])

  return (
    <>
     <div className='h-screen w-full bg-black text-white flex  flex-col sm:flex-row  justify-center items-center p-2  '>
       
       {/* <button onClick={()=>{
         console.log('button clicked')
         setMenu(!menu)
       }} className='absolute top-5 left-5 z-100'>==</button> */}

      <div className={`p-4 duration-300 sm:static fixed backdrop-blur-xl top-0   z-100 sm:w-50 w-[85%] mt-5 rounded-lg sm:border-0 border-1 border-gray-400   `}>
         <ul className='sm:grid sm:grid-cols-1 flex justify-evenly  items-center text-gray-400 '>
          {
            menuList.map((item)=>(
            <li className={``} key={item}>
            <button className={`cursor-pointer ${router == item ? 'text-blue-500' : ''} `} onClick={(e:React.MouseEvent<HTMLElement>)=>{
            if(e){
              setRouter(e.currentTarget.textContent)

              setMenu(!menu)
              
              console.log(router)
            }
           }}>{item}</button>
           </li>
            ))}
           

         </ul>
      </div>



<div className={` sm:w-220 md:ml-5 h-screen   flex justify-center  items-center   ${router ? '' : ''} w-full `}>


{ router == 'About' &&  <About/>}

{router === "Projects" && <Projects/>}

{router === "Blogs" && <Blogs/>}

{router === "Contact me" && <Contact/>}


</div>





     </div>
     
    </>
  )
}

export default App
