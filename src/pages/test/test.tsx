'use client'
import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from 'react';

import './test.scss'

const textCss = {
    'fontWeight': 'bold',

}

export interface ITextParams{
    value?: string,
    words: Array<string>
}

export default function TextComponent({ value, words }:ITextParams) {

    // 值不会动态改变 想动态改变只能用useState
    // let likeColor:'green'|'red' = 'red';

    const [likeColor, setLikeColor] = useState('red')

    const [likes, setLikes] = useState(0);

    const [biubiuCount, setBiuBiuCount] = useState(0)

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
            <MyButton count={biubiuCount} onClick={() => {setBiuBiuCount(biubiuCount + 1)}} ></MyButton>
            <MyButton count={biubiuCount} onClick={() => {setBiuBiuCount(biubiuCount + 1)}} ></MyButton>

        </div>
    )
}


function MyButton({ count, onClick }: { count: number, onClick: any }) {

    return (
        <button onClick={ onClick }>
            biubiubiubiu鸡哔你{count}
        </button>
    )
}