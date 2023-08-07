'use client'
import React from "react";

export default function Clock({color,time,dispaly}:any){
    return(
        <h1 style={{color: color}}>
            时间：{time}
        </h1>
    )
}