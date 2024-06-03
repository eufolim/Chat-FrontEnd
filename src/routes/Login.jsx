import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../chat.css'

export default function Login() {
    const loginRef = useRef();
    const navigate = useNavigate();
    const HanddleLogin = (event) => {
        event.preventDefault();
        navigate('/chat?username='+loginRef.current.value)
    };
    return(
        <div id="mainDiv" className='flex'>
            <form onSubmit={HanddleLogin} id="mainForm" className='relative border-4 border-green-500 bg-green-500'>
                <h2>Nome de Usuario</h2>
                <input ref={loginRef} id="userName" className="userName" type="text" />
            </form>
        </div>
    )
}