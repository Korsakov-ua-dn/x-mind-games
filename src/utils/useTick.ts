import {useEffect, useRef} from "react";

export const useTick = () => {
    const tick = useRef<HTMLAudioElement>();

    tick.current = new Audio()
    tick.current.src = "/tick.mp3"
    
    const IntervalRef = useRef<any>();

    useEffect(() => {
        IntervalRef.current = setInterval(() => {
            if (tick.current) tick.current.play()
        }, 1000)
        return () => clearInterval(IntervalRef.current)
    },[])

    return () => clearInterval(IntervalRef.current)
}