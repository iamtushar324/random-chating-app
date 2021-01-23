import React , {useState , useEffect} from 'react'
import { Socket } from 'socket.io-client'
import ChatBox from './ChatBox'
import ChatScreen from "./ChatScreen"
import socketIOClient  from "socket.io-client"
const ENDPOINT = 'https://schatapi.iamtushar324.live';
const socket = socketIOClient(ENDPOINT)
function App() {

const [MSG, setMSG] = useState([])
const [isThere , setIsThere] = useState(false)
const [findNew , setFindNew] = useState(true)

useEffect(()=>{
   socket.on('found', () =>{
    setIsThere(true)
  })
  socket.on('left', () =>{
    setIsThere(false)
    setFindNew(false)
  })
  socket.on('finding', ()=>{
    setFindNew(true)
  })
socket.on("msg", data =>{
  addNewMsg(data)
})

  return () => socket.disconnect();
},[]);

 
const SendMsg = (msg) =>{
  socket.emit("msg", {msg:msg})
  let tempArr = [...MSG ,{msg:msg,from:'me'}]
  setMSG(tempArr)
}
const Ready = ()=>{
  socket.emit('ready')
  setMSG([])
}
const addNewMsg = (data)=>{
  setMSG(prevMSG => [...prevMSG,data])
}
  return (
    <div className="App" style={AppStyle}>
      <ChatScreen MSG={MSG} findNew={findNew} isThere={isThere}/>
      <ChatBox Ready={Ready} findNew={findNew} isThere={isThere} SendMsg={SendMsg} />
    </div>
  );
}

export default App;

///////////////////Css/////////////

const AppStyle = {
  'width':'500px',
  'height':'100px',
  'margin':'auto',
  
}
