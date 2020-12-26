import './ChatScreen.css'
import Loading from "./solar-system.svg"

function ChatScreen(props){


    return (
        <div className="chat_screen">
            {props.MSG.map((e,i)=>{return <div key={i} id={"chats" + i} className={e.from=='me' ? 'my_chats':'re_chats'}>{e.msg}</div> })}
            {props.findNew ? null : <h3 className="find_new">Find New Friend ? Click On New</h3>}
            {props.findNew && props.isThere==false && 
            <img src={Loading} alt="Loading" className="loader" />
            }
        </div>
    )
}

export default ChatScreen