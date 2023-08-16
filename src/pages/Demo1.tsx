'use client'
import React, {useState} from "react";

export default function Clock({color,time,dispaly}:any){
    const [index,setIndex] = useState(0)
    const [isSend,setIsSend] = useState(false)
    const [message, setMessage] = useState('Hi!');
    // @ts-ignore
    // const root = createRoot(document.getElementById('root'));
    // root.render(<GuessingGame></GuessingGame>)
    function addIndex(){
        setIndex(index+1)
    }
    if(isSend){
        return <h1>hello</h1>
    }

    return(
        <div>
            <button onClick={addIndex}> {index}</button>
            <h1 style={{color: color}}>
                时间：{time}
            </h1>

            <form onSubmit={(e)=>{
                e.preventDefault()
                setIsSend(true)
            }}>
                <textarea placeholder="index"
                    value={index}
                    onChange={e=>setMessage(e.target.value)}
                >
                </textarea>
                <button type="submit">Send</button>
            </form>
        </div>
       )
}