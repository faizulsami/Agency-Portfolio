"use client"
import React from 'react'
import AosAnim from "aos";

export default function Aos() {

    React.useEffect(() => {
        AosAnim.init({})
    }, [])

    return null;
}
