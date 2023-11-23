import { useState } from 'react'

export default function PopUp({ children }) {
    let [fade, setFade] = useState(false)
    setTimeout(() => {
        setFade(true)
        console.log('aaa')
    }, 2500)
    return (
        <>
            <div
                className={`${
                    fade ? 'animate-fade-out' : 'animate-fade-in'
                } fixed flex w-full items-center justify-center`}
            >
                <div className="rounded-lg bg-white p-6 shadow-lg">
                    {children}
                </div>
            </div>
        </>
    )
}
