import React, {useState} from 'react';
import classes from './Counter.module.scss'
const Counter = () => {
    const [count, setCount] = useState<number>(0)
    const increment1 = () => {
        setCount((count) => {
            console.log('setCount')
            return count + 1
        })
        console.log('increment1')
    }

    console.log('render')
    const increment3 = () => {
        increment1()
        increment1()
        increment1()
    }

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button className={classes.btn} onClick={increment1}>+1</button>
                <button onClick={increment3}>+3</button>
            </div>
        </div>

    );
};

export default Counter;