import { Component } from "react";

class CounterClass extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,

        }
    }

    plus = () => {
        this.setState({
            count: this.state.count + 1,

        })
    }

    minus = () => {
        this.setState({
            count: this.state.count > 0 ? this.state.count - 1 : 0
        })
    }

    render() {
        return (
            <>
                <div className="container my-5">
                    <div className="row justify-content-center">
                        <div className="col-10 col-sm-8 col-md-6 col-lg-4">
                            <div className="card shadow-lg text-center p-4">
                                <h2 className="mb-3 text-primary">ClassComponent</h2>
                                <h3 className="display-5 fw-bold text-dark">{this.state.count}</h3>
                                <div className="mt-3">
                                    <button className="btn btn-success btn-lg me-3" onClick={this.plus}>+</button>
                                    <button className="btn btn-danger btn-lg" onClick={this.minus}>-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}

export default CounterClass