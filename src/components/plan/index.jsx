
import React, { useState, useEffect } from 'react'

function Circle (props) {
    let timer = null
    const { onClickFn } = props
    const [r, setRadius] = useState(props.r ? props.r : 10)  // 圆的半径
    const [borderR, setBorderR] = useState(props.borderR ? props.borderR : 2) // 圆边框宽度
    const [stroke, setStroke] = useState('')
    const [seconds, setseconds] = useState(1)
    const [started, setStarted] = useState(props.started)
    const strokeChange = (num) => {
        setStroke(`${num / 100 * 2 * Math.PI * r}  ${2 * Math.PI * r}`)
        setseconds(num)
    }
    const moveByStarted = (num) => {
        const { started, endNum } = props
        if (started && endNum > seconds) {
            if (timer) {
                clearInterval(timer)
            } else {
                timer = setInterval(() => {
                    let secondsVar = seconds
                    secondsVar += 1
                    strokeChange(secondsVar)
                }, 1000)
            }
        } else {
            clearInterval(timer)
        }
    }
 
    // didmount
    useEffect(() => {
        // strokeChange(props.value)
    }, [])

    // didUpdate
    useEffect(() => {
        moveByStarted(seconds)
    }, [seconds])

    useEffect(() => {
        if (props.started !== started) {
            moveByStarted()
        }
    }, [props])

    return (
    <svg id="path1" width={2*r + borderR*2 } height={2*r + borderR*2 } onClick={onClickFn}>
        <circle
            cx={r + borderR }
            cy={r + borderR }
            r={r}
            strokeWidth={borderR}
            stroke="#E5E5E5"
            fill="none"
        ></circle>
        <circle
            cx={r + borderR }
            cy={r + borderR }
            r={r}
            strokeWidth={borderR}
            stroke="red"
            fill="none"
            transform={`rotate(-90, ${r + borderR}, ${r + borderR})`}
            stroke-dasharray={stroke}
            animation='none'
        ></circle>
    </svg>
    )
}
export default Circle