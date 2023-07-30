'use client'
import ReactDOM from "react-dom/client";
import React from "react";

export interface ITextParams{
    value: string,
    words: Array<string>
}

export default function TextComponent({ value, words }:ITextParams) {

    const [likes, setLikes] = React.useState(0);

    const handleLike = (e:any) => {

        console.log('likelike')
        // console.log(e)
        // todo 数组如何动态更新页面内容
        // let data:Array<string> = likes
        // data.push('❤️')
        setLikes(likes + 1)
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
            <div>Likes: {likes}</div>
        </div>
    )
}
