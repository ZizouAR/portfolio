import { useEffect, useState } from "react";


function MagicFeather({ text, speed = 50, onFinished, startIn = 0 }: { text: string, speed?: number, onFinished?: { (): void }, startIn?: number }) {
    const [magicText, setMagicText] = useState("");
    const [start, setStart] = useState(false)
    const [animationFinished, setAnimationFinished] = useState(false);

    useEffect(() => {
        if(!start) return
        if (magicText.length === text.length) return setAnimationFinished(true)

        const writer = setTimeout(() => {
            setMagicText(magicText + text.charAt(magicText.length))
        }, speed)

        return () => {
            clearTimeout(writer)
        }
    }, [magicText, start])

    useEffect(() => {
        const starting = setTimeout(() => {
            setStart(true)
        }, startIn)

        return () => {
            clearTimeout(starting)
        }
    }, [])

    /**
     * Execute a callback when type animation is finished
     */

    useEffect(() => {
        if (!animationFinished) return

        if (onFinished) {
            onFinished()
        }
    }, [animationFinished])

    if(!start) return ""

    return magicText.length === text.length ? magicText : `${magicText}|`
}

export default MagicFeather