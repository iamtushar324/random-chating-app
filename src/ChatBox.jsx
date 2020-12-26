import React , {useState} from "react"
import './ChatBox.css'


function ChatBox(props){

    const [msg , setMsg] = useState('')

    const sendMsg = (e)=>{
        props.SendMsg(msg)
        setMsg(' ')
    }
    const handleKeyDown = (e) => {
        if(e.keyCode === 13){
            sendMsg()
        }
    }

    return (
        <div className="chat_box">
            <button className="send_btn" onClick={props.isThere==false ? (props.findNew==false ? props.Ready : null ) :sendMsg}>{props.isThere==false ? (props.findNew==false ? 'New' : 'Finding') : 'Send'} </button>
            <input className="msg_input" value={msg} onChange={(e)=>{setMsg(e.target.value)}} onKeyDown={handleKeyDown} type="text" placeholder="Write msg and hit Enter"></input>

        </div>
    )
}

export default ChatBox
