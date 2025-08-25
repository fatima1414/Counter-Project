import { useState } from "react";
const CounterFn = () => {
    const [count, setCount] = useState(0)

    function plus() {
        setCount(count + 1)
    }

    function minus() {
        count > 0 ? setCount(count - 1) : count
    }

    return (
        <>
            <div><h1>With Using Function</h1>
                <div className="mx-auto my-5 p-5 shadow text-center">
                    <h2>{count}</h2>
                    <button className="btn btn-danger me-4" onClick={plus}>+</button>
                    <button className="btn btn-success " onClick={minus}>-</button>

                </div>
            </div>
        </>
    )
}

export default CounterFn