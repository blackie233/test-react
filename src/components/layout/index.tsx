import Head from "../header";
import React from "react";

type ILayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: ILayoutProps) {


    return (
        <>
            <Head></Head>
            <div>
                { children }
            </div>
        </>
    )
}