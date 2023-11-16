import { useState } from "react"
import classes from './Counter.module.scss'


export const Counter = () => {
    const [count, setCount] = useState(0)

    const inc = () => {
        setCount(count + 1)
    }

    return (
        <div className={classes.button}>
            {count}
            <button onClick={inc}>+</button>
        </div>
    )
}