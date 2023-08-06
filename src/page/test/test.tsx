'use client'
import ReactDOM from "react-dom/client";
import { useState } from 'react';

import './test.scss'

const textCss = {
    'font-weight': 'bold',

}

export interface ITextParams{
    value: string,
    words: Array<string>
}

export default function TextComponent({ value, words }:ITextParams) {

    // 值不会动态改变 想动态改变只能用useState
    // let likeColor:'green'|'red' = 'red';

    const [likeColor, setLikeColor] = useState('red')

    const [likes, setLikes] = useState(0);

    const handleLike = (e:any) => {

        console.log('likelike')
        // console.log(e)
        // todo 数组如何动态更新页面内容
        // let data:Array<string> = likes
        // data.push('❤️')
        setLikes(likes + 1)
        setLikeColor(likeColor => likeColor == 'red' ? 'green' : 'red')
    }

    return (
        <div>
            <span>Test组件</span>
            <div>{ value }</div>
            <div>
                { words.map((word,index) => (
                    <span key={`word+${index}`}>{ word },</span>
                )) }
            </div>
            <button onClick={handleLike}>Like❤️</button>
            {/*<div>{likes.map((like,index) => (*/}
            {/*    like*/}
            {/*    // <span key={'like'+ index}>{like}</span>*/}
            {/*))}</div>*/}
            <div style={textCss as any} className={ `text ${likeColor}` }>Likes: {likes}</div>
            <MyButton></MyButton>
            <MyButton></MyButton>
        </div>
    )
}


function MyButton() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <button onClick={ handleClick }>
            biubiubiubiu鸡哔你{count}
        </button>
    )
}