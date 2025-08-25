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
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-10 col-sm-8 col-md-6 col-lg-4">
                        <div className="card shadow-lg text-center p-4">
                            <h2 className="mb-3 text-primary">With Function</h2>
                            <h3 className="display-5 fw-bold text-dark">{count}</h3>
                            <div className="mt-3 d-flex justify-content-center">
                                <button className="btn btn-success btn-lg me-3" onClick={plus}>plus</button>
                                <button className="btn btn-danger btn-lg" onClick={minus}>minus</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default CounterFn