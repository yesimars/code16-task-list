import { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import SiteRoutes from "./SiteRoutes"
import { useNavigate } from "react-router-dom"


function App({features}) {
  
  const [user, setUser]=useState(null)
  const navigate=useNavigate()

  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user'))??null)//oturum açıldıysa korunması için yazılan kod
  },[])

  const handleLogin=()=>{
    const user={id:1, name:"yönetici"}
    setUser(user)
    localStorage.setItem('user',JSON.stringify(user))
    navigate('/yonetici')
  }
  const handleLogOut=()=>{
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <>
    <NavBar handleLogOut={handleLogOut} user={user} />
    <div className='p-2' >
      <SiteRoutes features={features} handleLogin={handleLogin} user={user} />
    </div>
    </>
  )
}

export default App
