import { useState, useEffect, useRef } from 'react'
import Enter from './Enter'
import MainPage from './MainPage'
import Header from './Header'
import Login from './Login'
import SignUp from './SignUp'
import LogOut from './LogOut'
// import jwtDecode from "jwt-decode"
import Cookies from 'js-cookie'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // const[tuser, setTuser] =([logUser])
  // const [user, setUser] = useState([])
  const [spaces, setSpaces] = useState([])
  // console.log(tuser.user_data[0].id)
  // useEffect(()=> {
  //   const request = async() => {
  //     let req = await fetch(`http://127.0.0.1:3000/users/${tuser.user_data[0].id}`)
  //     let res = await req.json()
  //     // console.log(res)
  //     setUser({data:[res]})
  //     console.log(user)
  //   }
  //   request()
  // }, [])
  const [user, setUser] = useState(null)
  const form = useRef()
  useEffect(()=> {
    const loadUser = async () => {
      let req = await fetch("http://127.0.0.1:3000/me", {
        headers: {'Authorization': Cookies.get('token')}
      })
      let res = await req.json()
      // console.log(res)
      if (res.user) setUser(res.user)
    }
    if (Cookies.get('token'))
    loadUser()
  }, [])

  useEffect(() => {
   const request = async() => {
      let req = await fetch('http://127.0.0.1:3000/parkings')
      let res = await req.json()
      // console.log(res)
      setSpaces(res)
      // console.log(spaces)
    }
    const connect = async()=> {
      let ws 
      ws = new WebSocket('ws://localhost:3000/cable')
      ws.onopen =() => {
        console.log('ws is on')
        ws.send(JSON.stringify({ "command": "subscribe", "identifier": `{\"channel\": \"LiveFeedChannel\"}` }))
      }
      ws.onmessage = (event) => {
          const { data } = event;
          let payload = JSON.parse(data)
          if (payload.type === "ping" || payload.type === "message") return;
          let x = JSON.parse(event.data)
          console.log("message parsing:", x)
          if (x.type === "confirm_subscription") return;
          const post = x?.message?.post
          // console.log(post)
          if (post) {
          setSpaces((prevState) => {
            return [...prevState, post]
           })
          }
        }
    }
    request()
    connect()
  }, [])
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header user={user} />
        <Routes>
          {/* <Route path={'/login'} element={<Login/>}/> */}
          <Route path={'/'} element={<Enter/>}/>
          <Route path ={'/home'} element ={<MainPage user={user} setUser={setUser} spaces={spaces}/>}/>
          <Route path={'/login'} element={<Login form={form} setUser={setUser}/>}/>
          <Route path={'/signup'} element={<SignUp/>}/>
          <Route path={'/logout'} element={<LogOut/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
