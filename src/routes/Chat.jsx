import React, { useState, useRef } from 'react'
import { useSearchParams } from 'react-router-dom';
import '../chat.css'

export default function Chat () {

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("username"))
  var messageList = [
      {menssagen:"Olá Sr. "+(searchParams.get("username")??"Usuario"), user:"Atendente"},
      {menssagen:"Blabla blabla blabla?", user:"Atendente"},
      {menssagen:"Blablaaaa Bla", user:searchParams.get("username")??"Você"},
      {menssagen:"Bla blabla Ba", user:searchParams.get("username")??"Você"},
      {menssagen:"KKKKKKKKKKK blabla?", user:"Atendente"},
      {menssagen:"Blabla Blaaba" ,user:"Atendente"},
    ];


  const [list,setList] = useState(messageList)
  const inputRef = useRef()
  const HanddleSubmit = (event) => {
    const newList = list.concat({menssagen:inputRef.current.value,user:searchParams.get("username")??"Você"});
    setList(newList);
    inputRef.current.value = "";
    event.preventDefault();
  }

  return (
    <>
      <div id="chat-screen" className=" relative border-4 border-green-500 bg-green-500 p-1 shadow-lg m-5 rounded-md">
        <header className="p-1 border-b-4 border-green-500 text-center bg-green-500 text-white font-bold">
          <h2>Atendimento on-line</h2>
        </header>
        <div id="messages-list" className="p-1 border rounded bg-white overflow-auto max-h-96 p-1.5">
          {list.map((item)=>{
            return(<Message key={item} menssagen={item.menssagen} user={item.user}/>)
          })}
        </div>
        <footer className="p-1 border-t-4 border-green-500 bg-green-500">
          <form onSubmit={HanddleSubmit} id="form-chat-send" method="post" className="flex gap-2">
            <input ref={inputRef} type="text" id="text-message" name="message" className="flex-1 px-1 rounded"/>
            <button type="submit" className="bg-green-100 rounded px-1">ENVIAR</button>
          </form>
        </footer>
      </div>
    </>
  )
}

function Message ({menssagen,user}) {
  const [searchParams] = useSearchParams();
  var userM = ""
  if (user == searchParams.get("username")) {
    var userM = " items-end"
  }
  return(
    <div className={"message-item" + userM + " flex flex-col py-0.5"}>
        <div className="msg-user text-xs"><strong>{user} diz:</strong></div>
        <div className="msg-chat border-2 border-green-500 rounded w-fit px-1.5">{menssagen}</div>
    </div>
  )
}  