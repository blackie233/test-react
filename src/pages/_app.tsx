import './styles.scss'
import React from "react";

export default function MyApp({ Component, pageProps }:any) {

    const getLayout = Component.getLayout || ((page:any) => page)

    return getLayout(<Component { ...pageProps } />)
}