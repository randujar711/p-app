import { useState, useEffect } from 'react'
import MainPage from './MainPage'
import Header from './Header'
import Login from './Login'
import SignUp from './SignUp'
import LogOut from './LogOut'
import jwtDecode from "jwt-decode"
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



let logUser;
if (localStorage.token) {
  const jwt = localStorage.getItem('token')
  logUser = jwtDecode(jwt)
  console.log(jwt.toString)
  console.log(jwt)
}

function App() {
  const[user, setUser] =([logUser])
  const [spaces, setSpaces] = useState([])
  const [money, setMoney] = useState(500)

  useEffect(() => {
   const request = async() => {
      let req = await fetch('http://127.0.0.1:3000/parkings')
      let res = await req.json()
      // console.log(res)
      setSpaces(res)
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
          setSpaces(prevState => {
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
        <Header user={user}/>
        <Routes>
          {/* <Route path={'/login'} element={<Login/>}/> */}
          <Route path ={'/'} element ={<MainPage user={user} spaces={spaces} money={money} setMoney={setMoney}/>}/>
          <Route path={'/login'} element={<Login/>}/>
          <Route path={'/signup'} element={<SignUp/>}/>
          <Route path={'/logout'} element={<LogOut/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
